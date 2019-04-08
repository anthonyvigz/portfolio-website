function computerPlay() {
  let rando = Math.floor(Math.random() * 3);
  if (rando === 0) {
      return 'Rock';
} else if (rando === 1) {
      return 'Paper';
} else {
      return 'Scissors';
  }
}

let playerSelection = ''
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var playerscore = 0;
var computerscore = 0;

var winaudio = new Audio('');
var loseaudio = new Audio('');
var tieaudio = new Audio('');



rock.addEventListener("click", function() {
  let computerSelection = computerPlay();
  let game = playRound(computerSelection, 'Rock');
  if (game === 'tie') {
    document.getElementById('result').innerHTML = 'Tie!';
    tieaudio.play();
  } else if (game === 'player') {
      document.getElementById('result').innerHTML = 'You win!';
      playerscore++;
      winaudio.play();
      document.getElementById('playerscore').innerHTML = playerscore;
  } else {
      document.getElementById('result').innerHTML = 'You lose!';
      computerscore++;
      loseaudio.play();
      document.getElementById('cpuscore').innerHTML = computerscore;
  }
  }
);

paper.addEventListener("click", function() {
  let computerSelection = computerPlay();
  let game = playRound(computerSelection, 'Paper');
  if (game === 'tie') {
    document.getElementById('result').innerHTML = 'Tie!';
    tieaudio.play();
  } else if (game === 'player') {
      document.getElementById('result').innerHTML = 'You win!';
      playerscore++;
      winaudio.play();
      document.getElementById('playerscore').innerHTML = playerscore;
  } else {
      document.getElementById('result').innerHTML = 'You lose!';
      computerscore++;
      loseaudio.play();
      document.getElementById('cpuscore').innerHTML = computerscore;
  }
  }
);


scissors.addEventListener("click", function() {
  let computerSelection = computerPlay();
  let game = playRound(computerSelection, 'Scissors');
  if (game === 'tie') {
    document.getElementById('result').innerHTML = 'Tie!';
    tieaudio.play();
  } else if (game === 'player') {
      document.getElementById('result').innerHTML = 'You win!';
      playerscore++;
      winaudio.play();
      document.getElementById('playerscore').innerHTML = playerscore;
  } else {
      document.getElementById('result').innerHTML = 'You lose!';
      computerscore++;
      loseaudio.play();
      document.getElementById('cpuscore').innerHTML = computerscore;
  }
  }
);

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return 'tie';
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
      return 'computer';
  } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
      return 'player';
  } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
      return 'player';
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
      return 'computer';
  } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
      return 'player';
  } else {
      return 'computer';
}
}







