var bullet,wall;
var thickness,speed,weight;
var damage;
  

function setup() {
  createCanvas(800,400);
  thickness = random(22,83);
  wall = createSprite(700, 200, thickness, height);
  wall.width = thickness;
  wall.shapeColor = "grey";
  bullet = createSprite(50,200,30,15);
  speed = random(24,200);
  weight = random(30,52);
  damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness );
 
}

function draw() {
  background("blue");  
  text("MILITARY WALL TESTING SIMULATOR",10,30);
  bullet.velocityX=speed;
  if (bullet.x - wall.x < bullet.width/2 + wall.width/2 
    && wall.x - bullet.x < wall.width/2 + bullet.width/2){

      coldetect();
       
    }
    
  drawSprites();
}
