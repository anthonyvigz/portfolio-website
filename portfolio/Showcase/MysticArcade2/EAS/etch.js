const table = document.getElementById("table");
const reset = document.getElementById("reset");
const eraser = document.getElementById("erase");
const partybtn = document.getElementById("party");
const blackbtn = document.getElementById("black");

//calls the grid from submitting the form
document.getElementById("submit").addEventListener('click', () => {
	creategrid();
})


//this creates the grid
function creategrid() {
	
	table.innerHTML = "";
	var amount = document.getElementById("numberField").value;

	if (amount < 100) {
		for (let i = 0; i < amount; i++) {
			var rows = document.createElement('div');
			rows.className = "row";
      	rows.id = "row";
			table.appendChild(rows);

			for (let j = 0; j < amount; j++) {
				var cells = document.createElement('div');
				cells.className = "cell";
        cells.id = "cell"
				rows.appendChild(cells);
			}
		this.onclick = null;
		document.getElementById("howmany").textContent =  amount + " x " + amount + " grid!";
		}
	} else {
		document.getElementById("howmany").textContent = "Please pick a number 1-100"
	}
}

//this resets the grid
reset.addEventListener('click', () => {
	creategrid();
})

//this creates a random RGB color
function randomRGBcolor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}

//this is the mouseover event for each selected div in the grid
table.addEventListener('mouseover', function(e) {
  	if (partybtn.value == 'on') {
  		e.target.style.backgroundColor = randomRGBcolor();
  	} else if (blackbtn.value == 'on') {
  		e.target.style.backgroundColor = '#262626'
  	} else if (eraser.value == 'on') {
  		e.target.style.backgroundColor = '#ffffff30'
  	} else {
  		e.target.style.backgroundColor = 'purple'
  	}
 })

blackbtn.addEventListener('click', function() {
	if (black.value == 'off') {
		blackbtn.setAttribute('value', 'on');
   		partybtn.setAttribute('value', 'off');
    	blackbtn.style.background = '#8accc8';
    	partybtn.style.background = '#262626';
    	eraser.style.background = '#262626';
	} else {
		blackbtn.setAttribute('value', 'off');
    	blackbtn.style.background = '#262626';
	}
})

partybtn.addEventListener('click', function() {
	if (partybtn.value == 'off') {
		partybtn.setAttribute('value', 'on');
    blackbtn.setAttribute('value', 'off');
    partybtn.style.background = '#8accc8';
    blackbtn.style.background = '#262626';
    eraser.style.background = '#262626';
	} else {
		partybtn.setAttribute('value', 'off');
    partybtn.style.background = '#262626';
	}
})

eraser.addEventListener('click', function() {
	if (eraser.value == 'off') {
		eraser.setAttribute('value', 'on');
		blackbtn.setAttribute('value', 'off');
		blackbtn.style.background = '#262626';
		partybtn.style.background = '#262626';
		partybtn.setAttribute('value', 'off');
		eraser.style.background = 'purple';
	} else {
		eraser.setAttribute('value', 'off');
	}
})