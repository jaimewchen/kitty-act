// generate trials
		
function get_training_types(
	category_kinds, 
	category_codes,
	category_kinds_assignment,
	category_kinds_shortened_assignment,
	training_labels,
	alternate_training_labels,
	correct_category_labels) {

	//shuffle elements
	var training_labels_shuffled = jsPsych.randomization.shuffle(training_labels);
	var alternate_training_labels_shuffled = jsPsych.randomization.shuffle(alternate_training_labels);

	//get possible hyperhym assignment
	//var hypernym_dict_keys_in_order = ["animals", "vegetables","vehicles"] - just to show the order of the keys in the dictionary
	//var possible_category_permutations = [["vegetables","vehicles","animals"],["vehicles","animals","vegetables"]]
	var possible_category_code_permutations=[["c2","c3","c1"],["c3","c1","c2"]]
	//var hypernym_assignment =  jsPsych.randomization.sampleWithoutReplacement(possible_category_permutations,1)[0]
	var hypernym_assignment =  jsPsych.randomization.sampleWithoutReplacement(possible_category_code_permutations,1)[0]
	console.log(hypernym_assignment);
	// var hypernym_dict = {
	// 	"animals": hypernym_assignment[0],
	// 	"vegetables": hypernym_assignment[1],
	// 	"vehicles": hypernym_assignment[2],
	// }
	var hypernym_dict = {
		"c1": hypernym_assignment[0],
		"c2": hypernym_assignment[1],
		"c3": hypernym_assignment[2],
	}
	console.log(hypernym_dict)

	var training_types = {
		narrow: {
			category_kind: category_kinds["narrow"],
			category_kind_shortened: category_kinds_shortened_assignment[category_codes["narrow"]],
			category_label: category_codes["narrow"],
			category_training_level: "narrow",
			category_label_level: correct_category_labels["narrow"],
			training_label: training_labels_shuffled[0],
			alternate_training_label: alternate_training_labels_shuffled[0],
			training_image_path_info: ["sub1.jpg","sub2.jpg","sub3.jpg"],
			hypernym_kind: category_kinds_assignment[hypernym_dict[category_codes["narrow"]]],
			hypernym_kind_shortened: category_kinds_shortened_assignment[hypernym_dict[category_codes["narrow"]]],
			hypernym_code: hypernym_dict[category_codes["narrow"]],
		},
		intermediate: {
			category_kind: category_kinds["intermediate"],
			category_kind_shortened: category_kinds_shortened_assignment[category_codes["intermediate"]],
			category_label: category_codes["intermediate"],
			category_training_level: "intermediate",
			category_label_level: correct_category_labels["intermediate"],
			training_label: training_labels_shuffled[1],
			alternate_training_label: alternate_training_labels_shuffled[1],
			training_image_path_info: ["sub1.jpg","bas1.jpg","bas2.jpg"],
			hypernym_kind: category_kinds_assignment[hypernym_dict[category_codes["intermediate"]]],
			hypernym_kind_shortened: category_kinds_shortened_assignment[hypernym_dict[category_codes["intermediate"]]],
			hypernym_code: hypernym_dict[category_codes["intermediate"]],
		},
		broad: {
			category_kind: category_kinds["broad"],
			category_kind_shortened: category_kinds_shortened_assignment[category_codes["broad"]],
			category_label: category_codes["broad"],
			category_training_level: "broad",
			category_label_level: correct_category_labels["broad"],
			training_label: training_labels_shuffled[2],
			alternate_training_label: alternate_training_labels_shuffled[2],
			training_image_path_info: ["sub1.jpg","sup2.jpg","sup5.jpg"],
			hypernym_kind: category_kinds_assignment[hypernym_dict[category_codes["broad"]]],
			hypernym_kind_shortened: category_kinds_shortened_assignment[hypernym_dict[category_codes["broad"]]],
			hypernym_code: hypernym_dict[category_codes["broad"]],
		}
	};

	return(training_types)
}

function get_trial_order(category_levels) {
	var trial_order = jsPsych.randomization.shuffle(category_levels);
	return(trial_order)
}

