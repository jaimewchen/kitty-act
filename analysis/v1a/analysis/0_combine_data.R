library(here)
library(tidyverse)

data_directory <- here("..","data","raw")
processed_data_directory <- here("..","data","processed")
file_name <- "kitty-act-v1a"

merge_and_deidentify_data <- function(raw_data_directory, 
                                      merged_data_path, 
                                      min_row=54) {
  
  raw_files <- here(raw_data_directory, dir(here(raw_data_directory), "*.csv"))
  
  #read data
  raw_data <- map_df(raw_files, function(file) {
    d <- read_csv(file) %>% 
      mutate(
        file_name = file,
        response = as.character(response)
      )
  }) 
  
  # count how many rows in each file 
  raw_count <- raw_data %>% 
    group_by(file_name) %>%
    count() 
  
  raw_data <- raw_data %>%
    left_join(raw_count)
  
  #remove abbreviated responses
  cleaned_data <- raw_data %>%
    filter(n>=min_row) 
  
  #remove workerIds
  anonymized_data <- cleaned_data %>%
    select(-prolific_id)
  
  #keep cleaned data for verifying participation
  write_csv(cleaned_data, here(merged_data_path,paste0(file_name,"-alldata.csv")))
  
  #keep anonymized data
  write_csv(anonymized_data, here(merged_data_path,paste0(file_name,"-alldata-anonymized.csv")))
  
}


merge_and_deidentify_data(data_directory, processed_data_directory)
