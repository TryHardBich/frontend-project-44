#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { str, brainGCD, repeats } from '../src/games/gcd.js';

gameStart(repeats, str, brainGCD);
