//generate instructions
function generate_learning_instructions(current_training_label, current_training_images, number_training_images = 3) {
  var current_learning_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are ' + current_training_label + 's and which are not.</font></b><style="text-align:center;" /p>';
  if (number_training_images == 1) {
    current_learning_stimulus += '<p><b><font size="4.5">This is a ' + current_training_label + '.</font></b><style="text-align:center;" /p>';
    current_learning_stimulus += '<div class="row">';
    current_learning_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_learning_stimulus += '</div>';
    current_learning_stimulus += '<p><b><font size="4.5">On the next page, we will check your memory of this new word. Make sure you look at the example and the new word carefully.</font></b><style="text-align:center;" /p>';
  } else if (number_training_images == 3) {
    current_learning_stimulus += '<p><b><font size="4.5">These are 3 ' + current_training_label + 's.</font></b><style="text-align:center;" /p>';
    current_learning_stimulus += '<div class="row">';
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[1] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[2] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_learning_stimulus += '</div>';
    current_learning_stimulus += '<p><b><font size="4.5">On the next page, we will check your memory of this new word. Make sure you look at the three examples and the new word carefully.</font></b><style="text-align:center;" /p>';
  }
  current_learning_stimulus += '<p><i>Click Next when you are ready to continue.</font></i><style="text-align:center;" /p></div>';
  return (current_learning_stimulus)
}

function generate_check_instructions(current_training_label, current_training_images, number_training_images = 3) {
  var current_learning_stimulus = '<div id="container"><p><b><font size="4.5">Please enter the new word you just saw.</font></b><style="text-align:center;" /p>';
  current_learning_stimulus += '<div class="row">';
  if (number_training_images == 1) {
    current_learning_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px"></figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px"></figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px"></figcaption></figure></div>';
    current_learning_stimulus += '</div>';
    current_learning_stimulus += '<p> What is the word you just learned for this object?</p><p><input name="name_check" type="text" id="test-resp-box" size="20" required/></p>';
  } else if (number_training_images == 3) {
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px"></figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[1] + '" style="width:60%"><figcaption style="font-size:24px"></figcaption></figure></div>';
    current_learning_stimulus += '<div class="column"><figure><img src="' + current_training_images[2] + '" style="width:60%"><figcaption style="font-size:24px"></figcaption></figure></div>';
    current_learning_stimulus += '</div>';
    current_learning_stimulus += '<p> What is the word you just learned for these three objects?</p><p><input name="name_check" type="text" id="test-resp-box" size="20" required/></p>';
  }
  current_learning_stimulus += '<p><i>Click Next to continue.</font></i><style="text-align:center;" /p></div>';
  return (current_learning_stimulus)

}

function generate_sampling_instructions(current_training_label, current_training_images, number_training_images = 3) {
  var current_sampling_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are ' + current_training_label + 's and which are not.</font></b><style="text-align:center;" /p>'
  if (number_training_images == 1) {
    current_sampling_stimulus += '<p><b><font size="4.5">This is a ' + current_training_label + '.</font></b><style="text-align:center;" /p>';
    current_sampling_stimulus += '<div class="row">';
    current_sampling_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_sampling_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_sampling_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_sampling_stimulus += '</div>';
  } else if (number_training_images == 3) {
    current_sampling_stimulus += '<p><b><font size="4.5">These are 3 ' + current_training_label + 's.</font></b><style="text-align:center;" /p>';
    current_sampling_stimulus += '<div class="row">';
    current_sampling_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_sampling_stimulus += '<div class="column"><figure><img src="' + current_training_images[1] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_sampling_stimulus += '<div class="column"><figure><img src="' + current_training_images[2] + '" style="width:60%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_sampling_stimulus += '</div>';
  }
  current_sampling_stimulus += '<p><b><font size="4.5">Which of these four objects would you like to learn the name of? You can only make one choice, so choose carefully!</font></b></p>'
  current_sampling_stimulus += '<p><i><font size="4.5">Click on the object that you would like to know the name of.</font></i><style="text-align:center;" /p>';
  //current_sampling_stimulus +='<div class="row"><div class="column"></div></div></div>';
  return (current_sampling_stimulus)
}

