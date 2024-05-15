import readlineSync from 'readline-sync';
import { randomNum } from '../cli.js';
import { duplicates } from '../index.js';

const max = 50;
export const repeats = 3;
export const str = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line consistent-return
export const brainPrime = (name) => {
  const question = randomNum(1, max);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = prime(question) ? 'yes' : 'no';
  duplicates(correctAnswer, answer, name);
  if (correctAnswer !== answer) {
    return 0;
  }
  return 1;
};
