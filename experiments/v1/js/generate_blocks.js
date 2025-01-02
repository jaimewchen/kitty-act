//generate instructions
var rocket_animation = '<div id="container">';
rocket_animation += '<div class="overlap-bubble"><figure class="background-animation"><img src="stims/general/earth.png"></figure></div>';
rocket_animation += '<div class="rocket-animation"><figure><img src="stims/general/Rocket.png"></figure></div></div>'

// var introduction_alien_stimulus = '<div id="container">';
// introduction_alien_stimulus += '<div class="d-flex align-items-center"><figure class="floating"><img src="stims/general/'+current_alien+'.png" style="width:300px"></figure></div></div>';

function generate_learning_instructions_pre(current_training_label, current_training_images,number_training_images=3,image_border_color = "black",current_alien) {
  var current_learning_stimulus ='<div id="container" style="margin-top:12px">'
  current_learning_stimulus+= '<div class="d-flex align-items-center" style="margin-bottom:4px"><figure style="height:320px;"><img src="stims/general/'+current_alien+'_head.png" style="width:300px"></figure></div>';
  current_learning_stimulus+= '<div class="row" style="margin-bottom:5px;">';
  if (number_training_images == 1) {
    current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5); width:30%; margin:auto"><img src="'+current_training_images[0]+'" class="fade-in" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px; opacity:0"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
  } else if (number_training_images == 3) {
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[0]+'" class="fade-in" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px; opacity:0"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px; opacity:0"></figure><figcaption style="font-size:24px; color:white; margin-top:15px; opacity:0;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px; opacity:0"></figure><figcaption style="font-size:24px; color:white; margin-top:15px; opacity:0;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
}
  return(current_learning_stimulus)
}

function generate_learning_instructions0(current_training_label, current_training_images,number_training_images=3,image_border_color = "black",current_alien) {
    var current_learning_stimulus ='<div id="container">'
    current_learning_stimulus+= '<div class="d-flex align-items-center"><figure style="height:320px;"><img src="stims/general/'+current_alien+'_head.png" style="width:300px"></figure></div>';
    current_learning_stimulus+= '<div class="row" style="margin-bottom:11px;">';
    if (number_training_images == 1) {
      current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5);width:30%; margin:auto"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption class="fade-in" style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
    } else if (number_training_images == 3) {
    current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption class="fade-in" style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px; opacity:0"></figure><figcaption style="font-size:24px; color:white; margin-top:15px; opacity:0;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px; opacity:0"></figure><figcaption style="font-size:24px; color:white; margin-top:15px; opacity:0;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
  }
    return(current_learning_stimulus)
}

function generate_learning_instructions1(current_training_label, current_training_images,image_border_color = "black",current_alien) {
  var current_learning_stimulus ='<div id="container">'
  current_learning_stimulus+= '<div class="d-flex align-items-center"><figure style="height:320px"><img src="stims/general/'+current_alien+'_head.png" style="width:300px"></figure></div>';
  current_learning_stimulus+= '<div class="row" style="margin-bottom:11px;">';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[1]+'" class="fade-in" style="width:100%; margin-bottom:-7px;"></figure><figcaption class="fade-in" style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px; opacity:0"></figure><figcaption style="font-size:24px; color:white; margin-top:15px; opacity:0;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
  return(current_learning_stimulus)
}

function generate_learning_instructions2(current_training_label, current_training_images,image_border_color = "black",current_alien) {
  var current_learning_stimulus = '<div id="container">'
  current_learning_stimulus+= '<div class="d-flex align-items-center"><figure style="height:320px"><img src="stims/general/'+current_alien+'_head.png" style="width:300px"></figure></div>';
  current_learning_stimulus+= '<div class="row" style="margin-bottom:11px;">';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_learning_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'; background-color:rgba(255,255,255,.5)"><img src="'+current_training_images[2]+'" class="fade-in" style="width:100%; margin-bottom:-7px;"></figure><figcaption class="fade-in" style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
  return(current_learning_stimulus)
}

