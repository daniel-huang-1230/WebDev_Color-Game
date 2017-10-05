var numberOfSquares = 6; 
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor; //initial picked color


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i =0; i<squares.length; i++){

		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length; i++){
	
		squares[i].style.backgroundColor = colors[i];
		
		squares[i].style.display = "block";
		
	}
	
});


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i<squares. length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

	messageDisplay.textContent = "";
});



for(var i=0; i<squares. length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//comapre color to pickedColor
		if(clickedColor === pickedColor){   //player has won
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			resetButton.textContent = "Play again?";
			h1.style.backgroundColor = clickedColor;

		}else{								//missed

			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

//randomly pick one color from the "colors" array
function pickColor(){
	//first generate a random number
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function changeColor(color){
	//loop thru all squares
	//change each color to match given color
	for(var i =0; i<colors.length; i++){

		squares[i].style.backgroundColor = color;

	}
}

function generateRandomColors(num){
	//make an array
	var arr= [];
	//add num random colors to array
	for(var i =0; i<num; i++){
		arr.push(randomColor());

	}

	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
