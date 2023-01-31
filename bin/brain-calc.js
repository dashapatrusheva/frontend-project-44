#!/usr/bin/env node
import readlineSync from 'readline-sync';

import userName from '../src/cli.js';

const calcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.random();
    const number2 = Math.random();
    console.log('Question: ', (number1 * number2) || (number1 + number2) || (number1 - number2));
    const answerUser = readlineSync.question('Your answer: ');
    const checking = (number1 * number2) || (number1 + number2) || (number1 - number2);
    if (checking === true) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser !== checking);
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${opposite}'. /n Let's try again, ${userName}!`;
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calcGame;
