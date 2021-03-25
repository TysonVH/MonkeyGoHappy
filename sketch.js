
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var score
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
  FoodGroup = new Group()
  ObstacleGroup = new Group()
}


function draw() {
  background("white")
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("UP_ARROW") && monkey.y>300){
    monkey.velocityY = -17
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50)
  
  SpawnFood()
  SpawnObstacles()
  
  drawSprites()
}


function SpawnFood(){
  if(frameCount%80===0){
    banana = createSprite(350,150,40,10)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale = 0.05
    banana.velocityX = -10
    banana.lifeTime = 200
    FoodGroup.add(banana)
  }
}


function SpawnObstacles(){
  if(frameCount>300 && frameCount%140===0){
    obstacle = createSprite(375,330,30,30)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -7
    obstacle.lifeTime = 200
    ObstacleGroup.add(obstacle)
  }
}

