#!/usr/bin/env node
import { Welcome, randomNum } from '../src/cli.js'
import readlineSync from 'readline-sync'
import { gameStart } from '../src/index.js'

const operators = ['+', '-', '*'];
const max = 150;
const repeats = 3;

function brainCalc(name) {
    const random1 = randomNum(0, max);
    const random2 = randomNum(0, max);
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
    if (correctAnswer === answer) {
        console.log('Correct!');
    }
    else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        console.log(`Let's try again, ${name}`);
        return 0;
    }
}

const gameName = brainCalc;

const name = Welcome();
console.log('What is the result of the expression?');
gameStart(name, gameName, repeats);