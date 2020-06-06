
var BALL_0, BALL_1, BALL_2, BALL_3, BALL_4, OB_0, OB_1, OB_2, OB_3, OB_4, OB_5, OB_6, edges, hit0, hit1, hit2, hit3, hit4;

function setup() {
  BALL_0 = createSprite(5, 5, 10, 10);
  BALL_1 = createSprite(100, 100, 10, 10);
  BALL_2 = createSprite(300, 300, 10, 10);
  BALL_3 = createSprite(200, 200, 10, 10);
  BALL_4 = createSprite(395, 395, 10, 10);
  OB_0 = createSprite(50, 32.5, 5, 75);
  OB_1 = createSprite(22.5, 100, 45, 5); 
  OB_2 = createSprite(377.5, 300, 45, 5);
  OB_3 = createSprite(350, 367.5, 5, 75);
  OB_4 = createSprite(250, 200, 6, 92);
  OB_5 = createSprite(350, 20, 75, 5);
  OB_6 = createSprite(200, 375, 75, 5);

  hit0 = 0;
  hit1 = 0;
  hit2 = 0;
  hit3 = 0;
  hit4 = 0;

  edges = createEdgeSprites();

  BALL_0.velocityX = random(-5, 5);
  BALL_1.velocityX = random(-5, 5);
  BALL_2.velocityX = random(-5, 5);
  BALL_3.velocityX = random(-5, 5);
  BALL_4.velocityX = random(-5, 5);

  BALL_0.velocityY = random(-5, 5);
  BALL_1.velocityY = random(-5, 5);
  BALL_2.velocityY = random(-5, 5);
  BALL_3.velocityY = random(-5, 5);
  BALL_4.velocityY = random(-5, 5);

  
}

