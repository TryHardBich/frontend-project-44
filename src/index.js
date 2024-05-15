import { Welcome } from './cli.js';

export const gameStart = (repeats, str, gameName) => {
  const name = Welcome();
  let correctCount = 0;
  console.log(str);
  while (correctCount < repeats) {
    if (gameName(name) === 1) {
      correctCount += 1;
    } else {
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 1;
};

export function duplicates(correctAnswer, answer, name) {
  if (correctAnswer === (answer)) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}!`);
    return 0;
  }
  return 0;
}

export function lose(answer, correctAnswer, name) {
  duplicates(correctAnswer, answer, name);
}
