import readlineSync from 'readline-sync';
import { lose } from '../index.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

export const repeats = 3;
export const str = 'Find the greatest common divisor of given numbers.';

const genRandom = () => Math.floor(Math.random() * 100) + 1;
export function brainGCD(name) {
  const number1 = genRandom();
  const number2 = genRandom();
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = gcd(number1, number2).toString();
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  lose(answer, correctAnswer, name);
  return 0;
}
