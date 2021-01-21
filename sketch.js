const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var slingshot;
var stand1,polygon;
var bg = "TOWERDAYBG.jpg";
var bgImg;

function preload() {

    polygon_Img = loadImage("polygon.png");
   getBackgroundImg();
}

function setup() {

    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground();

    stand1 = new Stand(550,350,200,20);
    stand2 = new Stand(1050,170,200,20);

    // STAND 1
    //level1
    b1 = new Block(475,320,30,40);
    b2 = new Block(510,320,30,40);
    b3 = new Block(545,320,30,40);
    b4 = new Block(580,320,30,40);
    b5 = new Block(615,320,30,40);

    //level2
    b6 = new Block(490,275,30,40);
    b7 = new Block(525,275,30,40);
    b8 = new Block(560,275,30,40);
    b9 = new Block(595,275,30,40);

    // level3
    b10 = new Block(505,230,30,40);
    b11 = new Block(540,230,30,40);
    b12 = new Block(575,230,30,40);

    // STAND2
    //level1
    b13 = new Block(975,140,30,40);
    b14 = new Block(1010,140,30,40);
    b15 = new Block(1045,140,30,40);
    b16 = new Block(1080,140,30,40);
    b17 = new Block(1115,140,30,40);

    //level2
    b18 = new Block(990,100,30,40);
    b19 = new Block(1025,100,30,40);
    b20 = new Block(1060,100,30,40);
    b21 = new Block(1095,100,30,40);

    //level3
    b22 = new Block(1010,56,30,40);
    b23 = new Block(1045,56,30,40);
    b24 = new Block(1080,56,30,40);

    polygon = Bodies.circle(50,200,20,{frictionAir : 0.01});
    World.add(world,this.polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:170});
    
}

function draw() {

    if (bgImg) 
        background(bgImg);
    

    Engine.update(engine);

    stroke("white");
    fill("white");
    strokeWeight(2);
    textSize(35);
    textFont("broadway");
    text("DRAG THE STONE TO DESTROY THE BLOCKS . . . . ",10,50);
    textSize(25);
    textFont("arial_rounded_mt");
    text("PRESS SPACE TO GET ANOTHER CHANCE . . .",10,100);
    ground.display();
    stand1.display();
    stand2.display();
    fill("orange");
    stroke("skyblue");
    strokeWeight(3);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("purple");
    stroke("lightpink")
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    fill("lightgreen");
    stroke("darkgreen");
    b10.display();
    b11.display();
    b12.display();
    fill("magenta");
    stroke("red")
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    fill("darkblue");
    stroke("orange");
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    fill("yellow");
    stroke("darkblue");
    b22.display();
    b23.display();
    b24.display();

    imageMode (CENTER);
    image(polygon_Img,polygon.position.x,polygon.position.y,50,50);
    
    slingshot.display();
    
    
   
    
}

function mouseDragged() {

    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}

async function getBackgroundImg() {
 
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();

    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);

    if (hour > 06 && hour < 18) {
        bg = "TOWERDAYBG.jpg"
    } else {
        bg = "TOWERNIGHTBG.jpg"
    }
    bgImg = loadImage(bg); 
}


      
