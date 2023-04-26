#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2));

//console.log(args);

function rps(opponent) {
  const results = ["rock", "paper", "scissors"];
  let player = results[Math.floor(Math.random() * results.length)];
  const opponent = opponent.toLowerCase();
  let result = "";

  if (opponent) {
    if (opponent === "rock") {
      if (player === "rock") {
        result = "tie";
      } else if (player == "scissors") {
          result = "win";
      } else {
          result = "lose";
      }
    } else if (opponent == "scissors") {
      if (player === "rock") {
        result = "lose";
      } else if (player == "scissors") {
          result = "tie";
      } else {
          result = "win";
      }
    } else if (opponent == "paper") {
      if (player === "rock") {
        result = "win";
      } else if (player == "scissors") {
          result = "lose";
      } else {
          result = "tie";
      }
    } else {
      
    } 
  } else {
    return JSON.stringify({
      "player": results[Math.floor(Math.random() * results.length)],
    });
  }
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
} else if (args.r) {
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
