var score=0




function preload(){
dum = loadImage("dummy-removebg-preview.png")
gen = loadImage("gen.png")
guddu = loadImage("guddu.png")
shouto=loadImage("shigaraki.jpg")
}
 
function setup() {
  createCanvas(displayWidth-30,displayHeight-110);
 dum1= createSprite(100, 80, 50, 50);
 dum1.addImage(dum)
 dum1.scale=0.3
 dum2= createSprite(100, 290, 50, 50);
 dum2.addImage(dum)
 dum2.scale=0.3  
 dum3= createSprite(100, 520, 50, 50);
 dum3.addImage(dum)
 dum3.scale=0.3 
 
 shooter=createSprite(width-130,height/2)
 shooter.addImage(gen)
 shooter.scale=0.4
 shooter.rotation=360

 edges=createEdgeSprites();

 bulletg=createGroup();
 obsg=createGroup();
}


function draw() {
  background(0);  

shooter.velocityY=0;

fill("white")
textSize(25);
text("Score: "+ score,width-130,30)

if(keyDown("UP")){
shooter.velocityY=-3
}

if(keyDown("DOWN")){
  shooter.velocityY=3
  }

shooter.collide(edges)

if(bulletg.isTouching(obsg)){
bulletg.destroyEach();
}

if(keyDown("enter") && frameCount%8===0){
  bullet=createSprite(shooter.x-130,shooter.y+10)
  bullet.addImage(guddu)
  bullet.velocityX=-30
  bullet.scale=0.06
  bulletg.add(bullet)
}

if(bulletg.isTouching(dum1) || bulletg.isTouching(dum2) || bulletg.isTouching(dum2)){
bulletg.destroyEach();
score++;
}

tomura();

  drawSprites();
}
function tomura(){
if(frameCount%30===0){
 warp=createSprite(random(250,width-350),0)
warp.addImage(shouto)
warp.velocityY=8
warp.scale=0.3
obsg.add(warp)

warp.lifetime=width/8;
}


}