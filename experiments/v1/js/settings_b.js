// SETTINGS & DEFAULT PARAMETERS

// create default image size
var grid_image_width = 135;
var grid_image_height = 135;

var image_path="stims_b/"

// store names of test phase image files
var grid_image_names = [
"stims_b/sea_c2_sup3.jpg",
"stims_b/sea_c2_sup4.jpg",
"stims_b/sea_c2_bas3.jpg",
"stims_b/sea_c2_sub4.jpg",
"stims_b/fru_c1_sup3.jpg",
"stims_b/fru_c1_sup4.jpg",
"stims_b/fru_c1_bas3.jpg",
"stims_b/fru_c1_sub4.jpg",
"stims_b/veh_c3_sup4.jpg",
"stims_b/veh_c3_sup1.jpg",
"stims_b/veh_c3_bas3.jpg",
"stims_b/veh_c3_sub4.jpg"];

console.log(grid_image_names)

// store names of sampling phase image files - reduced sampling image set in v3 is created per block
var sampling_image_names = [
"stims_b/sea_c2_sub4.jpg",
"stims_b/sea_c2_sup3.jpg",
"stims_b/sea_c2_bas3.jpg",
"stims_b/fru_c1_sub4.jpg",
"stims_b/fru_c1_sup3.jpg",
"stims_b/fru_c1_bas3.jpg",
"stims_b/veh_c3_sub4.jpg",
"stims_b/veh_c3_sup3.jpg",
"stims_b/veh_c3_bas3.jpg"];

var training_image_names = [
"stims_b/sea_c2_sub1.jpg",
"stims_b/sea_c2_sub2.jpg",
"stims_b/sea_c2_sub3.jpg",
"stims_b/sea_c2_bas1.jpg",
"stims_b/sea_c2_bas2.jpg",
"stims_b/sea_c2_sup1.jpg",
"stims_b/sea_c2_sup2.jpg",
"stims_b/fru_c1_sub1.jpg",
"stims_b/fru_c1_sub2.jpg",
"stims_b/fru_c1_sub3.jpg",
"stims_b/fru_c1_bas1.jpg",
"stims_b/fru_c1_bas2.jpg",
"stims_b/fru_c1_sup1.jpg",
"stims_b/fru_c1_sup2.jpg",
"stims_b/veh_c3_sub1.jpg",
"stims_b/veh_c3_sub2.jpg",
"stims_b/veh_c3_sub3.jpg",
"stims_b/veh_c3_bas1.jpg",
"stims_b/veh_c3_bas2.jpg",
"stims_b/veh_c3_sup1.jpg",
"stims_b/veh_c3_sup2.jpg",];

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