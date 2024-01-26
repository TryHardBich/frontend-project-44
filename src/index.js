export function gameStart(name, gameName, repeats) {
  let count = 0;
  while (count < repeats) {
    if (gameName(name) === 0) return 0;
    count += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
export function duplicates(correctAnswer, answer, name) {
  if (correctAnswer === (answer)) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}!`);
    return 0;
  }
}
export function lose(answer, correctAnswer, name) {
  duplicates(correctAnswer, answer, name);
}
