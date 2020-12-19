var dog, happyDog, dogImage, database, foodStock, foodS;

function preload() {
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  createCanvas(500, 500);
  dog = createSprite(250, 250, 50, 50);
  dog.addImage(dogImage);
  dog.scale = 0.25;
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  text(foodS, 50, 10);
}

function readStock(){
  foodS = data.val();
}

function writeStock(x){
  if(x >= 0){
    x = 0;
  }
  else{
    x = x - 1;
  }

  database.ref('/').update({
    food:x
  })
}