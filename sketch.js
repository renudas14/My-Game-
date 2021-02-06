var GameState=1
var game,form;
var gender,Name;
var mainC;
var Score=0;

function preload(){
  Herione= loadImage("Images/Herion.png");
  Hero=loadImage("Images/Hero.png");
  gFriends1=loadImage("Images/GFriend 1.png");
  gFriends2=loadImage("Images/Gfreind 2.png");
  gFriends3=loadImage("Images/GFriend 3.png");
  gFriends4=loadImage("Images/GFriend 4.png");
  Friends1=loadImage("Images/fRIEND 1.png");
  Friends2=loadImage("Images/fRIEND 2.png");
  Friends3=loadImage("Images/Friend 3.png");
  Friends4=loadImage("Images/Friend 4.png");
  Friends5=loadImage("Images/Friend 5.png");
  Obstacle=loadImage("Images/Obstacle 1.png")
}

function setup(){
  createCanvas (400,400);
  game= new Game()
  game.start()
  mainC=createSprite(200,200,10,30);
  mainC.visible=false
  FriendGroup=new Group()
}

function draw(){
  background("Red")
  if(GameState===2){
    console.log(gender)
    mainC.visible=true
    mainC.scale=0.4
    if(keyDown("RIGHT_ARROW")){
      mainC.x=mainC.x+2;
    }
    if(keyDown("LEFT_ARROW")){
      mainC.x=mainC.x-2;
    }
    spanFriend();
    spanObstacle();
    if(gender==="male"||gender==="Male"||gender==="M"){
      mainC.addImage(Hero);
    }
    if(gender==="female"||gender==="Female"||gender==="F"){
      mainC.addImage(Herione)
    }
     if(mainC.isTouching(FriendGroup)){
       Score=Score+10;
     }
  }
  text("Score="+Score,50,50)
  
  drawSprites();
  
}

function spanFriend(){
  if(frameCount%100===0){
   friends=createSprite(Math.round(random(30,370)),0)
   number=Math.round(random(1,9));
   switch(number){
     case 1:friends.addImage(gFriends1)
              friends.scale=0.4;
              break;
     case 2:friends.addImage(gFriends2)
             friends.scale=0.4; 
             break;
     case 3:friends.addImage(gFriends3)
             friends.scale=0.4;
             break;
     case 4:friends.addImage(gFriends4)
             friends.scale=0.15
             break;
     case 5:friends.addImage(Friends1)
             friends.scale=0.4;
             break;
     case 6:friends.addImage(Friends2)
    friends.scale=0.4;

             break;
     case 7:friends.addImage(Friends3)
    friends.scale=0.4;

             break;
     case 8:friends.addImage(Friends4)
    friends.scale=0.4;

             break;
      case 9:friends.addImage(Friends5)
    friends.scale=0.4;

             break;
    }
    friends.velocityY=1;
    FriendGroup.add(friends)
  }
}

function spanObstacle(){
  if(frameCount%200===0){
    obstacle=createSprite(400,Math.round(random(100,300)))
    obstacle.addImage(Obstacle)
    obstacle.velocityX=-1;
    obstacle.scale=0.1;
  }
}