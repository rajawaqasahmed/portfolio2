var canvas = document.getElementById("canvas");
var dateContext = canvas.getContext("2d");
dateContext.font = "30px Robotics";
dateContext.strokeStyle = "#52ce90";
dateContext.fillText("Today's Date: ",30,30);
dateContext.strokeText(Date(),30,70);




// part 2 animation
var canvas2 = document.getElementById("canvas2");
var animateText = canvas2.getContext("2d");
var dateText = Date();


var textPath = 0;
function drawText(textPath){
    animateText.beginPath();
    animateText.strokeText(dateText,textPath,50);
    animateText.closePath();
} 


var updateText = setInterval(function(){
    animateText.clearRect(0,0,600,100);
    drawText(textPath%500);
    textPath+=5; 
},100);



