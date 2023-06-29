//generate instructions
var rocket_animation = '<div id="container">';
rocket_animation += '<div class="overlap-bubble"><figure class="background-animation"><img src="stims/earth.png"></figure></div>';
rocket_animation += '<div class="rocket-animation"><figure><img src="stims/Rocket.png"></figure></div></div>'

var introduction_alien_stimulus = '<div id="container">';
introduction_alien_stimulus += '<div class="d-flex align-items-center"><figure class="floating"><img src="stims/alien.png" style="width:300px"></figure></div></div>';

function generate_learning_instructions0(current_training_label, current_training_images) {
    var current_learning_stimulus ='<div id="container">'
    current_learning_stimulus+='<div class="d-flex align-items-center"><figure style="height:320px;"><img src="stims/alien_head.png" style="width:300px"></figure></div>';
    current_learning_stimulus+='<div class="row" style="margin-bottom:50px">';
    current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px; opacity:0"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5); opacity:0"><b>'+current_training_label+'</b></figcaption></figure></div>';
    current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[1]+'" class="fade-in" style="width:100%; margin-bottom:-8px;"></figure><figcaption class="fade-in" style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
    current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px; opacity:0"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5); opacity:0"><b>'+current_training_label+'</b></figcaption></figure></div></div>';
    return(current_learning_stimulus)
}

function generate_learning_instructions1(current_training_label, current_training_images) {
  var current_learning_stimulus ='<div id="container">'
  current_learning_stimulus+='<div class="d-flex align-items-center"><figure style="height:320px"><img src="stims/alien_head.png" style="width:300px"></figure></div>';
  current_learning_stimulus+='<div class="row" style="margin-bottom:50px">';
  current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[0]+'" class="fade-in" style="width:100%; margin-bottom:-8px;"></figure><figcaption class="fade-in" style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px; opacity:0"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5); opacity:0"><b>'+current_training_label+'</b></figcaption></figure></div></div>';
  return(current_learning_stimulus)
}

function generate_learning_instructions2(current_training_label, current_training_images) {
  var current_learning_stimulus ='<div id="container">'
  current_learning_stimulus+='<div class="d-flex align-items-center"><figure style="height:320px"><img src="stims/alien_head.png" style="width:300px"></figure></div>';
  current_learning_stimulus+='<div class="row" style="margin-bottom:50px">';
  current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_learning_stimulus+='<div class="column"><figure><figure style="border: 3px solid #ff7575; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[2]+'" class="fade-in" style="width:100%; margin-bottom:-8px;"></figure><figcaption class="fade-in" style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div></div>';
  return(current_learning_stimulus)
}

function generate_sampling_instructions(current_training_label, current_training_images) {

  var current_sampling_stimulus ='<div id="container">';
  current_sampling_stimulus +='<div class="d-flex align-items-center"><figure style="height:150px"><img src="stims/alien_head.png" style="width:130px"></figure></div>';
  current_sampling_stimulus +='<div class="row" style="margin-bottom:50px; width:660px; margin-left:auto; margin-right:auto">';
  current_sampling_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_sampling_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_sampling_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div></div>';
  return(current_sampling_stimulus)
}

function generate_selection_instructions_big(current_training_label, current_sampling_label,current_training_images,current_sampling_image) {
  //var current_selection_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  current_selection_stimulus ='<div id="container">';
  current_selection_stimulus +='<div class="d-flex align-items-center"><figure style="height:140px"><img src="stims/alien_head.png" style="width:130px"></figure></div>';
  current_selection_stimulus += '<div class="row" style="width:620px; margin-left:auto; margin-right:auto">';
  current_selection_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_selection_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_selection_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div></div>';
  current_selection_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><img src="'+current_sampling_image+'" style="width:30%; border: 5px solid #ff7575; padding: 6px"><figcaption style="font-size:24px; color:#ff7575;"><span style="background-color:#131124;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column"></div>' : '<div class="column"><figure><img src="'+current_sampling_image+'" style="width:30%; border: 5px solid #ffa500; padding: 6px"><figcaption style="font-size:24px;color:#ffa500; background-color:#131124"><b>NOT a '+current_training_label+'</b></figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column"></div>';
  return(current_selection_stimulus)
}

function generate_selection_instructions(current_training_label, current_sampling_label,current_training_images,current_sampling_image) {
  //var current_selection_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  current_selection_stimulus ='<div id="container">';
  current_selection_stimulus +='<div class="d-flex align-items-center"><figure style="height:220px"><img src="stims/alien_head.png" style="width:200px"></figure></div>';
  current_selection_stimulus += '<div class="row">';
  current_selection_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_selection_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_selection_stimulus +='<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:rgba(19,17,36,0.5)"><b>'+current_training_label+'</b></figcaption></figure></div>';
  current_selection_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#ff7575; background-color:#131124"><b>'+current_training_label+'</b></figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500; background-color:#131124"><b>NOT a '+current_training_label+'</b></figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column"></div>';
  return(current_selection_stimulus)
}

