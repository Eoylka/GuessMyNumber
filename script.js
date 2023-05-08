"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "✨ Correct number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = "13";
// document.querySelector(".score").textContent = "21";
// document.querySelector(".guess").value = "132";
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let counter = 0;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let moreThan20EN = "❌ No! No more than 20";
let moreThan20RU = "❌ Нет, должно быть более 20!";
let noNumberEn = "❌ No! Number";
let noNumberRu = "❌ Введите число!";
let winEn = "✨ Correct number";
let winRu = "✨ Вы угадали";
let looseEn = "You lost the game 🥵";
let looseRu = "Вы проиграли 🥵";
let wrongEn = "📈 To high!";
let wrongRu = "📈 Слишком высоко";
let wrongEn1 = "📉 To low!";
let wrongRu1 = "📉 Слишком низко";
let winEn1 = "You are right!";
let winRu1 = "Верно!";
let guessEn = "Start guessing...";
let guessRu = "Предположите число...";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(noNumberEn);

    // when player win
  } else if (guess >= 21) {
    displayMessage(moreThan20EN);
  } else if (guess === secretNumber) {
    displayMessage(winEn);
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".GuessText").textContent = winEn1;
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when gess is wrong
    // } else if (guess !== secretNumber) {
    //to high
  } else if (guess > secretNumber) {
    counter += 1;
    if (counter === 1) {
      score = score - 1;
      displayMessage(wrongEn);
      document.querySelector(".score").textContent = score;
    } else if (counter === 2) {
      score = score - 2;
      displayMessage(wrongEn);
      document.querySelector(".score").textContent = score;
    } else if (counter === 3) {
      score = score - 3;
      displayMessage(wrongEn);
      document.querySelector(".score").textContent = score;
    } else if (counter === 4) {
      score = score - 4;
      displayMessage(wrongEn);
      document.querySelector(".score").textContent = score;
    } else if (counter === 5) {
      score = score - 5;
      displayMessage(wrongEn);
      document.querySelector(".score").textContent = score;
      // whe player loose the game
    } else {
      displayMessage(looseEn);
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "#a52a2a";
      document.querySelector(".number").textContent = secretNumber;
    }
    //to low
  } else if (guess < secretNumber) {
    counter += 1;
    if (counter === 1) {
      score = score - 1;
      displayMessage(wrongEn1);
      document.querySelector(".score").textContent = score;
    } else if (counter === 2) {
      score = score - 2;
      displayMessage(wrongEn1);
      document.querySelector(".score").textContent = score;
    } else if (counter === 3) {
      score = score - 3;
      displayMessage(wrongEn1);
      document.querySelector(".score").textContent = score;
    } else if (counter === 4) {
      score = score - 4;
      displayMessage(wrongEn1);
      document.querySelector(".score").textContent = score;
    } else if (counter === 5) {
      score = score - 5;
      displayMessage(wrongEn1);
      document.querySelector(".score").textContent = score;
      // whe player loose the game
    } else {
      displayMessage(looseEn);
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "#a52a2a";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  counter = 0;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  displayMessage(guessEn);
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
});

document.querySelector(".RU").addEventListener("click", function () {
  moreThan20EN = moreThan20RU;
  noNumberEn = noNumberRu;
  winEn = winRu;
  looseEn = looseRu;
  wrongEn = wrongRu;
  wrongEn1 = wrongRu1;
  winEn1 = winRu1;
  guessEn = guessRu;

  document.querySelector(".again").textContent = "Снова!";
  document.querySelector(".GuessText").textContent = "Угадай номер!";
  document.querySelector(".between").textContent = "(Между 1 и 20)";
  document.querySelector(".check").textContent = "Жми";

  document.querySelector(".message").textContent = "Предположите число...";
  document.querySelector(".label-score").textContent = "💯 Очки:";

  document.querySelector(".label-highscore").textContent = "🥇 Лучший:";

  document.querySelector(".starter").style.display = "none";

  document.querySelector(".RU").style.display = "none";
  document.querySelector(".EN").style.display = "block";
  document.querySelector(".starterRu").style.display = "block";
  document.querySelector(".backgorund").style.display = "block";
});

document.querySelector(".starter").addEventListener("click", function () {
  document.querySelector(".starter").style.display = "none";
  document.querySelector(".backgorund").style.display = "none";
  document.querySelector(".RU").style.display = "none";
  document.querySelector(".EN").style.display = "none";
});

document.querySelector(".backgorund").addEventListener("click", function () {
  document.querySelector(".starter").style.display = "none";
  document.querySelector(".backgorund").style.display = "none";
  document.querySelector(".starterRu").style.display = "none";
  document.querySelector(".RU").style.display = "none";
  document.querySelector(".EN").style.display = "none";
});

document.querySelector(".starterRu").addEventListener("click", function () {
  document.querySelector(".starterRu").style.display = "none";
  document.querySelector(".backgorund").style.display = "none";
  document.querySelector(".RU").style.display = "none";
  document.querySelector(".EN").style.display = "none";
});
document.querySelector(".EN").addEventListener("click", function () {
  window.location.reload();
});
