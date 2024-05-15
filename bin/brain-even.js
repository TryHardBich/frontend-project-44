#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { str, brainEven, repeats } from '../src/games/even.js';

gameStart(repeats, str, brainEven);
