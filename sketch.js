const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var sceneimage,Player, P1, heart, H1, b1,a1, fruit1, fruit2,fruit;


function preload(){
sceneimage = loadImage("j.jpg")
Player=loadImage("idk-removebg-preview.png")
heart=loadImage("heart-removebg-preview.png")
fruit1=loadImage("watermelon-removebg-preview.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  fruit=createSprite(400,350)
  fruit.addImage(fruit1)
  fruit.scale=0.2
  P1=createSprite(400,200,400,200)
    P1.addImage(Player)
    P1.scale=0.5
   H1=createSprite(740,20,740,20)
 // P1.addIma
 b1= new Bow(180, 110, 100, 50, 20);
a1= new Arrow(180,110,100,50,20);
collisionWithBoat()



  createSprite(400, 200, 50, 50);
 //scene = new Background(400,200,800,400)
}

function draw() {
 
  //for (var i = 0; i < balls.length; i++) {
   // showCannonBalls(balls[i], i);
  //}
background(sceneimage);  
  b1.display();
  a1.display();
  

  //showBoats();
  //Matter.Body.setVelocity(boat.body,{x:-0.9, y:0})
  
    if(keyIsDown(DOWN_ARROW)&&keyDown("SPACE")){
         shoot()
      }
   
      
  drawSprites();
  fill("yellow")
  text(mouseX+","+mouseY,mouseX,mouseY)
}
function collisionWithBoat(index) {
  for (var i = 0; i < fruit.length; i++) {
    if (arrow[index] !== undefined && fruit[i] !== undefined) {
      var collision = Matter.SAT.collides(arrow[index].body, fruit[i].body);

      if (collision.collided) {
        
          fruit[i].remove(i);
        

        Matter.World.remove(world, fruit[index].body);
       
    }
  }
} delete fruit[index];
      }
        