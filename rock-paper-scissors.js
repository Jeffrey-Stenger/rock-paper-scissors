const whichWeapon = ["Rock", "Paper", "Scissors"];	

//a function that creates the computer's choice
function computerPlay() { 											
	return whichWeapon[Math.floor(Math.random() * whichWeapon.length)];
}

//Adjust the user input so that first letter is capitalized and remaining letters are all lowercase.
function titleCase(anyString){  										
	return anyString[0].toUpperCase() + anyString.slice(1).toLowerCase();
  }

//const computerSelection = computerPlay(whichWeapon); //declare the computer's choice
function playerPlay(){
	let playerPrompt = prompt("Rock, Paper, or Scissors?"); //Ask the user to enter a choice.
	let playerSelection = titleCase(playerPrompt);
	return playerSelection;
}
 
//Function to compare the computer and user's choices and return an answer basis them.
function playRound(computerSelection, playerSelection) {
	if (computerSelection === "Rock" && playerSelection === "Rock") {
  		return "Draw.";
  	}
  	else if (computerSelection === "Rock" && playerSelection === "Paper") {
  		return "You win! Paper beats Rock.";
  	}
  	else if (computerSelection === "Rock" && playerSelection === "Scissors") {
  		return "You lose! Rock beats Scissors.";
  	}
  	else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
	  return "Draw";
  	}
  	else if (computerSelection === "Scissors" && playerSelection === "Paper") {
  		return "You lose! Scissors beat Paper.";
  	}
  	else if (computerSelection === "Scissors" && playerSelection === "Rock") {
  		return "You win! Rock beats Scissors.";
  	}
    else if (computerSelection === "Paper" && playerSelection === "Paper") {
    	return "Draw";
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
    	return "You lose. Paper beats Rock";
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    	return "You win! Scissors beat Paper!";
    }
    else {
    	return "Please try again and enter a valid option.";
    }
}

let playerScore = 0;
let computerScore = 0;

//Create a function which tallies the scores for 5 rounds of play.
function game() {
    for (let i = 0; i < 5; i++) {  
    let result = playRound(computerPlay(), playerPlay());
  	if (validOption(result)) {
	  if (!playerDraw(result) && playerWins(result)) {
		  playerScore++;
	  }
	  if (!playerDraw(result) && !playerWins(result)) {
		  computerScore++;
	  }  
  	}
	if (!validOption(result)) {
	  i--;
	}
	console.log(result, ` | Player:${playerScore}`,` | Computer:${computerScore}`);
  }
}

function playerWins(result) {
	if (result.slice(0,7) === "You win") {
		return true;
	}
	else if (result.slice(0,8) === "You lose") {
		return false;
	}
}

function playerDraw(result) {
	if (result.slice(0,4) === "Draw") {
		return true;
	}
}

function validOption(result) {
	if (result.slice(0,2) === "Pl") {
		return false;
	}
	else {
		return true;
	}
}


