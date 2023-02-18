#!/usr/bin/env node
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const actions = ['+', '-', '*'];

const Calc = (action, randNumber1, randNumber2) => {
  if (action === actions[1]) {
    const result2 = String(randNumber1 - randNumber2);
    return result2;
  }
  if (action === actions[2]) {
    const result3 = String(randNumber1 * randNumber2);
    return result3;
  }
  return String(randNumber1 + randNumber2);
};

const CalcQuest = () => {
  const randNumber1 = Math.floor(Math.random() * 10);
  const randNumber2 = Math.floor(Math.random() * 10);
  const action = actions[Math.floor(Math.random() * 3)];
  const quest = `${randNumber1} ${action} ${randNumber2}`;
  const answer = Calc(action, randNumber1, randNumber2);
  return [quest, answer];
};

const calcGame = () => {
  startGame(description, CalcQuest);
};
export default calcGame;