function generate_sampling_instructions_hidden(current_training_label, current_training_images, shuffled_sampling_images,number_training_images=3,image_border_color = "black",alternate_border_color="black", current_alien) {
  console.log(current_alien);
  var current_sampling_stimulus_hidden ='<div id="container">';
  current_sampling_stimulus_hidden += '<div class="row" style="margin-bottom:50px; width:660px; margin-left:auto; margin-right:auto; margin-bottom:48px">';
  if (number_training_images == 1) {
    current_sampling_stimulus_hidden+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_sampling_stimulus_hidden+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>'; 
    current_sampling_stimulus_hidden+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_sampling_stimulus_hidden+= '</div>'
  } else if (number_training_images == 3) {
  current_sampling_stimulus_hidden += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_sampling_stimulus_hidden += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_sampling_stimulus_hidden += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
  } 
  current_sampling_stimulus_hidden += '<div class="grid-container" style="width:712px; height:182px; margin-top:0px; margin-bottom:2px;">'
  current_sampling_stimulus_hidden += '<div class="column-grid"><figure style="border:3px solid '+alternate_border_color+'; margin-left:5px; margin-right:5px;"><figure style="border:6px solid white; margin:0px;"><img src="'+shuffled_sampling_images[0]+'" style="width:150px; margin-bottom:-7px;"></figure></figure></div>'
  current_sampling_stimulus_hidden += '<div class="column-grid"><figure style="border:3px solid '+alternate_border_color+'; margin-left:5px; margin-right:5px;"><figure style="border:6px solid white; margin:0px;"><img src="'+shuffled_sampling_images[1]+'" style="width:150px; margin-bottom:-7px;"></figure></figure></div>'
  current_sampling_stimulus_hidden += '<div class="column-grid"><figure style="border:3px solid '+alternate_border_color+'; margin-left:5px; margin-right:5px;"><figure style="border:6px solid white; margin:0px;"><img src="'+shuffled_sampling_images[2]+'" style="width:150px; margin-bottom:-7px;"></figure></figure></div>'
  current_sampling_stimulus_hidden += '<div class="column-grid"><figure style="border:3px solid '+alternate_border_color+'; margin-left:5px; margin-right:5px;"><figure style="border:6px solid white; margin:0px;"><img src="'+shuffled_sampling_images[3]+'" style="width:150px; margin-bottom:-7px;"></figure></figure></div></div></div>'
  return(current_sampling_stimulus_hidden)
}

function generate_sampling_instructions(current_training_label, current_training_images,number_training_images=3,image_border_color = "black",current_alien) {

  var current_sampling_stimulus ='<div id="container">';
  current_sampling_stimulus += '<p> </p>';
  current_sampling_stimulus += '<div class="d-flex align-items-center"><figure style="height:150px"><img src="stims/general/'+current_alien+'_head.png" style="width:130px"></figure></div>';
  current_sampling_stimulus += '<div class="row" style="margin-bottom:50px; width:660px; margin-left:auto; margin-right:auto">';
  if (number_training_images == 1) {
    current_sampling_stimulus+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_sampling_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>'; 
    current_sampling_stimulus+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_sampling_stimulus+= '</div>'
  } else if (number_training_images == 3) {
    current_sampling_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_sampling_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_sampling_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
  } 
  return(current_sampling_stimulus)
}

function generate_selection_instructions_big(current_training_label, current_sampling_label,current_training_images,current_sampling_image,number_training_images=3,image_border_color = "black",alternate_border_color="black",current_alien) {
  //var current_selection_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  current_selection_stimulus = '<div id="container">';
  current_selection_stimulus += '<div class="d-flex align-items-center"><figure style="height:140px"><img src="stims/general/'+current_alien+'_head.png" style="width:130px"></figure></div>';
  current_selection_stimulus += '<div class="row" style="width:620px; margin-left:auto; margin-right:auto">';
  if (number_training_images == 1) {
    current_selection_stimulus+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>'; 
    current_selection_stimulus+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_selection_stimulus+= '</div>'
  } else if (number_training_images == 3) {
  current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
  current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
  } 
  current_selection_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><img src="'+current_sampling_image+'" style="width:30%; border: 5px solid '+image_border_color+';"><figcaption style="font-size:24px; color:white; margin-top:10px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>' : '<div class="column"><figure><img src="'+current_sampling_image+'" style="width:30%; border: 5px solid '+alternate_border_color+';"><figcaption style="font-size:24px; color:white; margin-top:10px;"><span style="background-color:white; border: 3px solid '+alternate_border_color+';"><b>-<span style="color:'+alternate_border_color+'">not a '+current_training_label+'</span>-</b></span></figcaption></figure></div></div>' ;
  return(current_selection_stimulus)
}

