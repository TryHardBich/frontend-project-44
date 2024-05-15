#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { repeats, brainCalc, str } from '../src/games/calc.js';

gameStart(repeats, str, brainCalc);
