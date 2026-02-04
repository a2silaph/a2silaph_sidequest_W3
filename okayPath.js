const choiceABtn = {
  x: 400,
  y: 525,
  w: 260,
  h: 90,
  label: "That's frustrating",
};

const choiceBBtn = {
  x: 400,
  y: 625,
  w: 260,
  h: 90,
  label: "That's funny",
};

function drawOkayPath() {
  background(100, 190, 220);
  drawSun(width / 2, height / 2 - 175, 80);
  drawGameButton(choiceABtn);
  drawGameButton(choiceBBtn);

  cursor(isHover(choiceABtn) || isHover(choiceBBtn) ? HAND : ARROW);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("You are still happy:)", width / 2, height / 2 - 350);
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

function okayPathMousePressed() {
  if (isHover(choiceABtn)) {
    currentScreen = "frustratingPath";
  }

  if (isHover(choiceBBtn)) {
    currentScreen = "funnyPath";
  }
}

function drawSun(x, y, r) {
  // Sun rays
  rectMode(CENTER);
  noStroke();
  fill(255, 200, 60);

  for (let i = 0; i < 12; i++) {
    let angle = (TWO_PI / 12) * i;
    let rayX = x + cos(angle) * (r + 30);
    let rayY = y + sin(angle) * (r + 30);

    push();
    translate(rayX, rayY);
    rotate(angle);
    rect(0, 0, 12, 40);
    pop();
  }

  // Sun body
  fill(255, 220, 80);
  ellipse(x, y, r * 2);
}
