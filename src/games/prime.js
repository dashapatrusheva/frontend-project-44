#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const Prime = (item) => {
  if (item === 1) {
    return 'no';
  }
  if (item === 2) {
    return 'yes';
  }
  for (let i = 2; i < item; i += 1) {
    if (item % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const PrimeQuest = () => {
  const item = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  const quest = item;
  const answer = Prime(item);
  return [quest, answer];
};

const gamePrime = () => {
  startGame(description, PrimeQuest);
};
export default gamePrime;