// function create_category_kinds(category_kinds,narrow_category_kind,intermediate_category_kind,broad_category_kind) {

// 	var category_kinds_shuffled = jsPsych.randomization.shuffle(category_kinds);

//   var category_kinds_narrow = decode_category_kinds(narrow_category_kind,category_kinds_shuffled,0)
//   var category_kinds_intermediate = decode_category_kinds(intermediate_category_kind,category_kinds_shuffled,1)
//   var category_kinds_broad = decode_category_kinds(broad_category_kind,category_kinds_shuffled,2)

//   var category_kind_assigned_dict = {
//     narrow: category_kinds_narrow,
//     intermediate: category_kinds_intermediate,
//     broad: category_kinds_broad
//   }

//   return(category_kind_assigned_dict)
// }

function create_category_codes(category_codes,narrow_category_code,intermediate_category_code,broad_category_code) {

	var category_codes_shuffled = jsPsych.randomization.shuffle(category_codes);

  var category_codes_narrow = decode_category_codes(narrow_category_code,category_codes_shuffled,0)
  var category_codes_intermediate = decode_category_codes(intermediate_category_code,category_codes_shuffled,1)
  var category_codes_broad = decode_category_codes(broad_category_code,category_codes_shuffled,2)

  var category_codes_assigned_dict = {
    narrow: category_codes_narrow,
    intermediate: category_codes_intermediate,
    broad: category_codes_broad
  }

  return(category_codes_assigned_dict)
}

function create_category_kinds(category_codes_dict) {

	var category_kind_assigned_dict = {
    narrow: category_kinds_assignment[category_codes_dict["narrow"]],
    intermediate: category_kinds_assignment[category_codes_dict["intermediate"]],
    broad: category_kinds_assignment[category_codes_dict["broad"]]
  }

  return(category_kind_assigned_dict)
}

function create_correct_category_labels(narrow_category_level,intermediate_category_level,broad_category_level) {
	var narrow_category_labels = ["narrow","intermediate","broad"];
	var intermediate_category_labels = ["intermediate","broad","hypernym"];
	var broad_category_labels = ["broad","hypernym","hypernym"];

  var narrow_correct_category_label_level = decode_category_level(narrow_category_level,narrow_category_labels);
  var intermediate_correct_category_label_level = decode_category_level(intermediate_category_level,intermediate_category_labels);
  var broad_correct_category_label_level = decode_category_level(broad_category_level,broad_category_labels);

  var correct_category_labels = {
    narrow: narrow_correct_category_label_level,
    intermediate: intermediate_correct_category_label_level,
    broad: broad_correct_category_label_level
  }

  return (correct_category_labels)
}



function decode_category_kinds(category_kind_short,shuffled_category_kinds,array_index) {
  if (category_kind_short == "ani") {
    var current_category_kind = "animals";
  } else if (category_kind_short == "veh") {
    var current_category_kind = "vehicles";
  } else if (category_kind_short == "veg") {
    var current_category_kind = "vegetables";
  } else {
    var current_category_kind = shuffled_category_kinds[array_index]
  }

  return(current_category_kind)
}

function decode_category_codes(category_code_short,shuffled_category_codes,array_index) {
  if (category_code_short == "c1") {
    var current_category_code = "c1";
  } else if (category_code_short == "c2") {
    var current_category_code = "c2";
  } else if (category_code_short == "c3") {
    var current_category_code = "c3";
  } else {
    var current_category_code = shuffled_category_codes[array_index]
  }

  return(current_category_code)
}

function decode_category_level(category_level_short,category_level_labels) {
  if (category_level_short == "n") {
    var current_category_level = "narrow"
  } else if (category_level_short == "i") {
    var current_category_level = "intermediate"
  } else if (category_level_short == "b") {
    var current_category_level = "broad"
  } else if (category_level_short == "h") {
    var current_category_level = "hypernym"
  } else {
    var current_category_level = jsPsych.randomization.sampleWithoutReplacement(category_level_labels,1)[0];
  }

  return(current_category_level)
}

