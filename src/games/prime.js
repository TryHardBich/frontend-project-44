import readlineSync from 'readline-sync';
import { randomNum } from '../cli.js';
import { duplicates } from '../index.js';

const max = 50;
export const repeats = 3;
export const str = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (n) => {
    let isPrime = true;
    let i = 2;
    while (i <= Math.sqrt(n) && isPrime === true) {
      if (n % i === 0) {
        isPrime = false;
      }
      i += 1;
    }
    return isPrime ? 'yes' : 'no';
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
}
