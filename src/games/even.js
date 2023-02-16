#!/usr/bin/env node
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const currAnswer1 = 'yes';
const currAnswer2 = 'no';

const Even = (randNumber) => {
  if (randNumber % 2 === 0) {
    return currAnswer1;
  }
  if (randNumber % 2 !== 0) {
    return currAnswer2;
  }
};

const evenQuest = () => {
  const randNumber = Math.floor(Math.random() * 100);
  const quest = randNumber;
  const answer = Even(randNumber);
  return [quest, answer];
};

const gameEven = () => {
  startGame(description, evenQuest);
};
export default gameEven;
