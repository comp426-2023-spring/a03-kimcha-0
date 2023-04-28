#!/usr/bin/env node

import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2));

function help() {
  console.log(`
    Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit

    Examples:
      node-rps        Return JSON with single player RPS result.
		      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
		      e.g. {"player":"rock","opponent":"scissors","result":"win"}
  `);
}

function rules() {
  console.log(`
    Rules for Rock Paper Scissors:
   
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock CRUSHES Scissors
  `);
}

if (args.h || process.argv[process.argv.indexOf('--help')]) {
  help();
  process.exit(1);
} else if (args.r || process.argv[process.argv.indexOf('--rules')]) {
    rules();
    process.exit(1);
} else {
    try {
      console.log(JSON.stringify(rps(process.argv[2])));
      process.exit(0);
    } catch (err) {
        if (err instanceof RangeError) {
          help();
          rules();
          process.exit(1);
        }
      }
} 
