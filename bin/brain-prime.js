#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { str, brainPrime, repeats } from '../src/games/prime.js';

gameStart(repeats, str, brainPrime);
