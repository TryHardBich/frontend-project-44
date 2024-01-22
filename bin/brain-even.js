#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome, randomNum } from '../src/cli.js';
import { gameStart } from '../src/index.js';

// config
const win = 3;
const randMax = 100;

function brainEven(name) {
  let [num, answer, correctAnswer] = [0, '', ''];
  num = randomNum(0, randMax);
  console.log(`Question: ${num}`);
  answer = readlineSync.question('Your answer: ');
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  if (correctAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}`);
    return 0;
  }
  console.log(`Congratulations, ${name}`);
}

const gameName = brainEven;

const name = Welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameStart(name, gameName, win);