function generate_selection_instructions(current_training_label, current_sampling_label,current_training_images,current_sampling_image,number_training_images=3,image_border_color = "black",alternate_border_color="black",current_alien) {
  //var current_selection_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  current_selection_stimulus = '<div id="container">';
  current_selection_stimulus += '<div class="d-flex align-items-center"><figure style="height:220px"><img src="stims/general/'+current_alien+'_head.png" style="width:200px"></figure></div>';
  current_selection_stimulus += '<div class="row">';
  if (number_training_images == 1) {
    current_selection_stimulus+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+'"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>'; 
    current_selection_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>' : '<div class="column"><figure><figure style="border: 3px solid '+alternate_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+alternate_border_color+';"><b>-<span style="color:'+alternate_border_color+'">not a '+current_training_label+'</span>-</b></span></figcaption></figure></div>' ;
    current_selection_stimulus+= '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_selection_stimulus+= '</div>'
  } else if (number_training_images == 3) {
    current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_selection_stimulus+= '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_selection_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>' : '<div class="column"><figure><figure style="border: 3px solid '+alternate_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+alternate_border_color+';"><b>-<span style="color:'+alternate_border_color+'">not a '+current_training_label+'</span>-</b></span></figcaption></figure></div></div>' ;
  }
  return(current_selection_stimulus)
}

var rocket_animation_to_earth = '<div id="container">';
rocket_animation_to_earth += '<div class="overlap-bubble"><figure class="background-animation-to-earth"><img src="stims/general/earth.png"></figure></div></div>';

// generate pre-test training and sampling reminder images
function generate_pre_test_instructions(current_training_label, current_sampling_label,current_training_images,current_sampling_image,number_training_images=3,image_border_color = "black",alternate_border_color="black") {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/general/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  if (number_training_images == 1) {
    current_test_stimulus += '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>' : '<div class="column"><figure><figure style="border: 3px solid '+alternate_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+alternate_border_color+';"><b>-<span style="color:'+alternate_border_color+'">not a '+current_training_label+'</span>-</b></span></figcaption></figure></div>' ;
    current_test_stimulus += '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
    
  } else if (number_training_images == 3) {
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>' : '<div class="column"><figure><figure style="border: 3px solid '+alternate_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+alternate_border_color+';"><b>-<span style="color:'+alternate_border_color+'">not a '+current_training_label+'</span>-</b></span></figcaption></figure></div></div>' ;
  
  }
  return(current_test_stimulus)
}

// generate all individual test stimuli
function generate_test_instructions(current_training_label, current_sampling_label,current_training_images,current_sampling_image,number_training_images=3,image_border_color = "black",alternate_border_color="black") {
  //var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  var current_test_stimulus = '<div class="container">';
  current_test_stimulus += '<div class="overlap-bubble"><figure><img src="stims/general/earth.png"></figure></div>';
  current_test_stimulus += '<div class="row" style="width:800px">';
  if (number_training_images == 1) {
    current_test_stimulus += '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>' : '<div class="column"><figure><figure style="border: 3px solid '+alternate_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+alternate_border_color+';"><b>-<span style="color:'+alternate_border_color+'">not a '+current_training_label+'</span>-</b></span></figcaption></figure></div>' ;
    current_test_stimulus += '<div class="column"><figure style="opacity:0"><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div>';
    
  } else if(number_training_images == 3) {
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[0]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[1]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_training_images[2]+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div>';
    current_test_stimulus += (current_sampling_label === current_training_label) ? '<div class="column"><figure><figure style="border: 3px solid '+image_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+image_border_color+';"><b>-<span style="color:'+image_border_color+'">'+current_training_label+'</span>-</b></span></figcaption></figure></div></div></div>' : '<div class="column"><figure><figure style="border: 3px solid '+alternate_border_color+';"><img src="'+current_sampling_image+'" style="width:100%; margin-bottom:-7px;"></figure><figcaption style="font-size:24px; color:white; margin-top:15px;"><span style="background-color:white; border: 3px solid '+alternate_border_color+';"><b>-<span style="color:'+alternate_border_color+'">not a '+current_training_label+'</span>-</b></span></figcaption></figure></div></div>' ;
  }
  return(current_test_stimulus)
}

var post_test_stimulus = '<div id="container">';
post_test_stimulus = '<div class="overlap-bubble"><figure><img src="stims/general/earth.png"></figure></div>';
post_test_stimulus += '<div class="d-flex align-items-center" style="margin-bottom:30px"><figure><img src="stims/general/Rocket.png" style="width:400px"></figure></div></div>';


