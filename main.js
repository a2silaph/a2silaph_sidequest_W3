// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, game, win, lose).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// This variable is shared across all files because all files run in the same
// global JavaScript scope when loaded in index.html.
//
// We store the “name” of the current screen as a string.
// Only one screen should be active at a time.
let currentScreen = "start"; // "start" | "instr" | "game" | "win" | "lose"

// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
// This is where you usually set canvas size and initial settings.
function setup() {
  createCanvas(800, 800);

  // Sets a default font for all text() calls
  // (This can be changed later per-screen if you want.)
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame (many times per second)
// ------------------------------
// This is the core “router” for visuals.
// Depending on currentScreen, we call the correct draw function.
function draw() {
  // Each screen file defines its own draw function:
  //   start.js         → drawStart()
  //   instructions.js  → drawInstr()
  //   game.js          → drawGame()
  //   win.js           → drawWin()
  //   lose.js          → drawLose()

  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "game") drawGame();
  else if (currentScreen === "okayPath") drawOkayPath();
  else if (currentScreen === "disappointPath") drawDisappointPath();
  else if (currentScreen === "frustratingPath") drawfrustratingPath();
  else if (currentScreen === "funnyPath") drawfunnyPath();

  // (Optional teaching note)
  // This “if/else chain” is a very common early approach.
  // Later in the course you might replace it with:
  // - a switch statement, or
  // - an object/map of screens
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
// This routes mouse input to the correct screen handler.
function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "game") gameMousePressed();
  else if (currentScreen === "okayPath") okayPathMousePressed?.();
  else if (currentScreen === "disappointPath") disappointPathMousePressed?.();
  else if (currentScreen === "frustratingPath") frustratingPathMousePressed?.();
  else if (currentScreen === "funnyPath") funnyPathMousePressed?.();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
//
// Many screens have buttons.
// This helper checks whether the mouse is inside a rectangle.
//
// Important: our buttons are drawn using rectMode(CENTER),
// meaning x,y is the CENTRE of the rectangle.
// So we check mouseX and mouseY against half-width/half-height bounds.
//
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}
function keyPressed() {
  // GLOBAL back shortcut
  if (key === "b" || key === "B") {
    currentScreen = "start";
    return;
  }

  if (currentScreen === "start") startKeyPressed?.();
  else if (currentScreen === "instr") instrKeyPressed?.();
  else if (currentScreen === "game") gameKeyPressed?.();
  else if (currentScreen === "okayPath") okayPathKeyPressed?.();
  else if (currentScreen === "disappointPath") disappointPathKeyPressed?.();
}
