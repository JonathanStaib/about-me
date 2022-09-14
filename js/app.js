'use strict';

console.log('hellooo woorlldd');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName} ! I have a little quiz for you. Please guess yes or no to the following questions!`);

let questionOne = prompt('Do I have 2 dogs?').toLowerCase();

if(questionOne === 'n' || questionOne === 'no'){
  alert('Yes you are correct! ');
} else if(questionOne === 'y' || questionOne === 'yes'){
  alert('Sorry, I actually have 3!');
}

let questionTwo = prompt('is let a function').toLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('Yes you are correct, let is a function!');
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('Sorry, incorrect. Let actually is a function!');
}

let questionThree = prompt('Am I a human?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes'){
  alert('Incorrect! I am simply just a bot.');
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('Yes Correct, now I am curious if you are a bot as well...');
}

let questionFour = prompt('Am I from Washington?').toLowerCase();

if(questionFour === 'y' || questionFour === 'yes'){
  alert('Incorrect, I am actually from New York!');
} else if(questionFour === 'n' || questionFour === 'no'){
  alert('Youre correct! I am actually from New York!');
}

let questionFive = prompt('Final question, did you enjoy my quiz?').toLowerCase();

if(questionFive === 'y' || questionFive === 'yes'){
  alert('Great! I am happy you enjoyed it, thank you for stopping by my page!');
} else if(questionFive === 'n' || questionFive === 'no'){
  alert('I am sorry to hear that, I hope you enjoy by page otherwise!');
}
alert(`Thanks for taking my brief quiz ${userName}!`);
