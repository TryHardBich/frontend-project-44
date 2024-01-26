#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';
import { gameStart, lose } from '../src/index.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

const genRandom = () => Math.floor(Math.random() * 100) + 1;
function brainGCD(name) {
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
const gameName = brainGCD;
const name = Welcome();
console.log('Find the greatest common divisor of given numbers.');
gameStart(name, gameName, 3);
