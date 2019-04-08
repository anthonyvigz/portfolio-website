var y = Math.floor(Math.random() * 100 + 1);

var audioboy = new Audio('ding.mp3');

var guess = 1;

document.getElementById("submitguess").onclick = function() {

	var x = document.getElementById("guessField").value;
	if (x == y) {
		document.getElementById('alertedtext').style.color = "green";
		document.getElementById('alertedtext').innerHTML = "Holy shit! " + (x) + " is right!";
		document.getElementById('guesstotal').innerHTML = "...and it only took you " + guess + " guesses."
		play.audioboy();

	}
	else if(x > y && x <= 100){
		document.getElementById('alertedtext').style.color = "red";
		document.getElementById('alertedtext').innerHTML = (x) + " is wrong bitch! Guess lower!";
		guess++;
	}

	else if (x == "") {
		document.getElementById('alertedtext').style.color = "purple";
		document.getElementById('alertedtext').innerHTML = (x) + " You didn't even frigan guess!";
	}

	else if (x > 100) {
		document.getElementById('alertedtext').innerHTML = "...keep it under a hundo.";
		guess++;
	}

	else if (x < 0) {
		document.getElementById('alertedtext').innerHTML = "That's a negative number idiot.";
		guess++;
	}

	else if (x < y) {
		document.getElementById('alertedtext').style.color = "red";
		document.getElementById('alertedtext').innerHTML = (x) + " is wrong bitch! Guess higher!";
		guess++;
	}

	else {
		document.getElementById('alertedtext').innerHTML = "Guess a number please...";
	}
}