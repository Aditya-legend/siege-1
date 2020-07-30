

var  world;
var box1;
var backgroundImg,platform;
var rock, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
   


 

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);


    box5 = new Box(810,160,70,70);
  

    rock = new rock(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(rock.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   

    box3.display();
    box4.display();
   

    box5.display();
   

    rock.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        rock.trajectory=[];
       slingshot.attach(rock.body);
    }
}


    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
