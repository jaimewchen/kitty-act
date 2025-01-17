library(here)
library(tidyverse)

data_directory <- here("raw_data")
processed_data_directory <- here("processed_data")
file_name <- "kitty-act-v1"

merge_data <- function(raw_data_directory, 
                                      merged_data_path, 
                                      min_row=200,ext=".csv") {
  
  raw_files <- here(raw_data_directory, dir(here(raw_data_directory), ext))
  
  #read data
  raw_data <- map_df(raw_files, function(file) {
    d <- read.csv(file) %>% 
      mutate(
        file_name = file 
      )
  }) 
  
  #keep cleaned data for verifying participation
  write_csv(raw_data, here(merged_data_path,paste0(file_name,"-alldata.csv")))
}


merge_data(data_directory, processed_data_directory)