function generate_selection_instructions(current_training_label, current_sampling_label, current_training_images, current_sampling_image, number_training_images = 3) {
  //var current_selection_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  //check if sampling label matches current training label
  if (current_training_label == current_sampling_label) {
    var sampled_label_consistent = 1;
  } else {
    var sampled_label_consistent = 0;
  }
  var current_selection_stimulus = '<div id="container">'
  if (sampled_label_consistent == 1) {
    current_selection_stimulus += '<p><b><font size="4.5">The image you selected is a <span style="color:#ff0000"><u>' + current_sampling_label + '</u></span>.</font></b><style="text-align:center;" /p>'
  } else {
    current_selection_stimulus += '<p><b><font size="4.5">The image you selected is <span style="color:#ff0000"><u>' + current_sampling_label + '</u></span>.</font></b><style="text-align:center;" /p>'
  }
  current_selection_stimulus += '<div class="row">';
  if (number_training_images == 1) {
    current_selection_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_selection_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:80%; border: 5px solid #FFFFFF; padding: 6px"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_selection_stimulus += '<div class="column"><figure><img src="' + current_sampling_image + '" style="width:80%; border: 5px solid #ff0000; padding: 6px"><figcaption style="font-size:24px;color:#ff0000">' + current_sampling_label + '</figcaption></figure></div>';
    current_selection_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_selection_stimulus += '</div class="column"></div class="column"></div class="column"></div class="column">';
  } else if (number_training_images == 3) {
    current_selection_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:80%; border: 5px solid #FFFFFF; padding: 6px"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_selection_stimulus += '<div class="column"><figure><img src="' + current_training_images[1] + '" style="width:80%; border: 5px solid #FFFFFF; padding: 6px"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_selection_stimulus += '<div class="column"><figure><img src="' + current_training_images[2] + '" style="width:80%; border: 5px solid #FFFFFF; padding: 6px"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_selection_stimulus += '<div class="column"><figure><img src="' + current_sampling_image + '" style="width:80%; border: 5px solid #ff0000; padding: 6px"><figcaption style="font-size:24px;color:#ff0000">' + current_sampling_label + '</figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column">';
  }
  current_selection_stimulus += '<div id="container"><p><b><font size="4.5">Next, you will see a set of 12 new objects and decide which of them are ' + current_training_label + 's.</font></b>';
  current_selection_stimulus += '<div id="container"><p><b><font size="4.5">Your goal is to select <u>all</u> of the ' + current_training_label + 's.</font></b>';
  current_selection_stimulus += '<p><i><font size="4.5">Click Next to continue.</font></i><style="text-align:center;" /p><style="text-align:center;" /p></div>';
  return (current_selection_stimulus)
}

function generate_test_instructions(current_training_label, current_sampling_label, current_training_images, current_sampling_image, number_training_images = 3) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div id="container">';
  current_test_stimulus += '<p style="margin-block-start:0.1em;margin-block-end:0.1em"><font size="4.5"><b>Now, pick <u>all of the other ' + current_training_label + 's</u>. </b></font><style="text-align:center;" /p>';
  current_test_stimulus += '<div class="row">';
  if (number_training_images == 1) {
    current_test_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><img src="' + current_sampling_image + '" style="width:80%"><figcaption style="font-size:24px">' + current_sampling_label + '</figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure style="opacity:0"><img src="' + current_training_images[0] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_test_stimulus += '</div class="column"></div class="column"></div class="column"></div class="column">';
  } else if (number_training_images == 3) {
    current_test_stimulus += '<div class="column"><figure><img src="' + current_training_images[0] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><img src="' + current_training_images[1] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><img src="' + current_training_images[2] + '" style="width:80%"><figcaption style="font-size:24px">' + current_training_label + '</figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><img src="' + current_sampling_image + '" style="width:80%"><figcaption style="font-size:24px">' + current_sampling_label + '</figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column">';

  }
  current_test_stimulus += '<p style="margin-block-start:0em;margin-block-end:0em"><font size="3"><i>Select ' + current_training_label + 's by clicking on them below. You can also unselect objects by clicking on them again.<br>';
  current_test_stimulus += 'When you are finished selecting <u>all</u> of the objects you think are ' + current_training_label + 's, click SUBMIT at the bottom of the page.</i></font><style="text-align:center /p>';
  return (current_test_stimulus)
}



