let stillRain = [];
let rainSet = false;

const talkBtn = {
  x: 400,
  y: 525,
  w: 260,
  h: 90,
  label: "That's frustrating",
};

const moveOnBtn = {
  x: 400,
  y: 625,
  w: 260,
  h: 90,
  label: "That's funny",
};

function drawStillRain() {
  stroke(200, 220, 255);
  strokeWeight(2);

  for (let drop of stillRain) {
    line(drop.x, drop.y, drop.x, drop.y + 12);
  }
}

function drawDisappointPath() {
  if (!rainSet) {
    initStillRain();
    rainSet = true;
  }
  background(100);
  drawStillRain();

  drawGameButton(talkBtn);
  drawGameButton(moveOnBtn);

  cursor(isHover(talkBtn) || isHover(moveOnBtn) ? HAND : ARROW);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("You are sad now :(", width / 2, height / 2 - 250);
  text(
    "New scenario: You open a group chat and see your",
    width / 2,
    height / 2 - 20,
  );
  text(
    "friends making jokes about you, while you were away",
    width / 2,
    height / 2 + 20,
  );
}

function disappointPathMousePressed() {
  if (isHover(talkBtn)) {
    currentScreen = "frustratingPath";
  }

  if (isHover(moveOnBtn)) {
    currentScreen = "funnyPath";
  }
}

function initStillRain() {
  stillRain = [];

  for (let i = 0; i < 120; i++) {
    stillRain.push({
      x: random(width),
      y: random(height),
    });
  }
}
