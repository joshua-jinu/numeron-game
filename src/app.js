document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  const gameContainer = document.querySelector('.game');
  const gameOverContainer = document.querySelector('.gameover');
  const timer = document.getElementById('timer');
  let score = 0;
  let timerId;

  playButton.onclick = () => {
    playButton.style.display = 'none';
    gameContainer.style.display = 'flex';
    startGame();
  };

  function generateRandomNumbers() {
    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);
    document.getElementById('number1').innerHTML = number1;
    document.getElementById('number2').innerHTML = number2;
  }

  function startTimer() {
    let time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
      time--;
      if (time === 0) {
        endGame();
      }
      timer.innerHTML = time;
    }, 1000);
  }

  function startGame() {
    score = 0;
    generateRandomNumbers();
    randomise();
    startTimer();
  }

  function resetGame() {
    generateRandomNumbers();
    randomise();
    resetTime(timerId);
  }

  function endGame() {
    clearInterval(timerId);
    localStorage.setItem('score', score);
    gameContainer.style.display = 'none';
    gameOverContainer.style.display = 'flex';
    document.getElementById('score-board').innerHTML = score;
  }

  function randomise() {
    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);

    if (number1 < number2) {
      var extra = number1;
      number1 = number2;
      number2 = extra;
    }

    operator = Math.round(Math.random() * 5);
    switch (operator) {
      case 1:
        number3 = number1 + number2;
        break;

      case 2:
        number3 = number1 - number2;
        break;

      case 3:
        number3 = number1 * number2;
        break;

      case 4:
        number3 = Math.floor(number1 / number2);
        break;

      case 5:
        number3 = number1 % number2;
        break;

      case 0:
        randomise();
    }

    document.getElementById('number1').innerHTML = number1;
    document.getElementById('number2').innerHTML = number2;
    document.getElementById('number3').innerHTML = number3;

    console.log(number1 + ' ' + number2 + ' ' + number3 + ' ' + operator);
  }

  function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
  }

  //  Complete the logic for various Operator click handlers( the plus is done for you)
  document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
      const number1 = parseInt(document.getElementById('number1').innerHTML);
      const number2 = parseInt(document.getElementById('number2').innerHTML);
      switch (button.id) {
        case 'plus':
          result = number1 + number2;
          break;

        case 'minus':
          result = number1 - number2;
          break;

        case 'mul':
          result = number1 * number2;
          break;

        case 'divide':
          result = Math.floor(number1 / number2);
          break;

        case 'modulus':
          result = number1 % number2;
          break;
      }
      if (document.getElementById('number3').innerHTML == result) score += 1;
      randomise();
    });
  });

  function playAgainHandler() {
    gameOverContainer.style.display = 'none';
    gameContainer.style.display = 'flex';
    startGame();
  }

  const playAgainButton = document.getElementById('play-again-button');
  if (playAgainButton) {
    playAgainButton.onclick = playAgainHandler;
  }

  // Expose functions for testing
  window.startGame = startGame;
  window.endGame = endGame;
  window.resetGame = resetGame;
  window.generateRandomNumbers = generateRandomNumbers; // Expose for testing
  window.startTimer = startTimer; // Expose for testing
  window.playAgainHandler = playAgainHandler; // Expose for testing
});
