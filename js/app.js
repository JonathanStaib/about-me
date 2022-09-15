'use strict';

console.log('hellooo woorlldd');

let userName = prompt('What is your name?');

let score = 0;

alert(`Welcome to my site ${userName} ! I have a little quiz for you. Please guess yes or no to the following questions!`);

let questionOne = prompt('Do I have 2 dogs?').toLowerCase();

if(questionOne === 'n' || questionOne === 'no'){
  alert('Yes you are correct! ');
  score++;
} else if(questionOne === 'y' || questionOne === 'yes'){
  alert('Sorry, I actually have 3!');
}

let questionTwo = prompt('is let a function').toLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('Yes you are correct, let is a function!');
  score++;
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('Sorry, incorrect. Let actually is a function!');
}

let questionThree = prompt('Am I a human?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes'){
  alert('Incorrect! I am simply just a bot.');
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('Yes Correct, now I am curious if you are a bot as well...');
  score ++;
}

let questionFour = prompt('Am I from Washington?').toLowerCase();

if(questionFour === 'y' || questionFour === 'yes'){
  alert('Incorrect, I am actually from New York!');
} else if(questionFour === 'n' || questionFour === 'no'){
  alert('Youre correct! I am actually from New York!');
  score++;
}



let userGuess = +prompt('Lets play a game! Guess what Number I am thinking of! 1-25, you get 4 chances!');

let myNum = 23;
let totalGuesses = 4;
let foundNum = false;

// if(userGuess === 23){23
//   foundNum = true;

// }
while(foundNum === false && totalGuesses > 0 ){

  if(userGuess === myNum){
    foundNum = true;
    score++;
    alert(`Correct ${userName}! ${userGuess} was the right answer!`);
  }
  else if(userGuess > myNum){
    userGuess = +prompt(`${userGuess} is too high! Please try again!`);
    totalGuesses--;
  }
  else if(userGuess < myNum){
    userGuess = +prompt(`${userGuess} is too low! Please try again!`);
    totalGuesses--;
  }
  totalGuesses--;
}
if(foundNum === false){
  alert(`Sorry ${userName}, you are out of guesses. The correct answer was ${myNum} !`);
}

let gamesGuess = prompt('What is a game that I play?').toLowerCase();

let answers = ['Valorant', 'League of Legends', 'LoL', 'Apex Legends', 'Apex', 'Osu'];
let gameGuesses = 0;

while(gameGuesses < 6 ){

  for(let i = 0; i < answers.length; i++){
    if(gamesGuess === answers[i]){
      score++;
      alert('Correct! I play Valorant, League of Legends, Osu and Apex Legends sometimes!');
      gameGuesses = 6;
      i = 6;
    }
    else if(gamesGuess !== answers[i]){
      gamesGuess = prompt('Sorry, that is not a game I play. Please try again!').toLowerCase();
      gameGuesses++;
    }
  }
  alert(`Sorry for the tough questions ${userName} I play Valorant, League of Legends, Osu and Apex Legends!`);
}

let questionFive = prompt('Final question, did you enjoy my quiz?').toLowerCase();

if(questionFive === 'y' || questionFive === 'yes'){
  alert('Great! I am happy you enjoyed it, thank you for stopping by my page!');
  score++;
} else if(questionFive === 'n' || questionFive === 'no'){
  alert('I am sorry to hear that, I hope you enjoy by page otherwise!');
}
alert(`Thanks for taking my brief quiz ${userName}! Here is your score! ${score}/7`);
