
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

function rpsls(opponent) {

}
