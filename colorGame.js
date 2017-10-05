var numberOfSquares = 6; 
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//add mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){

	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//now let's figure out how many squares to be shown
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
		
			//pick new color and update the page to reflect changes
			reset();
		});	
	}

}

function setupSquares(){
	for(var i=0; i<squares. length; i++){
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
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	
	h1.style.backgroundColor = "steelblue";

	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"; //make sure they are there (for 
			//the case when toggling back from easy to hard)
			squares[i].style.backgroundColor = colors[i];
		} else{

			//hide some squares when in easy mode
			squares[i].style.display = "none";
		}
		
	}

}



resetButton.addEventListener("click", function(){
	reset(); 
});





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
