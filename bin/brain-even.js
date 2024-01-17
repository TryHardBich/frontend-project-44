import { Welcome, randomNum } from '../src/cli.js'
import readlineSync from 'readline-sync'

//config
const win = 3
const randMax = 100;

function brainEven(name) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let count = 0;
    let num = 0;
    let answer = '';
    let correctAnswer = '';
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