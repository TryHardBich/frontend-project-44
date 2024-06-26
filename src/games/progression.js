import readlineSync from 'readline-sync';
import { randomNum } from '../cli.js';
import { duplicates } from '../index.js';

export const repeats = 3;
export const string = 'What number is missing in the progression?';

function progGen(start, len, step) {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(start + i * step);
  }
  return arr;
}

function secret(progression, index) {
  let str = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (index === i) {
      str += '.. ';
    } else {
      str += `${progression[i]} `;
    }
  }
  return str;
}

export function brainProgression(name) {
  const start = randomNum(0, 100);
  const len = randomNum(5, 15);
  const index = randomNum(0, len - 1);
  const step = randomNum(1, 10);
  const progression = progGen(start, len, step);
  console.log(`Question: ${secret(progression, index)}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  const correctAnswer = progression[index];
  duplicates(correctAnswer, answer, name);
  if (correctAnswer !== answer) {
    return 0;
  }
  return 1;
}
