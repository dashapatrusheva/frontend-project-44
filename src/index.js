#!/usr/bin/env node
import readlineSync from 'readline-sync';

const rounds = 3;

const startGame = (description, freshRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const result = `Congratulations, ${userName}!`;
  for (let i = 0; i < rounds; i += 1) {
    const [quest, corrAnswer] = freshRound();
    console.log(`Question: ${quest}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (corrAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.\nLet's try again, ${userName}!`);
      return freshRound;
    }
    console.log('Correct!');
  }
  console.log(result);
  return description;
};
export default startGame;
