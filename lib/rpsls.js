export {rps, rpsls};


function rps(shot) {
  let result = "";
  shot = shot.toLowerCase();
  const play = ["rock", "paper", "scissors"];
  let opp = play[Math.floor(Math.random()*play.length)];
  if (shot) {
    if (shot === "rock") {
      switch(opp) {
       case "rock":
         result = "tie";
         break;
       case "paper":
         result = "lose";
         break;
       case "scissors":
         result = "win";
         break;
      }
    } else if (shot === "paper") {
      switch(opp) {
        case "rock":
          result = "win";
          break;
        case "paper":
          result = "tie";
          break;
        case "scissors":
          result = "lose";
          break;
      } 
    } else if (shot === "scissors") {
      switch(opp) {
        case "rock":
          result = "lose";
          break;
        case "paper":
          result = "win";
          break;
        case "scissors":
          result = "tie";
          break;
      } 
    }
    return {"player": shot, "opponent": opp, "result": result}; 
  } else {
    return {"player": opp};
  }
}

function rpsls(shot) {

}