// generate a block for KittyAct V1 Adult
function generate_block(trial, training_types, grid_image_names,number_training_images) {

  console.log(number_training_images);
  var cur_block = [];
  current_trial_info = training_types[trial];
  console.log(current_trial_info);

  //current trial info
  var current_training_label = current_trial_info["training_label"];
  var current_alternate_training_label = current_trial_info["alternate_training_label"];
  var current_category_kind = current_trial_info["category_kind"];
  var current_category_label = current_trial_info["category_label"];
  var current_category_kind_shortened = current_trial_info["category_kind_shortened"];
  var current_category_training_level = current_trial_info["category_training_level"];
  var current_category_label_level = current_trial_info["category_label_level"];
  var current_training_image_path_info = current_trial_info["training_image_path_info"]
  //select hypernym category (if needed)
  var current_hypernym_category_kind = current_trial_info["hypernym_kind"];
  var current_hypernym_category_label = current_trial_info["hypernym_code"];
  var current_hypernym_category_kind_shortened = current_trial_info["hypernym_kind_shortened"];

  console.log(current_training_label);
  console.log(current_alternate_training_label);
  console.log(current_category_kind);
  console.log(current_category_label_level);
  console.log(current_category_label);
  console.log(current_hypernym_category_kind);
  console.log(current_hypernym_category_label);
  console.log(current_hypernym_category_kind_shortened);

  // PREPPTING THE SELECTION ARRAYS

  //shuffle the grid images
  var shuffled_images = jsPsych.randomization.repeat(grid_image_names, 1);
  //put images together into an array
  var current_grid_array = []
  for (var i = 0; i < shuffled_images.length; i++) {
    current_grid_array.push('<img src="' + shuffled_images[i] + '" width=' + grid_image_width + ' height=' + grid_image_height + '>')
  }

  //create sampling array
  var within_cat_sampling_names = ["sub4.jpg", "sup3.jpg", "bas3.jpg"];
  var current_sampling_images = [];
  for (var i = 0; i < within_cat_sampling_names.length; i++) {
    current_sampling_images.push('stims/' + current_category_kind_shortened + '_' + current_category_label + '_' + within_cat_sampling_names[i])
  };
  //add fourth hypernym image
  current_sampling_images.push('stims/' + current_hypernym_category_kind_shortened + '_' + current_hypernym_category_label + '_' + 'sup4.jpg')
  console.log(current_sampling_images);

  // shuffle sampling array
  var shuffled_sampling_images = jsPsych.randomization.repeat(current_sampling_images, 1);
  // put sampling images together into an array
  var current_sample_array = [];
  for (var i = 0; i < shuffled_sampling_images.length; i++) {
    current_sample_array.push('<img src="' + shuffled_sampling_images[i] + '" width=' + grid_image_width + ' height=' + grid_image_height + '>')
  };

  //create training images
  var current_training_images = [];
  if (number_training_images == 1) {
    for (var i = 0; i < 1; i++) {
      current_training_images.push('stims/'+current_category_kind_shortened+'_'+current_category_label+'_'+current_training_image_path_info[i])
    };
  } else if (number_training_images == 3) {
    for (var i = 0; i < current_training_image_path_info.length; i++) {
      current_training_images.push('stims/'+current_category_kind_shortened+'_'+current_category_label+'_'+current_training_image_path_info[i])
    };
  };
  console.log(current_training_images);

  //create words
  var sampling_image_words = [];
  for (var k = 0; k < shuffled_sampling_images.length; k++) {
    sampling_image = shuffled_sampling_images[k];
    console.log(sampling_image);
    console.log(sampling_image.includes(current_category_label));
    console.log(sampling_image.includes("sub"));
    if (current_category_label_level == "narrow") {
      if (sampling_image.includes(current_category_label) && sampling_image.includes("sub")) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    } else if (current_category_label_level == "intermediate") {
      if (sampling_image.includes(current_category_label) && (sampling_image.includes("sub") || sampling_image.includes("bas"))) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    } else if (current_category_label_level == "broad") {
      if (sampling_image.includes(current_category_label)) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    } else if (current_category_label_level == "hypernym") {
      if (sampling_image.includes(current_category_label) || sampling_image.includes(current_hypernym_category_label)) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    }
  }

  console.log(sampling_image_words)

  var current_learning_stimulus = generate_learning_instructions(current_training_label, current_training_images, number_training_images);
  var current_check_stimulus = generate_check_instructions(current_training_label, current_training_images, number_training_images);
  var current_sampling_stimulus = generate_sampling_instructions(current_training_label, current_training_images, number_training_images);

  // display learning trial
  var learning_trial = {
    type: 'html-button-response',
    stimulus: current_learning_stimulus,
    choices: ["Next"],
    data: {
      number_training_images: number_training_images,
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level: current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "learning"
    },
  }

  cur_block.push(learning_trial);

  var check_trial = {
    type: 'survey-html-form',
    html: current_check_stimulus,
    autofocus: 'test-resp-box',
    button_label: "Next",
    data: {
      number_training_images: number_training_images,
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level: current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "label_check"
    },
  }

  cur_block.push(check_trial);

  // display sampling trial
  var sampling_trial = {
    type: 'html-button-response-cols',
    stimulus: current_sampling_stimulus,
    choices: current_sample_array,
    button_html: '<button class="jspsych-btn-image-array">%choice%</button>',
    data: {
      number_training_images: number_training_images,
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level: current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "sampling"
    }
  }

  cur_block.push(sampling_trial);

  //display selection trial
  var selection_trial = {
    type: 'html-button-response',
    on_start: function (trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.shuffled_sampling_images[last_trial_data.response];
      trial.data.sampled_label = last_trial_data.sampling_image_words[last_trial_data.response];
    },
    stimulus: function () {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_selection_instructions(
        last_trial_data.current_training_label,
        last_trial_data.sampling_image_words[last_trial_data.response],
        last_trial_data.current_training_images,
        last_trial_data.shuffled_sampling_images[last_trial_data.response],
        last_trial_data.number_training_images)
    },
    choices: ["Next"],
    data: {
      number_training_images: number_training_images,
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level: current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "sampling_feedback"
    }
  }

  cur_block.push(selection_trial);

  // display test trial
  var test_trial = {
    type: 'html-button-response-catact',
    on_start: function (trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label
    },
    stimulus: function () {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions(
        last_trial_data.current_training_label,
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        last_trial_data.number_training_images
      )
    },
    choices: current_grid_array,
    images: shuffled_images,
    response_ends_trial: false,
    margin_horizontal: '2px',
    margin_vertical: '2px',
    button_html: '<button class="jspsych-btn-image-array">%choice%</button>',
    data: {
      number_training_images: number_training_images,
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level: current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial);


  var current_test_meaning_stimulus = '<div id="container"><p> What do you think that <b>' + current_training_label + '</b> means?</p><p><input name="word_meaning" type="text" id="test-resp-box" size="40" required/></p>';
  current_test_meaning_stimulus += '<p><i>Click Next to continue.</font></i><style="text-align:center;" /p></div>';


  var test_meaning_trial = {
    type: 'survey-html-form',
    html: current_test_meaning_stimulus,
    autofocus: 'test-resp-box',
    button_label: "Next",
    data: {
      number_training_images: number_training_images,
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level: current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test_meaning"
    },
  }

  cur_block.push(test_meaning_trial);


  return (cur_block)
}

// generate all blocks
function generate_all_blocks(trial_order, training_types,grid_image_names,number_training_images) {

  var all_blocks = [];
  for (var j = 0; j < trial_order.length; j++) {
    trial = trial_order[j];
    cur_block = generate_block(trial, training_types,grid_image_names,number_training_images)
    all_blocks = all_blocks.concat(cur_block)

    if (j < trial_order.length) {
      var instructions_between_trials = {
        type: 'html-button-response',
        stimulus: '<div id="container"><p><b><font size="4.5">Round complete!</font></b></p><p><i><font size="4.5">Click Next to continue.</font></i></p> </div>',
        choices: ["Next"],
      }
      all_blocks.push(instructions_between_trials);
    }
  }

  return (all_blocks)
}

function create_demographics() {
  var demographic_block = [];

  //demographics
  var demo_1 = {
    type: 'survey-text',
    preamble: "Next, we have just a few demographic questions.",
    timeline: [
      { questions: [{ prompt: "Please enter your age (in number of years; e.g., 30).", name: "age", required: true }] },
      { questions: [{ prompt: "What is your gender?", name: "gender", required: true }] },
      { questions: [{ prompt: "What country do you currently live in? (e.g., United States)", name: "country", required: true }] },
      { questions: [{ prompt: "What is your first/primary language(s)?", name: "language", required: true }, { prompt: "Please list any other languages you are fluent in.", name: "other_languages" }] },

    ]
  }
  demographic_block.push(demo_1);

  var demo_2 = {
    type: 'survey-multi-select',
    preamble: "Next, we have just a few demographic questions.",
    questions: [
      {
        prompt: "What is your race or ethnicity? Please check one or more boxes.",
        options: ["White", "Black or African American", "Hispanic or Latino", "American Indian or Alaska Native", "Asian", "Native Hawaiian or Other Pacific Islander", "Not listed", "Prefer not to answer"],
        horizontal: false,
        required: true,
        name: 'race'
      }
    ]
  }
  demographic_block.push(demo_2);

  var demo_3 = {
    type: 'survey-multi-choice',

    questions: [
      {
        prompt: "What is your current level of education?",
        options: ["Some high school", "High school", "Some college/university", "Bachelor's degree", "Master's degree", "Doctoral degree", "Other professional degree", "Not applicable/unknown", "Other", "Prefer not to answer"],
        horizontal: false,
        required: true,
        name: 'education'
      }
    ]
  }
  demographic_block.push(demo_3);

  return (demographic_block)

}

function create_debrief_questions() {

  var debrief_block = [];


  //game questions
  var debrief_questions = {
    type: 'survey-text',
    questions: [
      { prompt: "Did you use a strategy to figure out what each word meant? If yes, please explain.", name: "strategy", rows: 3, columns: 60, required: true },
      { prompt: "After seeing a new word and the first example(s), how did you choose which object to see a word for next?", name: "choice_strategy", rows: 3, columns: 60, required: true },
      { prompt: "Any additional comments?", name: "comments", rows: 3, columns: 60 }
    ],

  }

  debrief_block.push(debrief_questions);

  return (debrief_block)

}

function set_stimuli(stim_type) {
  if (stim_type == "a") {

    // store names of test phase image files
    var grid_image_names = [
      "stims/ani_c3_sup5.jpg",
      "stims/ani_c3_sup6.jpg",
      "stims/ani_c3_bas4.jpg",
      "stims/ani_c3_sub5.jpg",
      "stims/veg_c1_sup5.jpg",
      "stims/veg_c1_sup6.jpg",
      "stims/veg_c1_bas4.jpg",
      "stims/veg_c1_sub5.jpg",
      "stims/spo_c2_sup5.jpg",
      "stims/spo_c2_sup6.jpg",
      "stims/spo_c2_bas4.jpg",
      "stims/spo_c2_sub5.jpg"];

    console.log(grid_image_names)

    // store names of sampling phase image files - reduced sampling image set in v3 is created per block
    var sampling_image_names = [
      "stims/ani_c3_sub4.jpg",
      "stims/ani_c3_sup3.jpg",
      "stims/ani_c3_sup4.jpg",
      "stims/ani_c3_bas3.jpg",
      "stims/veg_c1_sub4.jpg",
      "stims/veg_c1_sup3.jpg",
      "stims/veg_c1_sup4.jpg",
      "stims/veg_c1_bas3.jpg",
      "stims/spo_c2_sub4.jpg",
      "stims/spo_c2_sup3.jpg",
      "stims/spo_c2_sup4.jpg",
      "stims/spo_c2_bas3.jpg"];

    var training_image_names = [
      "stims/ani_c3_sub1.jpg",
      "stims/ani_c3_sub2.jpg",
      "stims/ani_c3_sub3.jpg",
      "stims/ani_c3_bas1.jpg",
      "stims/ani_c3_bas2.jpg",
      "stims/ani_c3_sup1.jpg",
      "stims/ani_c3_sup2.jpg",
      "stims/veg_c1_sub1.jpg",
      "stims/veg_c1_sub2.jpg",
      "stims/veg_c1_sub3.jpg",
      "stims/veg_c1_bas1.jpg",
      "stims/veg_c1_bas2.jpg",
      "stims/veg_c1_sup1.jpg",
      "stims/veg_c1_sup2.jpg",
      "stims/spo_c2_sub1.jpg",
      "stims/spo_c2_sub2.jpg",
      "stims/spo_c2_sub3.jpg",
      "stims/spo_c2_bas1.jpg",
      "stims/spo_c2_bas2.jpg",
      "stims/spo_c2_sup1.jpg",
      "stims/spo_c2_sup2.jpg",];

    var category_kinds_assignment = {
      "c1": "vegetables",
      "c2": "sports",
      "c3": "animals"
    }

    var category_kinds_shortened_assignment = {
      "c1": "veg",
      "c2": "spo",
      "c3": "ani"
    }

  } else if (stim_type == "b") {

    // store names of test phase image files
    var grid_image_names = [
      "stims/sea_c2_sup5.jpg",
      "stims/sea_c2_sup6.jpg",
      "stims/sea_c2_bas4.jpg",
      "stims/sea_c2_sub5.jpg",
      "stims/fru_c1_sup5.jpg",
      "stims/fru_c1_sup6.jpg",
      "stims/fru_c1_bas4.jpg",
      "stims/fru_c1_sub5.jpg",
      "stims/veh_c3_sup5.jpg",
      "stims/veh_c3_sup6.jpg",
      "stims/veh_c3_bas4.jpg",
      "stims/veh_c3_sub5.jpg"];

    console.log(grid_image_names)

    // store names of sampling phase image files - reduced sampling image set in v3 is created per block
    var sampling_image_names = [
      "stims/sea_c2_sub4.jpg",
      "stims/sea_c2_sup3.jpg",
      "stims/sea_c2_sup4.jpg",
      "stims/sea_c2_bas3.jpg",
      "stims/fru_c1_sub4.jpg",
      "stims/fru_c1_sup3.jpg",
      "stims/fru_c1_sup4.jpg",
      "stims/fru_c1_bas3.jpg",
      "stims/veh_c3_sub4.jpg",
      "stims/veh_c3_sup3.jpg",
      "stims/veh_c3_sup4.jpg",
      "stims/veh_c3_bas3.jpg"];

    var training_image_names = [
      "stims/sea_c2_sub1.jpg",
      "stims/sea_c2_sub2.jpg",
      "stims/sea_c2_sub3.jpg",
      "stims/sea_c2_bas1.jpg",
      "stims/sea_c2_bas2.jpg",
      "stims/sea_c2_sup1.jpg",
      "stims/sea_c2_sup2.jpg",
      "stims/fru_c1_sub1.jpg",
      "stims/fru_c1_sub2.jpg",
      "stims/fru_c1_sub3.jpg",
      "stims/fru_c1_bas1.jpg",
      "stims/fru_c1_bas2.jpg",
      "stims/fru_c1_sup1.jpg",
      "stims/fru_c1_sup2.jpg",
      "stims/veh_c3_sub1.jpg",
      "stims/veh_c3_sub2.jpg",
      "stims/veh_c3_sub3.jpg",
      "stims/veh_c3_bas1.jpg",
      "stims/veh_c3_bas2.jpg",
      "stims/veh_c3_sup1.jpg",
      "stims/veh_c3_sup2.jpg",];

    var category_kinds_assignment = {
      "c1": "fruit",
      "c2": "sea",
      "c3": "vehicles"
    }

    var category_kinds_shortened_assignment = {
      "c1": "fru",
      "c2": "sea",
      "c3": "veh"
    }
  }

  stimulus_dict = {
    "grid_image_names": grid_image_names,
    "sampling_image_names": sampling_image_names,
    "training_image_names": training_image_names,
    "category_kinds_assignment": category_kinds_assignment,
    "category_kinds_shortened_assignment": category_kinds_shortened_assignment

  }
  console.log(stimulus_dict)

  return (stimulus_dict)

}

