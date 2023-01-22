var random_number1 = Math.floor(Math.random()*6)+1;
var random_number2 = Math.floor(Math.random()*6)+1;

var IMG_DIR_PATH = "images/";
var random_dice_img_name1 = "dice"+random_number1+".png";
var random_dice_img_name2 = "dice"+random_number2+".png";

var arr_img_obj = document.querySelectorAll("img");
arr_img_obj[0].setAttribute("src", IMG_DIR_PATH+random_dice_img_name1);
arr_img_obj[1].setAttribute("src", IMG_DIR_PATH+random_dice_img_name2);

if(random_number1 > random_number2){
    document.querySelector("h1").innerHTML = "🚩Player1 Win!";
}
else if(random_number1 < random_number2){
    document.querySelector("h1").innerHTML = "Player2 Win!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}