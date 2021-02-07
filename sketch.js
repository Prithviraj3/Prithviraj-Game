var player,playerimg,backgroundimg,bgSprite;
var enemie,enemieimg,enemie2,enemie2img
function preload(){
  playerimg=loadAnimation("player.png","player3.png","player4.png");
  backgroundimg=loadImage("background.jpg");
enemieimg=loadImage("crab.png");
enemie2img=loadImage("enemies.png");
}
function setup() {
  createCanvas(1200,800);
  bgSprite=createSprite(300,300,10,10);
 bgSprite.addImage(backgroundimg);
bgSprite.velocityX=-3
 player = createSprite(200,700,50,50);
 player. addAnimation("player",playerimg);
 player.scale=1.5
 }

function draw() {
 
if(bgSprite.x<200){
  bgSprite.x=400;
}
if(player.y>520){
  if(keyDown("right")){
player.x=player.x+2

  }
  if(keyDown("left")){
    player.x=player.x-2
    
      }
      if(keyDown("up")){
        player.y=player.y-2
        
          }
          if(keyDown("down")){
            player.y=player.y+2
            
              }
            }
              console.log(player.y)
      spawnenemies();
  drawSprites();
}
function spawnenemies(){
  if(frameCount % 80===0){
enemie=createSprite(1200,random(600,700),20,20);
var rand =Math.round(random(1,2));
switch (rand){
  case 1:enemie.addImage(enemieimg);
  break;
  case 2:enemie.addImage(enemie2img);
  break;
}

enemie.velocityX=-4
enemie.scale=0.5

  }
}