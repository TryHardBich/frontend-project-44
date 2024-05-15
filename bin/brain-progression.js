#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { string, brainProgression, repeats } from '../src/games/progression.js';

gameStart(repeats, string, brainProgression);
