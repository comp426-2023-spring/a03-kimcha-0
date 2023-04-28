export {rps, rpsls};


function rps(shot) {
  let result = null;
  const play = ["rock", "paper", "scissors"];
  let opp = play[Math.floor(Math.random()*play.length)];
  if (shot) {
    shot = shot.toLowerCase();
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
    } else {
      throw new RangeError("Shot is out of range");
    }
    return {"player": shot, "opponent": opp, "result": result}; 
  } else if (shot == undefined) {
    return {"player": opp};
  }
}

function rpsls(shot) {
  let result = null;
  const play = ["rock", "paper", "scissors", "spock", "lizard"];
  let opp = play[Math.floor(Math.random()*play.length)];
  if (shot) {
    shot = shot.toLowerCase();
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
       case "lizard":
         result = "win";
       case "spock":
         result = "lose";
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
       case "lizard":
         result = "lose";
       case "spock":
         result = "win";
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
       case "lizard":
         result = "win";
       case "spock":
         result = "lose";
      } 
    } else if (shot === "spock") {
      switch(opp) {
        case "rock":
          result = "win";
          break;
        case "paper":
          result = "lose";
          break;
        case "scissors":
          result = "win";
          break;
       case "lizard":
         result = "lose";
       case "spock":
         result = "tie";
      } 
    } else if (shot === "lizard") {
      switch(opp) {
        case "rock":
          result = "win";
          break;
        case "paper":
          result = "win";
          break;
        case "scissors":
          result = "win";
          break;
       case "lizard":
         result = "tie";
       case "spock":
         result = "win";
      } 
    } else {
      throw new RangeError("Shot is out of range");
    }
    return {"player": shot, "opponent": opp, "result": result}; 
  } else if (shot == undefined) {
    return {"player": opp};
  }
}

