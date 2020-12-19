var fixedRect, movingRect;

var car,wall;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,200,50,80);
  car.shapeColor="yellow";
  wall=createSprite(900,200,20,100);
  wall.shapeColor="pink";
  car.velocityX=3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(movingRect,wall)
/*if(isTouching(movingRect,wall))
{
 movingRect.shapeColor="red"
}
else{
  wall.shapeColor = "green";
  wall.shapeColor = "green";
}*/
  drawSprites();
}

function bounceOff(o1,o2)
{
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2){
o1.velocityX=o1.velocityX*(-1);
  o2.velocityX=o2.velocityX*(-1);   
}

if( o1.y - o2.y < o2.height/2 + o1.height/2
&& o2.y - o1.y < o2.height/2 + o1.height/2) {
  o1.velocityY=o1.velocityY*(-1);
  o2.velocityY=o2.velocityY*(-1);   

 
}
}
 