var rocket_animation_to_earth = '<div id="container">';
rocket_animation_to_earth += '<div class="overlap-bubble"><figure class="background-animation-to-earth"><img src="stims/earth.png"></figure></div>';
rocket_animation_to_earth += '<div class="rocket-animation"><figure><img src="stims/Rocket.png"></figure></div></div>'

// generate all individual test stimuli

function generate_test_instructions0(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[0]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions1(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[1]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions2(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[2]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions3(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[3]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions4(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[4]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions5(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[5]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions6(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[6]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions7(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[7]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions8(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[8]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}

function generate_test_instructions9(current_training_label, current_sampling_label,current_training_images,current_sampling_image,shuffled_images) {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div>';
  current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid #ff7575;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px; color:#d62d2d;"><span style="background-color:#cde6d5;"><b>'+current_training_label+'</b></span></figcaption></figure></div class="column"></div>' : '<div class="column"><figure><figure style="border: 3px solid #ffa500;"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-8px;"></figure><figcaption style="font-size:24px;color:#ffa500;"><span style="background-color:#cde6d5;"><b>NOT a '+current_training_label+'</b></span></figcaption></figure></div class="column"></div>';
  current_test_stimulus += '<div class="d-flex align-items-center"><figure><img src="'+shuffled_images[9]+'" style="width:400px; border: 7px solid #74a2ff"></figure></div>'
  return(current_test_stimulus)
}


var post_test_stimulus = '<div id="container">';
post_test_stimulus = '<div class="overlap-bubble"><figure><img src="stims/earth.png"></figure></div>';
post_test_stimulus += '<div class="d-flex align-items-center" style="margin-bottom:30px"><figure><img src="stims/Rocket.png" style="width:400px"></figure></div></div>';


// generate a block for CatAct
function generate_block(trial, training_types) {

  var cur_block=[];
	current_trial_info = training_types[trial];
  console.log(current_trial_info);

  //current trial info
  var current_training_label = current_trial_info["training_label"];
  var current_alternate_training_label = current_trial_info["alternate_training_label"];
  var current_category_kind = current_trial_info["category_kind"];
  var current_category_training_level = current_trial_info["category_training_level"];
  var current_category_label_level = current_trial_info["category_label_level"];
  var current_training_image_path_info = current_trial_info["training_image_path_info"]
  //select hypernym category (if needed)
  var current_hypernym_category_kind = current_trial_info["hypernym_kind"];

  if (current_category_kind=="vegetables") {
    var current_category_label = "c1";
    var current_category_kind_shortened = "veg";
  } else if (current_category_kind=="vehicles") {
    var current_category_label = "c2";
    var current_category_kind_shortened = "veh";
  } else {
    var current_category_label = "c3";
    var current_category_kind_shortened = "ani";
  }

  if (current_hypernym_category_kind=="vegetables") {
    var current_hypernym_category_label = "c1";
    var current_hypernym_category_kind_shortened = "veg";
  } else if (current_hypernym_category_kind=="vehicles") {
    var current_hypernym_category_label = "c2";
    var current_hypernym_category_kind_shortened = "veh";
  } else {
    var current_hypernym_category_label = "c3";
    var current_hypernym_category_kind_shortened = "ani";
  }

  console.log(current_training_label);
  console.log(current_alternate_training_label);
  console.log(current_category_kind);
  console.log(current_category_label_level);
  console.log(current_category_label);
  console.log(current_hypernym_category_kind);

  // PREPPTING THE SELECTION ARRAYS
		  
	//shuffle the grid images
  var shuffled_images = jsPsych.randomization.repeat(grid_image_names, 1);
	//put images together into an array
	var current_grid_array=[]
  for (var i = 0; i < shuffled_images.length; i++) {
    current_grid_array.push('<img src="'+shuffled_images[i]+'" width='+grid_image_width+' height='+grid_image_height+'>')
  }
  
  //create sampling array
  var within_cat_sampling_names = ["sub4.jpg","sup3.jpg","bas3.jpg"];
  var current_sampling_images = [];
  for (var i = 0; i < within_cat_sampling_names.length; i++) {
    current_sampling_images.push('stims/'+current_category_kind_shortened+'_'+current_category_label+'_'+within_cat_sampling_names[i])
  };
  //add fourth hypernym image
  current_sampling_images.push('stims/'+current_hypernym_category_kind_shortened+'_'+current_hypernym_category_label+'_'+'sup3.jpg')
  console.log(current_sampling_images);

  // shuffle sampling array
  var shuffled_sampling_images = jsPsych.randomization.repeat(current_sampling_images, 1);
	// put sampling images together into an array
	var current_sample_array=[];
  for (var i = 0; i < shuffled_sampling_images.length; i++) {
    current_sample_array.push('<img src="'+shuffled_sampling_images[i]+'" width="150px" height="150px">')
  };

  //create training images
  var current_training_images = [];
  for (var i = 0; i < current_training_image_path_info.length; i++) {
    current_training_images.push('stims/'+current_category_kind_shortened+'_'+current_category_label+'_'+current_training_image_path_info[i])
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

  var current_learning_stimulus0 = generate_learning_instructions0(current_training_label, current_training_images)
  var current_learning_stimulus1 = generate_learning_instructions1(current_training_label, current_training_images); 
  var current_learning_stimulus2 = generate_learning_instructions2(current_training_label, current_training_images); 
	var current_sampling_stimulus = generate_sampling_instructions(current_training_label, current_training_images);

  // display rocket transition animation
  var rocket_animation_transition = {
    type: 'html-keyboard-response',
    stimulus: rocket_animation,
    choices: ['NO_KEYS'],
    trial_duration: 2000
  }

  cur_block.push(rocket_animation_transition)

  // display pause before trial
  var alien_pause = {
    type: 'html-button-response',
    stimulus: introduction_alien_stimulus,
    choices: ["CONTINUE"]
  }

  cur_block.push(alien_pause);

  // display learning trial
  var learning_trial0 = {
    type: 'html-button-response',
    stimulus: current_learning_stimulus0 ,
    choices: ["CONTINUE"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "learning"
    },
  }

  cur_block.push(learning_trial0);

  var learning_trial1 = {
    type: 'html-button-response',
    stimulus: current_learning_stimulus1 ,
    choices: ["CONTINUE"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "learning"
    },
  }

  cur_block.push(learning_trial1);

  var learning_trial2 = {
    type: 'html-button-response',
    stimulus: current_learning_stimulus2 ,
    choices: ["CONTINUE"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "learning"
    },
  }

  cur_block.push(learning_trial2);

  // display sampling trial
  var sampling_trial = {
    type: 'html-button-response-cols',
    stimulus: current_sampling_stimulus,
    choices: current_sample_array,
    button_html: '<button class="jspsych-btn-image-array" style="border:3px solid #ffa500">%choice%</button>',
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "sampling"
    }
  }

  cur_block.push(sampling_trial);

   //display selection trial

   var selection_trial_big = {
    type: 'html-button-response',
    on_start: function(trial) {
        last_trial_data = jsPsych.data.get().last(1).values()[0];
        trial.data.sampled_image = last_trial_data.shuffled_sampling_images[last_trial_data.response];
        trial.data.sampled_label = last_trial_data.sampling_image_words[last_trial_data.response];
      },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_selection_instructions_big(
        last_trial_data.current_training_label, 
        last_trial_data.sampling_image_words[last_trial_data.response],
        last_trial_data.current_training_images,
        last_trial_data.shuffled_sampling_images[last_trial_data.response])
    },
    choices: ["CONTINUE"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "sampling_feedback"
    }
  }

  cur_block.push(selection_trial_big);

   var selection_trial = {
    type: 'html-button-response',
    on_start: function(trial) {
        last_trial_data = jsPsych.data.get().last(1).values()[0];
        trial.data.sampled_image = last_trial_data.sampled_image;
        trial.data.sampled_label = last_trial_data.sampled_label;

      },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_selection_instructions(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image)
    },
    choices: ["CONTINUE"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "sampling_feedback"
    }
  }

  cur_block.push(selection_trial);

  // display second rocket transition animation

  var rocket_animation_transition_to_earth = {
    type: 'html-keyboard-response',
    stimulus: rocket_animation_to_earth,
    choices: ['NO_KEYS'],
    trial_duration: 2000
  }

  cur_block.push(rocket_animation_transition_to_earth)

  // display test trial 0

  var test_trial0 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(2).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(2).values()[0];
      return generate_test_instructions0(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial0);

  var test_trial1 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions1(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial1);

  var test_trial2 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions2(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial2);

  var test_trial3 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions3(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial3);

  var test_trial4 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions4(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial4);

  var test_trial5 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions5(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial5);

  var test_trial6 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions6(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial6);

  var test_trial7 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions7(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial7);

  var test_trial8 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions8(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial8);

  var test_trial9 = {
    type: 'html-button-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions9(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        shuffled_images
        )
    },
    choices: ["YES", "NO"],
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      current_category_label_level: current_category_label_level,
      current_category_kind: current_category_kind,
      current_category_training_level,
      current_alternate_training_label: current_alternate_training_label,
      current_hypernym_category_kind: current_hypernym_category_kind,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial9);

  var post_test = {
    type: 'html-button-response',
    stimulus: post_test_stimulus,
    choices: ["CONTINUE"]
  }

  cur_block.push(post_test);

  // var current_test_meaning_stimulus = '<div id="container"><p> What do you think that <b>' + current_training_label + '</b> means?</p><p><textarea name="word_meaning" type="text" id="test-resp-box" size="20" rows="2" cols="40" required></textarea></p>';
  // current_test_meaning_stimulus+='<p><i>Click Next to continue.</font></i><style="text-align:center;" /p></div>';  
    

  // var test_meaning_trial = {
    // type: 'survey-html-form',
    // html: current_test_meaning_stimulus,
    // autofocus: 'test-resp-box',
    // button_label: "Next",
    // data: {
      // current_training_images: current_training_images,
      // current_training_label: current_training_label,
      // shuffled_sampling_images: shuffled_sampling_images,
      // sampling_image_words: sampling_image_words,
      // shuffled_test_images: shuffled_images,
      // current_category_label_level: current_category_label_level,
      // current_category_kind: current_category_kind,
      // current_category_training_level,
      // current_alternate_training_label: current_alternate_training_label,
      // current_hypernym_category_kind: current_hypernym_category_kind,
      //trial_type: "test_meaning"
    // },
  // }

  // cur_block.push(test_meaning_trial);

  
  return(cur_block)
 } 

// generate all blocks
function generate_all_blocks(trial_order, training_types) {

  var all_blocks=[];
  for (var j = 0; j < trial_order.length; j++) {
    trial=trial_order[j];
    cur_block=generate_block(trial, training_types)
    all_blocks=all_blocks.concat(cur_block)

    // if (j < trial_order.length - 1) {
      // var instructions_between_trials = {
        // type: 'html-button-response',
        // stimulus: '<div id="container"><p><b><font size="4.5">Great job!</font></b></p><p><i><font size="4.5">Click Next to learn another word.</font></i></p> </div>',
        // choices: ["Next"],
      // }
      // all_blocks.push(instructions_between_trials);
    // }
  }

  return(all_blocks)
}

function create_demographics() {
    var demographic_block=[];

//demographics
var demo_1 = {
    type: 'survey-text',
    preamble: "Next, we have just a few demographic questions.",
    timeline: [
    {questions: [{prompt: "Please enter your age (in number of years; e.g., 30).",name: "age", required: true}]},
    {questions: [{prompt: "What is your gender?",name: "gender", required: true}]},
    {questions: [{prompt: "What country do you currently live in? (e.g., United States)", name: "country", required: true}]},
    {questions: [{prompt: "What is your first/ primary language(s)?", name: "language", required: true},{prompt: "Please list any other languages you are fluent in.", name: "other_languages"}]},

    ]
  }
  demographic_block.push(demo_1);

  var demo_2 = {
  type: 'survey-multi-select',
  preamble: "Next, we have just a few demographic questions.",
  questions: [
    {
      prompt: "What is your race or ethnicity? Please check one or more boxes.", 
      options: ["White","Black or African American", "Hispanic or Latino", "American Indian or Alaska Native", "Asian", "Native Hawaiian or Other Pacific Islander","Not listed","Prefer not to answer"], 
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
      options: ["Some high school", "High school", "Some college/ university", "Bachelor's degree", "Master's degree","Doctoral degree","Other professional degree","Not applicable/ unknown","Other","Prefer not to answer"], 
      horizontal: false,
      required: true,
      name: 'education'
    }
    ]
    } 
  demographic_block.push(demo_3);

  return(demographic_block)

}

function create_debrief_questions() {

  var debrief_block = [];


//game questions
var debrief_questions = {
    type: 'survey-text',
    questions: [
    {prompt: "Did you use a strategy to figure out what each word meant? If yes, please explain",name: "strategy", rows: 3,columns: 60, required: true},
    {prompt: "After seeing a new word and the first three examples, how did you choose which (fourth) object to see a word for next?",name: "choice_strategy", rows: 3,columns: 60, required: true},
    {prompt: "Any additional comments?", name: "comments", rows: 3,columns: 60}
    ],

  }

  debrief_block.push(debrief_questions);

  return(debrief_block)

}

