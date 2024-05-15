import readlineSync from 'readline-sync';
import { randomNum } from '../cli.js';
import { duplicates } from '../index.js';

// config
const randMax = 100;
export const str = 'Answer "yes" if the number is even, otherwise answer "no".';
export const repeats = 3;

export function brainEven(name) {
  let [num, answer, correctAnswer] = [0, '', ''];
  num = randomNum(0, randMax);
  console.log(`Question: ${num}`);
  answer = readlineSync.question('Your answer: ');
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  duplicates(correctAnswer, answer, name);
  if (correctAnswer !== answer) {
    return 0;
  }
  return 1;
}
