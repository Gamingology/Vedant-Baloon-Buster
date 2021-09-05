var arrow, arrow1, temparrow;
var bow, bow1;
var background1;
var ed1
var scene;
var score = 0;
var redb, blueb, greenb, pinkb;
var rImg, bImg, gImg, pImg;
var rgrp, bgrp, pgrp, ggrp, agrp;

function preload() {
  //load your images here 

  arrow1 = loadImage("arrow0.png")
  bow1 = loadImage("bow0.png")
  background1 = loadImage("background0.png")
  rImg = loadImage("red_balloon0.png");
  bImg = loadImage("blue_balloon0.png");
  pImg = loadImage("pink_balloon0.png");
  gImg = loadImage("green_balloon0.png");

}

function setup() {
  createCanvas(400, 400);
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(background1);
  scene.x = scene.width / 2;
  scene.velocityX = -4;
  scene.scale = 2.5

  //bow is added
  bow = createSprite(380, 100, 10, 10);
  bow.addImage(bow1);

  //arrow
  temparrow = createSprite(375, 100, 10, 10);
  temparrow.addImage(arrow1);
  temparrow.scale = 0.3

  rgrp = createGroup();
  bgrp = createGroup();
  pgrp = createGroup();
  ggrp = createGroup();
  agrp = createGroup();

}


function draw() {
  background(180);
  bow.y = mouseY;
  temparrow.y = bow.y;
  textSize(20);

  //add code here
  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }
  if (keyWentDown("space")) {
    arrowRelease();
  }
  var r = Math.round(random(1, 4))
  if (frameCount % 70 === 0) {
    switch (r) {
      case 1:
        redf();
        break;
      case 2:
        bluef();
        break;
      case 3:
        greenf();
        break;
      case 4:
        pinkf();
        break;
    }
  }
  if (agrp.isTouching(bgrp)) {
    bgrp.destroyEach();
    agrp.destroyEach();
    score = score + 1;
  }
  if (agrp.isTouching(ggrp)) {
    ggrp.destroyEach();
    agrp.destroyEach();
    score = score + 1;
  }
  if (agrp.isTouching(rgrp)) {
    rgrp.destroyEach();
    agrp.destroyEach();
    score = score + 1;
  }
  if (agrp.isTouching(pgrp)) {
    pgrp.destroyEach();
    agrp.destroyEach();
    score = score + 1;
  }

  drawSprites();
  text("Score:" + score, 20, 20)
}

function arrowRelease() {
  var arrow = createSprite(375, 100, 10, 10);
  arrow.addImage(arrow1);
  arrow.y = bow.y;
  arrow.scale = 0.3;
  arrow.velocityX = -4;
  agrp.add(arrow);
}

//creating the balloons
function redf() {
  redb = createSprite(20, Math.round(random(20, 385)), 10, 10);
  redb.addImage(rImg);
  redb.scale = 0.09;
  redb.velocityX = 3;
  rgrp.add(redb)
}

function bluef() {
  blueb = createSprite(20, Math.round(random(20, 385)), 10, 10);
  blueb.addImage(bImg);
  blueb.scale = 0.09;
  blueb.velocityX = 3;
  bgrp.add(blueb)
}

function greenf() {
  greenb = createSprite(20, Math.round(random(20, 385)), 10, 10);
  greenb.addImage(gImg);
  greenb.scale = 0.09;
  greenb.velocityX = 3;
  ggrp.add(greenb)
}

function pinkf() {
  pinkb = createSprite(20, Math.round(random(20, 385)), 10, 10);
  pinkb.addImage(pImg);
  pinkb.scale = 1
  pinkb.velocityX = 3;
  pgrp.add(pinkb)
}