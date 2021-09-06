var bg,bgImg;
var balloon,balloonImg;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

}

function setup(){
  createCanvas(400,400);
 bg=createSprite(165,485,1,1)
 bg.addImage(bgImg)
 bg.scale=1.3

 //creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;


}


function draw(){
       //making the hot air balloon jump
       if(keyDown("space")) {
        balloon.velocityY = -6 ;
        
      }

      //adding gravity
       balloon.velocityY = balloon.velocityY + 2;
 drawSprites()
}
