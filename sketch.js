const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour = 0;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time  : "+ hour%12 + "4 PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
console.log(response);

var responseJson = await response.json();
console.log(responseJson);

var dateTime = responseJson.currentDateTime;
console.log(dateTime);

hour = dateTime.slice(11,13);
console.log(hour);
if (hour>=06 && hour<=19){
 bg = "sunrise.png"   
} else {
bg = "sunset.png";
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);
}