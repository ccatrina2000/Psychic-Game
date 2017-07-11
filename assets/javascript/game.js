//Create visible variables
var wins = 0;
var loses = 0;
var guessesLeft = 9;
//var playerGuess = "";

//Letters in alphabet - available selection by computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
	"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
	"v", "w", "x", "y", "z"];


//Code for computer to generate random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

//Show which letters player has chosen so far
var alreadyGuessed = [];

//reset function - new computerGuess and guessesLeft is set to 9

function reset() {
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	guessesLeft = 9;
}

//Player enters first guess
document.onkeydown = function(event) {

	//display the key player pressed
		var playerGuess = event.key;
			alreadyGuessed.push(playerGuess);
			document.getElementById("guest").innerHTML = alreadyGuessed;

	//Player still has guesses left
	if (guessesLeft > 0) {
		guessesLeft = guessesLeft - 1;

		//update the counter for guessessLeft
		document.getElementById("guess").innerHTML = "Guesses Left:" + " " + guessesLeft;
	}

	//Player has no guesses left
	if (guessesLeft == 0) {
		loses = loses + 1;
		document.getElementById("loses").innerHTML = "Loses:" + " " + loses;
		guessesLeft = 9;
		alreadyGuessed = [];
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log(computerGuess);
	};


	//Player guesses right - wins
	if (playerGuess == computerGuess) {
		wins = wins + 1;
		document.getElementById("wins").innerHTML = "Wins:" + " " + wins;
		guessesLeft = 9;
		alreadyGuessed = [];
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log(computerGuess);
	};
}

	



	
	
	

