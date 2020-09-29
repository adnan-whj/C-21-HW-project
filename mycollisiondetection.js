function coldetect(){

bullet.velocityX=0;

textSize(25);
textFont("italic");
stroke("black");
fill("yellow");
text(damage,200,100);
fill("red");
textFont("italic");
text("DAMAGE:",70,100);
text("REPORT:",70,180);
text("THICKNESS:",70,140);
fill("yellow");
text(thickness,220,140);

if(damage<10){
 fill("yellow");
 text("Good to go!!",190,180);
 bullet.shapeColor="green";
}
else if(damage > 10|| bullet.x > wall.x){
 fill("yellow");
 text("Not strong enough...",190,180);
 bullet.shapeColor="red";
}

}