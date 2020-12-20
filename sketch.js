var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(30,52);
  weight = random(223,321);
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  bullet = createSprite(50,200,10,5);
  bullet.shapeColor = "white";

  bullet.velocityX = speed;

}

function draw() {
  background(0);  
  drawSprites();


  if(isTouching(bullet,wall)){
    bullet.velocityX = 0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage <= 10){
      wall.shapeColor = "green";
    }
    else if(damage >= 10){
      wall.shapeColor = "red";
    }
    }
    

}

function isTouching(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2  &&
    object2.x - object1.x <= object1.width/2 + object2.width/2  &&
    object1.y - object2.y <= object1.height/2 + object2.height/2  &&
    object2.y - object1.y <= object1.height/2 + object2.height/2  ){
  return true
    }
    else{
      return false
    }
}