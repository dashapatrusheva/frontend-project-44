#!/usr/bin/env node
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const Gcb = (randNumber1, randNumber2) => {
  if (randNumber2 > randNumber1) {
    return String(Gcb(randNumber2, randNumber1));
  }
  if (!randNumber2) {
    return String(randNumber1);
  }
  return String(Gcb(randNumber2, randNumber1 % randNumber2));
};

const GcbQuest = () => {
  const randNumber1 = Math.floor(Math.random() * (100 - 1));
  const randNumber2 = Math.floor(Math.random() * (100 - 1));
  const quest = `${randNumber1} ${randNumber2}`;
  const corrAnswer = Gcb(randNumber1, randNumber2);
  return [quest, corrAnswer];
};

const gameGcb = () => {
  startGame(description, GcbQuest);
};
export default gameGcb;