// generate a block for Kitty-Act
function generate_block(trial, training_types,grid_image_names,number_training_images,first_trial,current_alien) {

  console.log(number_training_images);
  var image_border_color = "black";
  var alternate_border_color = "black";
  var current_alien = current_alien
  console.log(current_alien)

  var cur_block=[];
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
  var current_training_image_path_info = current_trial_info["training_image_path_info"];
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
  current_sampling_images.push('stims/'+current_hypernym_category_kind_shortened+'_'+current_hypernym_category_label+'_'+'sup4.jpg')
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

  var current_learning_stimulus_pre = generate_learning_instructions_pre(current_training_label, current_training_images,number_training_images,image_border_color,current_alien);
  var current_learning_stimulus0 = generate_learning_instructions0(current_training_label, current_training_images,number_training_images,image_border_color,current_alien);
  if (number_training_images==3) {
    var current_learning_stimulus1 = generate_learning_instructions1(current_training_label, current_training_images,image_border_color,current_alien); 
    var current_learning_stimulus2 = generate_learning_instructions2(current_training_label, current_training_images,image_border_color,current_alien); 
  }
  var current_sampling_stimulus_hidden = generate_sampling_instructions_hidden(current_training_label, current_training_images, shuffled_sampling_images,number_training_images,image_border_color,alternate_border_color, current_alien);
	var current_sampling_stimulus = generate_sampling_instructions(current_training_label, current_training_images,number_training_images,image_border_color,current_alien);


  // THREE TRAINING IMAGES
if (first_trial == "first") {
  // display rocket transition animation
    var rocket_animation_transition = {
      type: 'audio-keyboard-response',
      stimulus: 'stims/audio/rocket_sound.wav',
      prompt: rocket_animation, 
      choices: ['NO_KEYS'],
      trial_duration: 2000
    }
    cur_block.push(rocket_animation_transition)

  // display pause before trial
  var alien_pause = {
    type: 'html-button-response',
    stimulus: '<div class="d-flex align-items-center"><figure class="floating"><img src="stims/general/'+current_alien+'.png" style="width:300px"></figure></div>',
    choices: ["CONTINUE"]
  }

  cur_block.push(alien_pause);

} else {

  var rocket_animation_transition = {
    type: 'html-keyboard-response',
    stimulus: rocket_animation, 
    choices: ['NO_KEYS'],
    trial_duration: 2000,
  }

  cur_block.push(rocket_animation_transition)
  

    var alien_sticker_stimulus_still = '<div id="container"><div class="floating"><figure><img src="stims/general/'+current_alien+'_sticker.png" style="width:350px"></figure></div>';

    // display pause before trial
  var alien_pause = {
    type: 'html-button-response',
    stimulus: alien_sticker_stimulus_still,
    choices: ["CONTINUE"]
  }

  cur_block.push(alien_pause);

}


  // display learning trial
  var learning_trial_pre = {
    type: 'html-button-response',
    stimulus: current_learning_stimulus_pre,
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
      trial_kind: "learning_pre",
      current_alien: current_alien
    },
  }

  cur_block.push(learning_trial_pre);

  var learning_trial0 = {
    type: 'audio-button-response-adapted',
    stimulus: 'stims/audio/'+current_training_label+'.m4a',
    // stimulus: function(){
    //   current_learning_stimulus0;
    //   if (current_training_label == 'beppo') {
    //     return 'stims/audio/beppo.m4a'
    //   } else if (current_training_label == 'sibu') {
    //     return 'stims/audio/sibu.m4a'
    //   } else {
    //     return 'stims/audio/kita.m4a'
    //   }
    // },
    prompt: current_learning_stimulus0,
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
      trial_kind: "learning_1",
      current_alien: current_alien
    },
  }

  cur_block.push(learning_trial0);

  if (number_training_images==3) {

  var learning_trial1 = {
    type: 'audio-button-response-adapted',
    stimulus: 'stims/audio/'+current_training_label+'.m4a',
    // stimulus: function(){
    //   if (current_training_label == 'beppo') {
    //     return 'stims/audio/beppo.m4a'
    //   } else if (current_training_label == 'sibu') {
    //     return 'stims/audio/sibu.m4a'
    //   } else {
    //     return 'stims/audio/kita.m4a'
    //   }
    // },
    prompt: current_learning_stimulus1,
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
      trial_kind: "learning_2",
      current_alien: current_alien
    },
  }

  cur_block.push(learning_trial1);

  var learning_trial2 = {
    type: 'audio-button-response-adapted',
    stimulus: 'stims/audio/'+current_training_label+'.m4a',
    // stimulus: function(){
    //   if (current_training_label == 'beppo') {
    //     return 'stims/audio/beppo.m4a'
    //   } else if (current_training_label == 'sibu') {
    //     return 'stims/audio/sibu.m4a'
    //   } else {
    //     return 'stims/audio/kita.m4a'
    //   }
    // },
    prompt: current_learning_stimulus2,
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
      trial_kind: "learning_3",
      current_alien: current_alien
    },
  }

  cur_block.push(learning_trial2);
}

  // display sampling trial
  var sampling_trial_hidden_button = {
    type: 'html-button-response-cols-kittyact',
    stimulus: ' ',
    choices: ["<img src='stims/general/"+current_alien+"_head.png' style='width:130px; margin-top:-1.5px;'>"],
    button_html: '<button class="jspsych-btn" style="height:145px; border:none; background-color: rgba(0,0,0,0)">%choice%</button>',
    prompt: current_sampling_stimulus_hidden,
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
      trial_kind: "sampling_hidden",
      current_alien: current_alien
    }
  }

  cur_block.push(sampling_trial_hidden_button);

  var sampling_trial = {
    type: 'html-button-response-cols',
    stimulus: current_sampling_stimulus,
    choices: current_sample_array,
    button_html: '<button class="jspsych-btn-image-array" style="border:3px solid '+alternate_border_color+'">%choice%</button>',
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
      trial_kind: "sampling",
      current_alien: current_alien
    }
  }

  cur_block.push(sampling_trial);

   //display selection trial

   var selection_trial_big = {
    type: 'html-button-response',
    on_start: function(trial) {
      //  var image_border_color = "black";
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
        last_trial_data.shuffled_sampling_images[last_trial_data.response],
        last_trial_data.number_training_images,
        image_border_color,
        alternate_border_color,
        last_trial_data.current_alien)
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
      trial_kind: "sampling_feedback_big",
      current_alien: current_alien
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
      var image_border_color = "black";
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_selection_instructions(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        last_trial_data.number_training_images,
        image_border_color,
        alternate_border_color,
        last_trial_data.current_alien)
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
      trial_kind: "sampling_feedback",
      current_alien: current_alien
    }
  }

  cur_block.push(selection_trial);

  // display second rocket transition animation

  var rocket_animation_transition_to_earth = {
    type: 'html-keyboard-response',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label;
      console.log(last_trial_data)
    },
    stimulus: rocket_animation_to_earth, 
    choices: ['NO_KEYS'],
    trial_duration: 1000,
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
      trial_kind: "rocket_transition",
      current_alien: current_alien
    }
  }

  cur_block.push(rocket_animation_transition_to_earth)

  var pre_test_trial = {
    type: 'html-button-response',
    on_start: function(trial) {
        last_trial_data = jsPsych.data.get().last(1).values()[0];
        trial.data.sampled_image = last_trial_data.sampled_image;
        trial.data.sampled_label = last_trial_data.sampled_label;
      },
    stimulus: function() {
      var image_border_color = "black";
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_pre_test_instructions(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        last_trial_data.number_training_images,
        image_border_color
        )
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
      trial_kind: "pre_test",
      current_alien: current_alien
    }
  }
   
  cur_block.push(pre_test_trial);

  var test_trial = {
    type: 'html-button-response-catact',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label
    },
    stimulus: function() {
      var image_border_color = "black";
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        last_trial_data.number_training_images,
        image_border_color
        )
    },
    choices: current_grid_array,
    images: shuffled_images,
    response_ends_trial: false,
    margin_horizontal: '2px',
    margin_vertical: '2px',
    button_html: '<button class="jspsych-btn-image-array">%choice%</button>',
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
      trial_kind: "test",
      current_alien: current_alien
    }
  }

  cur_block.push(test_trial);

  var check_label_trial = {
    type: 'html-button-response',
    on_start: function(trial) {
        last_trial_data = jsPsych.data.get().last(1).values()[0];
        trial.data.sampled_image = last_trial_data.sampled_image;
        trial.data.sampled_label = last_trial_data.sampled_label;
      },
    stimulus: function() {
      var image_border_color = "black";
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_pre_test_instructions(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image,
        last_trial_data.number_training_images,
        image_border_color
        )
    },
    choices: ["CHECK LABEL"],
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
      trial_kind: "post_test_label_check",
      current_alien: current_alien
    }
  }
   
  cur_block.push(check_label_trial);

  

  var post_test = {
    type: 'html-button-response',
    stimulus: post_test_stimulus,
    choices: ["CONTINUE"]
  }

  cur_block.push(post_test);

  
  return(cur_block)
  
}

// generate all blocks
function generate_all_blocks(trial_order, training_types,grid_image_names,number_training_images,current_alien) {

  console.log(number_training_images);

  var all_blocks=[];
  for (var j = 0; j < trial_order.length; j++) {
    trial=trial_order[j];
    if (j ==0) {
      var first_trial = "first"
    } else {
      var first_trial = "not first"
    }
    cur_block=generate_block(trial, training_types,grid_image_names,number_training_images,first_trial,current_alien)
    all_blocks=all_blocks.concat(cur_block)
  }

  return(all_blocks)
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

        return(stimulus_dict)

}