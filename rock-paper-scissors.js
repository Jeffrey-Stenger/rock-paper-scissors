const whichWeapon = ["Rock", "Paper", "Scissors"];

function computerPlay(whichWeapon) { 		//a function that creates the computer's choice
	return whichWeapon[Math.floor(Math.random() * whichWeapon.length)];
}

const computerSelection = computerPlay(whichWeapon); //declare the computer's choice

const playerPrompt = prompt("Rock, Paper, or Scissors?"); //Ask the user to enter a choice.

function titleCase(playerSelection){
  return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}

const playerSelection = titleCase(playerPrompt); //Adjust the user input so that first letter is capitalized and remaining letters are all lowercase.
 
//Function to compare the computer and user's choices and return an answer basis them.
function playRound(computerSelection, playerSelection) {
	if (computerSelection === "Rock" && playerSelection === "Rock") {
  		return console.log("Draw.");
  	}
  	else if (computerSelection === "Rock" && playerSelection === "Paper") {
  		return console.log("You win! Paper beats Rock.");
  	}
  	else if (computerSelection === "Rock" && playerSelection === "Scissors") {
  		return console.log("You lose! Rock beats Scissors.");
  	}
  	else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
	  return console.log("Draw");
  	}
  	else if (computerSelection === "Scissors" && playerSelection === "Paper") {
  		return console.log("You lose! Scissors beat Paper.");
  	}
  	else if (computerSelection === "Scissors" && playerSelection === "Rock") {
  		return console.log("You win! Rock beats Scissors.");
  	}
    else if (computerSelection === "Paper" && playerSelection === "Paper") {
    	return console.log("Draw");
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
    	return console.log("You lose. Paper beats Rock");
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    	return console.log("You win! Scissors beat Paper!");
    }
    else {
    	return console.log("Please try again and enter a valid option.");
    }
}

console.log(playRound(computerSelection, playerSelection));