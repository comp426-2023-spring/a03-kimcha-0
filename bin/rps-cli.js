#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2));

//console.log(args);

function rps() {
  const results = ["rock", "paper", "scissors"];
  return JSON.stringify({"player": results[Math.floor(Math.random() * results.length)]});
}

if (args.h) {
  try {
    console.log(`
      Usage: node-rps [SHOT]
      Play Rock Paper Scissors (RPS)
      
        -h, --help,	display this help message and exit
        -r, --rules,	display the rules and exit

      Examples:
        node-rps	Return JSON with single player RPS result.
			e.g. {"player": "rock"}
        node-rps rock	Return JSON with results for RPS played against a simulated opponent.
			e.g. {"player":"rock", "opponent": "scissors", "result": "win"}
    `); 
  } catch (err) {
      process.exit(1);
    }
} else if(args.r) {
    try {
      console.log(`
        Rules for Rock Paper Scissors:

          - Scissors CUTS Paper
          - Paper COVERS Rock
          - Rock CRUSHES Scissors
      `);
    } catch (err) {
        process.exit(1);
      }
} else {
    console.log(rps());
}
           

