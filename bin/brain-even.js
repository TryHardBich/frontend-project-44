#!/usr/bin/env node
import { Welcome, randomNum } from '../src/cli.js'
import readlineSync from 'readline-sync'

//config
const win = 3
const randMax = 100;

function brainEven(name) {
    let [count, num, answer, correctAnswer] = [0, 0, '', ''];
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (count < win) {
        num = randomNum(0, randMax);
        console.log(`Question: ${num}`);
        answer = readlineSync.question('Your answer: ');
        if (num % 2 === 0) {
            correctAnswer = 'yes';
        }
        else {             
            correctAnswer = 'no';
        }
        if (correctAnswer === answer) {
            count += 1;
            console.log('Correct!');
        }
        else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
            console.log(`Let's try again, ${name}`);
            return 0;
        }
    }
    console.log(`Congratulations, ${name}`);
}


const name = Welcome();
brainEven(name);