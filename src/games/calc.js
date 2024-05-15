import readlineSync from 'readline-sync';
import { randomNum } from '../cli.js';
import { duplicates } from '../index.js';

const operators = ['+', '-', '*'];
const max = 150;
const str = 'What is the result of the expression?';
const repeats = 3;
function brainCalc(name) {
  const [random1, random2] = [randomNum(0, max), randomNum(0, max)];
  const operator = randomNum(0, operators.length);
  console.log(`Question: ${random1} ${operators[operator]} ${random2}`);
  let correctAnswer = 0;
  switch (operator) {
    case 0:
      correctAnswer = random1 + random2;
      break;
    case 1:
      correctAnswer = random1 - random2;
      break;
    case 2:
      correctAnswer = random1 * random2;
      break;
    default:
      return 0;
  }
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  duplicates(correctAnswer, parseInt(answer, 10), name);
  if (correctAnswer !== answer) {
    return 0;
  }
  return 1;
}

export { brainCalc, repeats, str };
