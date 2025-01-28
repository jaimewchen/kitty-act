library(here)
library(tidyverse)
library(jsonlite)
library(tidyjson)
library(rlang)
library(stringdist)
source("helper.R")

data_path <- here("..","data","processed", "kitty-act-v1a-alldata-anonymized.csv")
write_path <- here("..","data","processed")

#### read in data ####
d <- read_csv(data_path)

#### process survey/ nested responses ####
#unnesting json
survey_responses <- d %>% 
  filter(trial_type %in% c("survey-html-form","survey-text","survey-multi-choice","survey-multi-select")) %>%
  select(subject,number_training_images,trial_type,current_category_training_level,current_category_kind,response) %>%
  mutate(json = map(response, ~ fromJSON(.) %>% as.data.frame())) %>% 
  unnest(json) %>%
  group_by(subject) %>%
  fill(age,gender,country,language,other_languages,race,education,strategy,choice_strategy,comments,.direction = "downup") %>%
  select(-response,-trial_type) %>%
  filter(!is.na(current_category_training_level)) %>%
  fill(name_check,.direction = "down") %>%
  fill(word_meaning,.direction = "up") %>%
  distinct()

d <- d %>%
  left_join(survey_responses)

#### handle exclusions ####

manage_exclusion_d <- d %>%
  #filter(!(subject %in% previous_participants$subject)) %>%
  filter(!is.na(current_category_kind)) %>%
  distinct(subject,
           current_category_kind,
           current_category_training_level, 
           current_training_label,
           name_check,
           word_meaning,
           age,
           gender,
           country,
           language,
           other_languages,
           race,
           education,
           strategy,
           choice_strategy,
           comments)

#exclusion critera
manage_exclusion_d %>%
  select(subject,
         current_category_kind,
         current_category_training_level, 
         current_training_label,
         name_check,
         word_meaning,
         strategy,
         choice_strategy,
         comments) %>%
  View()
  
#1. inspect visually for obvious bot-like responses and/ or gibberish
# strategy/ choices/ comments: some likely non-L1 English participants, but no obvious bot-like/ gibberish responses
# word meaning: some definite strangeness here, marking a few for exclusion
exclude_open_responses <- c(
  "p55845", #unusual word meaning responses
  "p32877" #chatgpt-like responses to word meaning
) 

#2. investigate name check responses
incorrect_name_check_d <- manage_exclusion_d %>%
  mutate(name_check_edited = trimws(tolower(name_check))) %>%
  mutate(
    levenshtein_distance = stringdist(current_training_label,name_check_edited)
  ) %>%
  filter(levenshtein_distance>1)

summarize_incorrect_name_check_d <- incorrect_name_check_d %>%
  group_by(subject) %>%
  summarize(n=n(),levenshtein_distance = mean(levenshtein_distance))

exclude_fail_name_check <- summarize_incorrect_name_check_d %>%
  filter(n>1) %>% # at least 5 of 6 trials have correct name
  pull(subject)

#3. check sampling and test response locations
##sampling
sampling_locations <- d %>%
  #filter(!(subject %in% previous_participants$subject)) %>%
  filter(trial_type=="html-button-response-cols") %>%
  select(subject,trial_type,response) 
#number of selections by index/ location
sampling_location_num <- sampling_locations %>%
  group_by(subject,response) %>%
  summarize(n=n())
exclude_sampling_location <- sampling_location_num %>%
  filter(n==6) %>%
  pull(subject)
##test
test_locations <- d %>%
  #filter(!(subject %in% previous_participants$subject)) %>%
  filter(trial_type=="html-button-response-catact") %>%
  select(subject,trial_type,selection_index)
test_location_num <- test_locations %>%
  group_by(subject,selection_index) %>%
  summarize(n=n())
exclude_test_location <- test_location_num %>%
  filter(n==6) %>%
  pull(subject)

exclusions <- unique(c(exclude_open_responses,exclude_fail_name_check,exclude_sampling_location,exclude_test_location))

write_csv(data.frame(subject=exclusions),here(write_path,"kitty-act_v1a_exclusions.csv"))

## demographic info
# remove excluded participants from demographic analysis
survey_dem <- survey_responses %>% filter(!subject %in% c("p55845", "p32877", "p973831")) %>% 
  select(subject, age, gender, language, other_languages, race, education) %>% 
  mutate(gender = tolower(gender)) %>%
  mutate(age = as.numeric(age)) %>% 
  unique()
# gender
survey_dem %>% filter(grepl("f", gender)) %>% nrow()
# age
mean(survey_dem$age)
sd(survey_dem$age)

