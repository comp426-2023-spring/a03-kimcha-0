#!/usr/bin/env node

//console.log(`rpsls-cli running`);


import minimist from "minimist";

const args = minimist(process.argv.slice(2));

function help() {
  console.log(`
    Usage: node-rps [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit

    Examples:
      node-rpsls        Return JSON with single player RPS result.
		        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
		        e.g. {"player":"rock","opponent":"Spock","result":"lose"}
  `);
}

function rules() {
  console.log(`
    Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
   
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock SMOOSHES Lizard
      - Lizard POISONS Spock
      - Spock SMASHES Scissors
      - Scissors DECAPITATES Lizard
      - Lizard EATS Paper
      - Paper DISPROVES Spock
      - Spock VAPORIZES Rock
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
      rpsls();
      process.exit(0);
    } catch (err) {
        if (err instanceof RangeError) {
          help();
          rules();
          process.exit(1);
        }
      }
} 
