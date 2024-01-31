#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome, randomNum } from '../src/cli.js';
import { duplicates, gameStart } from '../src/index.js';

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
  duplicates(correctAnswer, answer, name);
  if (correctAnswer !== answer) {
    return 0;
  }
  return 1;
}

const gameName = brainEven;

const name = Welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameStart(name, gameName, win);
