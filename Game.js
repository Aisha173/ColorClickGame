// List of possible colors
let colors = ["red", "blue", "green", "yellow"];

// Current game score
let score = 0;

// Correct color for current round
let currentAnswer = "";

// Start game: reset score and render first round
function startGame() {
  score = 0;
  currentScore();
  renderGame();
}

// Render a new color word with random display color
function renderGame() {
  let textColorName = Math.floor(Math.random() * colors.length);
  let displayColor = Math.floor(Math.random() * colors.length);

  let word = document.getElementById("wordColor");
  word.textContent = colors[textColorName]; // the word to click

  word.style.color = colors[displayColor]; // color the word has

  currentAnswer = colors[textColorName]; // save correct answer
}

// Check if player clicked correct color
function checkAnswer(clickedColor) {
  if (clickedColor == currentAnswer) {
    score++; // increase score
    currentScore(); // update displayed score
    renderGame(); // next round
  } else {
    alert("Wrong! Final score: " + score); // show game over
    score = 0; // reset score
    currentScore();
    renderGame(); // restart game
  }
}

// Update the displayed score
function currentScore() {
  document.getElementById("score").textContent = "Score: " + score;
}
