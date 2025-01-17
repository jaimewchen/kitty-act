library(here)
library(tidyverse)
library(jsonlite)
library(tidyjson)
library(rlang)
source("helper.R")

data_path <- here("..","data","processed", "kitty-act-v1a-alldata.csv")
prolific_path <- here("..","data","processed","catact_v1_prolific_submissions.csv")
#qualtrics_path <- here("..","data","processed","CatAct V1_January 26, 2023_21.52_processed.csv")

#### read in data ####
d <- read_csv(data_path)
prolific <- read_csv(prolific_path)
#qualtrics <- read_csv(qualtrics_path)

#### handle/ compare to cloudresearch submissions ####
unique_pavlovia_participants <- d %>%
  distinct(prolific_id,session_id,study_id,code)

cloud_submitted <- cloud %>%
  filter(ApprovalStatus!="Not Submitted")

#### comparing participants
setdiff(unique_pavlovia_participants$workerId,cloud_submitted$AmazonIdentifier)
setdiff(cloud_submitted$AmazonIdentifier,unique_pavlovia_participants$workerId)
## one cloud participant missing for unknown reasons

setdiff(unique_pavlovia_participants$workerId,qualtrics$workerId)
setdiff(qualtrics$workerId,unique_pavlovia_participants$workerId)

#### join
cloud_submitted <- cloud_submitted %>%
  left_join(unique_pavlovia_participants, by=c("AmazonIdentifier"="workerId"))

sum(cloud_submitted$`Actual Completion Code`==cloud_submitted$code,na.rm=TRUE)
#one participant entered their workerId instead of a completion code

#### counterbalancing check
#check number of sessions per id
sessions_per_id <- d %>%
  distinct(prolific_id,file_name) %>%
  group_by(prolific_id) %>%
  count()

condition_assignment_1 <- d %>%
  distinct(prolific_id,stim_set,number_training_image_order_index) %>%
  group_by(stim_set,number_training_image_order_index) %>%
  summarize(
    n=n()
  )

condition_assignment_2 <- d %>%
  distinct(prolific_id,stim_set,number_training_image_order_index,catk_parameter_1,catk_parameter_2) %>%
  group_by(stim_set,number_training_image_order_index,catk_parameter_1,catk_parameter_2) %>%
  summarize(
    n=n()
  )
