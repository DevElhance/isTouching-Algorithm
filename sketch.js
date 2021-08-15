var movingrec, fixedrec;

function setup() {

  createCanvas(1200,800);
  fixedrec =createSprite(200, 200, 50, 80);
  movingrec = createSprite(400,200,80,30);
  fixedrec.shapeColor="green";
  movingrec.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingrec.x = World.mouseX;
  movingrec.y = World.mouseY;

  if(movingrec.x-fixedrec.x<movingrec.width/2+fixedrec.width/2 
    && movingrec.y-fixedrec.y<movingrec.height/2+fixedrec.height/2 
    && fixedrec.x-movingrec.x<movingrec.width/2+fixedrec.width/2
    && fixedrec.y-movingrec.y<movingrec.height/2+fixedrec.height/2 ){
    movingrec.shapeColor="red";
    fixedrec.shapeColor="red";
  }
  else{
    movingrec.shapeColor="green";
    fixedrec.shapeColor="green";
  }


  drawSprites();
}