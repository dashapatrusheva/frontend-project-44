#!/usr/bin/env node
/* eslint-disable no-plusplus */
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const Prog = (arr, num1, num2) => {
  if (String(arr[num1]) === String(arr[0])) {
    return String(arr[1] - num2);
  }
  if (String(arr[num1]) === String(arr[arr.length - 1])) {
    return String(arr[arr.length - 2] + num2);
  }
  if (String(arr[num1 + 1] - arr[num1 - 1]) === String(num2 * 2)) {
    return String(arr[num1 - 1] + num2);
  }
};

const isProg = () => {
  const num2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  const arr1 = [];
  const start = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  for (let i = 0; i < length; i += 1) {
    arr1[i] = start + i * num2;
  }
  const num1 = Math.floor(Math.random() * length);
  const arr = arr1;
  arr[num1] = '..';
  const quest = arr.join(' ');
  const answer = Prog(arr, num1, num2);
  return [quest, answer];
};

const gameProgression = () => {
  startGame(description, isProg);
};
export default gameProgression;