function draw () {
background(0);

BALL_0.bounceOff(edges);
BALL_0.bounceOff(OB_0);
BALL_0.bounceOff(OB_1);
BALL_0.bounceOff(OB_2);
BALL_0.bounceOff(OB_3);
BALL_0.bounceOff(OB_4);
BALL_0.bounceOff(OB_5);
BALL_0.bounceOff(OB_6);
BALL_0.bounce(BALL_1);
BALL_0.bounce(BALL_2);
BALL_0.bounce(BALL_3);
BALL_0.bounce(BALL_4);

BALL_1.bounceOff(edges);
BALL_1.bounceOff(OB_0);
BALL_1.bounceOff(OB_1);
BALL_1.bounceOff(OB_2);
BALL_1.bounceOff(OB_3);
BALL_1.bounceOff(OB_4);
BALL_1.bounceOff(OB_5);
BALL_1.bounceOff(OB_6);
BALL_1.bounce(BALL_0);
BALL_1.bounce(BALL_2);
BALL_1.bounce(BALL_3);
BALL_1.bounce(BALL_4);

BALL_2.bounceOff(edges);
BALL_2.bounceOff(OB_0);
BALL_2.bounceOff(OB_1);
BALL_2.bounceOff(OB_2);
BALL_2.bounceOff(OB_3);
BALL_2.bounceOff(OB_4);
BALL_2.bounceOff(OB_5);
BALL_2.bounceOff(OB_6);
BALL_2.bounce(BALL_1);
BALL_2.bounce(BALL_0);
BALL_2.bounce(BALL_3);
BALL_2.bounce(BALL_4);

BALL_3.bounceOff(edges);
BALL_3.bounceOff(OB_0);
BALL_3.bounceOff(OB_1);
BALL_3.bounceOff(OB_2);
BALL_3.bounceOff(OB_3);
BALL_3.bounceOff(OB_4);
BALL_3.bounceOff(OB_5);
BALL_3.bounceOff(OB_6);
BALL_3.bounce(BALL_1);
BALL_3.bounce(BALL_2);
BALL_3.bounce(BALL_0);
BALL_3.bounce(BALL_4);

BALL_4.bounceOff(edges);
BALL_4.bounceOff(OB_0);
BALL_4.bounceOff(OB_1);
BALL_4.bounceOff(OB_2);
BALL_4.bounceOff(OB_3);
BALL_4.bounceOff(OB_4);
BALL_4.bounceOff(OB_5);
BALL_4.bounceOff(OB_6);
BALL_4.bounce(BALL_1);
BALL_4.bounce(BALL_2);
BALL_4.bounce(BALL_3);
BALL_4.bounce(BALL_0);

if (BALL_0.isTouching(edges)||
    BALL_0.isTouching(BALL_1)||
    BALL_0.isTouching(BALL_2)||
    BALL_0.isTouching(BALL_3)||
    BALL_0.isTouching(BALL_4)||
    BALL_0.isTouching(OB_0)||
    BALL_0.isTouching(OB_1)||
    BALL_0.isTouching(OB_2)||
    BALL_0.isTouching(OB_3)||
    BALL_0.isTouching(OB_4)||
    BALL_0.isTouching(OB_5)||
    BALL_0.isTouching(OB_6)) {
    hit0 = hit0 + 1;
    }

    if (hit0%2 === 0) {
      BALL_0.shapeColor = "green";
    }

    if (hit0%3 === 0) {
      BALL_0.shapeColor = "red";
    }

    if (hit0%5 === 0) {
      BALL_0.shapeColor = "blue";
    }

    if (hit0%7 === 0) {
      BALL_0.shapeColor = "yellow";
    }

    if (BALL_1.isTouching(edges)||
    BALL_1.isTouching(BALL_0)||
    BALL_1.isTouching(BALL_2)||
    BALL_1.isTouching(BALL_3)||
    BALL_1.isTouching(BALL_4)||
    BALL_1.isTouching(OB_0)||
    BALL_1.isTouching(OB_1)||
    BALL_1.isTouching(OB_2)||
    BALL_1.isTouching(OB_3)||
    BALL_1.isTouching(OB_4)||
    BALL_1.isTouching(OB_5)||
    BALL_1.isTouching(OB_6)) {
    hit1 = hit1 + 1;
    }

    if (hit1%2 === 0) {
      BALL_1.shapeColor = "green";
    }

    if (hit1%3 === 0) {
      BALL_1.shapeColor = "red";
    }

    if (hit1%5 === 0) {
      BALL_1.shapeColor = "blue";
    }

    if (hit1%7 === 0) {
      BALL_1.shapeColor = "yellow";
    }

    if (BALL_2.isTouching(edges)||
    BALL_2.isTouching(BALL_1)||
    BALL_2.isTouching(BALL_0)||
    BALL_2.isTouching(BALL_3)||
    BALL_2.isTouching(BALL_4)||
    BALL_2.isTouching(OB_0)||
    BALL_2.isTouching(OB_1)||
    BALL_2.isTouching(OB_2)||
    BALL_2.isTouching(OB_3)||
    BALL_2.isTouching(OB_4)||
    BALL_2.isTouching(OB_5)||
    BALL_2.isTouching(OB_6)) {
    hit2 = hit2 + 1;
    }

    if (hit2%2 === 0) {
      BALL_2.shapeColor = "green";
    }

    if (hit2%3 === 0) {
      BALL_2.shapeColor = "red";
    }

    if (hit2%5 === 0) {
      BALL_2.shapeColor = "blue";
    }

    if (hit2%7 === 0) {
      BALL_2.shapeColor = "yellow";
    }

    if (BALL_3.isTouching(edges)||
    BALL_3.isTouching(BALL_1)||
    BALL_3.isTouching(BALL_2)||
    BALL_3.isTouching(BALL_0)||
    BALL_3.isTouching(BALL_4)||
    BALL_3.isTouching(OB_0)||
    BALL_3.isTouching(OB_1)||
    BALL_3.isTouching(OB_2)||
    BALL_3.isTouching(OB_3)||
    BALL_3.isTouching(OB_4)||
    BALL_3.isTouching(OB_5)||
    BALL_3.isTouching(OB_6)) {
    hit3 = hit3 + 1;
    }

    if (hit3%2 === 0) {
      BALL_3.shapeColor = "green";
    }

    if (hit3%3 === 0) {
      BALL_3.shapeColor = "red";
    }

    if (hit3%5 === 0) {
      BALL_3.shapeColor = "blue";
    }

    if (hit3%7 === 0) {
      BALL_3.shapeColor = "yellow";
    }

    if (BALL_4.isTouching(edges)||
    BALL_4.isTouching(BALL_1)||
    BALL_4.isTouching(BALL_2)||
    BALL_4.isTouching(BALL_3)||
    BALL_4.isTouching(BALL_0)||
    BALL_4.isTouching(OB_0)||
    BALL_4.isTouching(OB_1)||
    BALL_4.isTouching(OB_2)||
    BALL_4.isTouching(OB_3)||
    BALL_4.isTouching(OB_4)||
    BALL_4.isTouching(OB_5)||
    BALL_4.isTouching(OB_6)) {
    hit4 = hit4 + 1;
    }

    if (hit4%2 === 0) {
      BALL_4.shapeColor = "green";
    }

    if (hit4%3 === 0) {
      BALL_4.shapeColor = "red";
    }

    if (hit4%5 === 0) {
      BALL_4.shapeColor = "blue";
    }

    if (hit4%7 === 0) {
      BALL_4.shapeColor = "yellow";
    }
drawSprites();
}
