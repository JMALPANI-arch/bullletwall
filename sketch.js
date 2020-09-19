var bullet,wall,speed,weight,thikness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 80, 20);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thikness,height/2);
   wall.shapeColor=color(80,80,80);
   thikness=random(22,83);
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=(0.5*speed*weight*speed)/22500;
    if(deformation<100){
      bullet.shapeColor="white"
    }
    else if (deformation>100&&deformation<180){
      bullet.shapeColor="green";
    }
    else if (deformation >180){
      bullet.shapeColor="red";
    }
  }

  drawSprites();
}