## add participant-level indicator for exclusions to dataset
d <- d %>%
  mutate(
    exclude_participant = ifelse(subject %in% exclusions,1,0)
  )

## recheck condition assignments
#### counterbalancing check
condition_assignment <- d %>%
  filter(exclude_participant==0) %>% #after participant level exclusions
  distinct(subject,stim_set,number_training_image_order_index,catk_parameter_1,catk_parameter_2) %>%
  group_by(stim_set,number_training_image_order_index,catk_parameter_1,catk_parameter_2) %>%
  summarize(
    n=n()
  )

condition_assignment %>%
  group_by(stim_set,number_training_image_order_index) %>%
  summarize(
    total_n=sum(n)
  )

condition_assignment %>%
  group_by(stim_set,number_training_image_order_index,catk_parameter_1) %>%
  summarize(
    total_n=sum(n)
  ) %>%
  View()

condition_assignment %>%
  group_by(stim_set,number_training_image_order_index,catk_parameter_2) %>%
  summarize(
    total_n=sum(n)
  ) %>%
  View()

#### process sampling data ####
#treat all training levels in the 1-item condition as "narrow"
d <- d %>%
  mutate(
    current_category_training_level = case_when(
      number_training_images == 1 ~ "narrow",
      TRUE ~ current_category_training_level
    )
  )

# process sampled image
d <- d %>%
  mutate(
    sampled_imagename = str_remove(sampled_image,"stims/"),
    sampled_imagelabel = str_remove(sampled_imagename,".jpg")
  ) %>%
  rowwise() %>%
  mutate(
    sampled_category_kind_short = unlist(str_split(sampled_imagelabel,"_"))[1],
    sampled_category_level = str_replace_all(unlist(str_split(sampled_imagelabel,"_"))[3], "[:digit:]","")
  ) %>%
  mutate(
    sampled_category_kind  = case_when(
      sampled_category_kind_short == "ani" ~ "animals",
      sampled_category_kind_short == "veg" ~ "vegetables",
      sampled_category_kind_short == "veh" ~ "vehicles",
      sampled_category_kind_short == "fru" ~ "fruit",
      sampled_category_kind_short == "sea" ~ "sea",
      sampled_category_kind_short == "spo" ~ "sports",
    )
  ) %>%
  mutate(
    within_category_sample = ifelse(sampled_category_kind == current_category_kind,1,0),
    within_category_sample_f =  ifelse(sampled_category_kind == current_category_kind,"within-category","other-category"),
  ) %>%
  mutate(
    sampled_category_level_kind_info=ifelse(within_category_sample==0,"outside_category",sampled_category_level)
  )

sampling_data <- d %>%
  filter(trial_type == "html-button-response-catact") %>%
  select(subject,stim_set,number_training_image_order_index,number_training_image_order_vector,number_training_images,exclude_participant,trial_index,current_training_images,current_training_label,name_check,shuffled_sampling_images,current_category_label_level, current_category_kind,current_category_training_level,sampled_image, sampled_label,sampled_imagename,sampled_imagelabel,sampled_category_kind_short,sampled_category_kind,sampled_category_level,within_category_sample,within_category_sample_f,sampled_category_level_kind_info) %>%
  mutate(
    trial_number = case_when(
      trial_index==8 ~ 1,
      trial_index==15 ~ 2,
      trial_index==22 ~ 3,
      trial_index==29 ~ 4,
      trial_index==36 ~ 5,
      trial_index==43 ~ 6,
      TRUE ~ NA
    )
  )

#categorizing choice types
sampling_data <- sampling_data %>%
  mutate(
    sampling_choice_type = case_when(
      sampled_category_level_kind_info == "sub" ~ "confirm",
      number_training_images == 3 & current_category_training_level == "intermediate" & sampled_category_level_kind_info == "bas" ~ "confirm",
      number_training_images == 3 & current_category_training_level == "broad" & sampled_category_level_kind_info == "bas" ~ "confirm",
      number_training_images == 3 & current_category_training_level == "broad" & sampled_category_level_kind_info == "sup" ~ "confirm",
      TRUE ~ "explore"
    )
  ) |>
  mutate(
    chance_consistent = case_when(
      number_training_images == 1 ~ 1/4,
      current_category_training_level == "narrow" ~ 1/4,
      current_category_training_level == "intermediate" ~ 2/4,
      current_category_training_level == "broad" ~ 3/4
    )
  ) %>%
  #add levenshtein distance
  mutate(name_check_edited = trimws(tolower(name_check))) %>%
  mutate(
    levenshtein_distance = stringdist(current_training_label,name_check_edited)
  )

# write sampling data
write_csv(sampling_data,here(write_path,"kitty-act_v1a-sampling-data.csv"))

# representing sampling in long format with all image options
sampling_data_long <- sampling_data %>%
  mutate(sampling_options = map(shuffled_sampling_images, ~ convert_array(.,column_name="sampling_image"))) %>%
  unnest(sampling_options) 

sampling_data_long <- sampling_data_long %>%
  rowwise() %>%
  mutate(
    is_chosen = case_when(
      sampled_image == sampling_image ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    sampling_image_type = case_when(
      str_detect(sampling_image,"sup") ~ "superordinate",
      str_detect(sampling_image,"bas") ~ "basic",
      str_detect(sampling_image,"sub") ~ "subordinate"
    )
  ) %>%
  mutate(
    sampling_image_category = case_when(
      str_detect(sampling_image,"ani") ~ "animals",
      str_detect(sampling_image,"veg") ~ "vegetables",
      str_detect(sampling_image,"veh") ~ "vehicles",
      str_detect(sampling_image,"fru") ~ "fruit",
      str_detect(sampling_image,"sea") ~ "sea",
      str_detect(sampling_image,"spo") ~ "sports",
    )
  )


#### test data ####
test_array <- d %>% 
  filter(trial_type == "html-button-response-catact") %>%
  select(subject,stim_set,number_training_image_order_index,number_training_image_order_vector,number_training_images,exclude_participant,trial_index,trial_type,current_category_training_level,current_category_label_level,current_category_kind,current_hypernym_category_kind,final_choice_array) %>%
  mutate(choices = map(final_choice_array, ~ convert_array(.,column_name="test_choice"))) %>%
  unnest(choices) %>%
  mutate(
    trial_number = case_when(
      trial_index==8 ~ 1,
      trial_index==15 ~ 2,
      trial_index==22 ~ 3,
      trial_index==29 ~ 4,
      trial_index==36 ~ 5,
      trial_index==43 ~ 6,
      TRUE ~ NA
    )
  )

test_array_clean <- test_array %>%
  mutate(
    test_choice_type = case_when(
      str_detect(test_choice,"sup") ~ "superordinate",
      str_detect(test_choice,"bas") ~ "basic",
      str_detect(test_choice,"sub") ~ "subordinate"
    )
  ) %>%
  mutate(
    test_choice_category = case_when(
      str_detect(test_choice,"ani") ~ "animals",
      str_detect(test_choice,"veg") ~ "vegetables",
      str_detect(test_choice,"veh") ~ "vehicles",
      str_detect(test_choice,"fru") ~ "fruit",
      str_detect(test_choice,"sea") ~ "sea",
      str_detect(test_choice,"spo") ~ "sports",
    )
  ) %>%
  mutate(
    test_choice_match_category = ifelse(test_choice_category == current_category_kind,1,0),
    test_choice_match_ground_truth_category = case_when(
      current_category_label_level == "hypernym" & test_choice_category == current_hypernym_category_kind ~ 1,
      test_choice_category == current_category_kind ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    test_choice_type_training_consistent = case_when(
      number_training_images == 1 &  test_choice_type %in% c("subordinate") & test_choice_match_category == 1 ~ 1,
      current_category_training_level == "narrow" &  test_choice_type %in% c("subordinate") & test_choice_match_category == 1 ~ 1,
      current_category_training_level == "intermediate" &  test_choice_type %in% c("subordinate","basic") & test_choice_match_category == 1 ~ 1,
      current_category_training_level == "broad" &  test_choice_type %in% c("subordinate","basic","superordinate")& test_choice_match_category == 1 ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    test_choice_type_label_consistent = case_when(
      current_category_label_level == "narrow" &  test_choice_type %in% c("subordinate") & test_choice_match_category == 1 ~ 1,
      current_category_label_level == "intermediate" &  test_choice_type %in% c("subordinate","basic") & test_choice_match_category == 1 ~ 1,
      current_category_label_level == "broad" & test_choice_match_category == 1 ~ 1,
      current_category_label_level == "hypernym" &  test_choice_match_ground_truth_category == 1 ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    total_number_correct_options = case_when(
      current_category_label_level == "narrow" ~ 1,
      current_category_label_level == "intermediate" ~ 2,
      current_category_label_level == "broad" ~ 4,
      current_category_label_level == "hypernym" ~ 8
    )
  )

#join with sampling data
test_array_clean <- test_array_clean %>%
  left_join(sampling_data)

# write test data (shorter representation)
write_csv(test_array_clean,here(write_path,"kitty-act_v1a-test-data.csv"))


#### test data - representing all images in long format ####
test_array_options <- d %>% 
  filter(trial_type == "html-button-response-catact") %>%
  select(subject,stim_set,number_training_image_order_index,number_training_image_order_vector,number_training_images,exclude_participant,trial_index,trial_type,current_category_training_level,current_category_label_level,current_category_kind,current_hypernym_category_kind,shuffled_test_images,final_choice_array) %>%
  mutate(test_options = map(shuffled_test_images, ~ convert_array(.,column_name="test_image"))) %>%
  unnest(test_options) %>%
  mutate(
    trial_number = case_when(
      trial_index==8 ~ 1,
      trial_index==15 ~ 2,
      trial_index==22 ~ 3,
      trial_index==29 ~ 4,
      trial_index==36 ~ 5,
      trial_index==43 ~ 6,
      TRUE ~ NA
    )
  )

test_array_options <- test_array_options %>%
  rowwise() %>%
  mutate(
    is_chosen = case_when(
      str_detect(final_choice_array,test_image) ~ 1,
      TRUE ~ 0
    )
  )

test_array_options_clean <- test_array_options %>%
  ungroup() %>%
  mutate(
    test_image_type = case_when(
      str_detect(test_image,"sup") ~ "superordinate",
      str_detect(test_image,"bas") ~ "basic",
      str_detect(test_image,"sub") ~ "subordinate"
    )
  ) %>%
  mutate(
    test_image_category = case_when(
      str_detect(test_image,"ani") ~ "animals",
      str_detect(test_image,"veg") ~ "vegetables",
      str_detect(test_image,"veh") ~ "vehicles",
      str_detect(test_image,"spo") ~ "sports",
      str_detect(test_image,"fru") ~ "fruit",
      str_detect(test_image,"sea") ~ "sea"
    )
  ) %>%
  mutate(
    test_image_match_category = ifelse(test_image_category == current_category_kind,1,0),
    test_image_match_ground_truth_category = case_when(
      current_category_label_level == "hypernym" & test_image_category == current_hypernym_category_kind ~ 1,
      test_image_category == current_category_kind ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    test_image_type_training_consistent = case_when(
      number_training_images == 1 &  test_image_type %in% c("subordinate") & test_image_match_category == 1 ~ 1,
      current_category_training_level == "narrow" &  test_image_type %in% c("subordinate") & test_image_match_category == 1 ~ 1,
      current_category_training_level == "intermediate" &  test_image_type %in% c("subordinate","basic") & test_image_match_category == 1 ~ 1,
      current_category_training_level == "broad" &  test_image_type %in% c("subordinate","basic","superordinate")& test_image_match_category == 1 ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    test_image_type_label_consistent = case_when(
      current_category_label_level == "narrow" &  test_image_type %in% c("subordinate") & test_image_match_category == 1 ~ 1,
      current_category_label_level == "intermediate" &  test_image_type %in% c("subordinate","basic") & test_image_match_category == 1 ~ 1,
      current_category_label_level == "broad" & test_image_match_category == 1 ~ 1,
      current_category_label_level == "hypernym" &  test_image_match_ground_truth_category == 1 ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    total_number_correct_options_label = case_when(
      current_category_label_level == "narrow" ~ 1,
      current_category_label_level == "intermediate" ~ 2,
      current_category_label_level == "broad" ~ 4,
      current_category_label_level == "hypernym" ~ 8
    ),
    total_number_correct_options_training = case_when(
      number_training_images == 1 ~ 1,
      current_category_training_level == "narrow" ~ 1,
      current_category_training_level == "intermediate" ~ 2,
      current_category_training_level == "broad" ~ 4
    )
  ) %>%
  mutate(
    is_match_to_training = case_when(
      test_image_type_training_consistent == is_chosen ~ 1,
      TRUE ~ 0
    ),
    is_match_to_label = case_when(
      test_image_type_label_consistent == is_chosen ~ 1,
      TRUE ~ 0
    ),
    label_matches_training = case_when(
      current_category_training_level == current_category_label_level ~ 1,
      TRUE ~ 0
    )
  ) %>%
  mutate(
    hit_training = ifelse(test_image_type_training_consistent == 1, is_match_to_training,NA),
    hit_label = ifelse(test_image_type_label_consistent == 1, is_match_to_label,NA),
    false_alarm_training = ifelse(test_image_type_training_consistent == 0,1-is_match_to_training,NA),
    false_alarm_label = ifelse(test_image_type_label_consistent == 0,1-is_match_to_label,NA),
  )

#combine with sampling data
test_array_options_clean <- test_array_options_clean %>%
  left_join(sampling_data)

# write test data (longer representation)
write_csv(test_array_options_clean,here(write_path,"kitty-act_v1a-test-data-long.csv"))

#write final data set
write_csv(d,here(write_path,"kitty-act_v1a-alldata-processed.csv"))
