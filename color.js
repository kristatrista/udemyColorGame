var numSquares= 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var modeButtons= document.querySelectorAll(".mode");
reset();

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
};

function setupModeButtons(){
  //mode button handlers
for(i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    //ternary operater is the same as below if statement
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  });
};
}

function setupSquares(){
  for(i = 0; i < squares.length; i++){
      //add click listeners to squares
      squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again"
        changedColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    }
  }
}

function reset(){
  resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //generate all new Colors
  colors = generateRandomColors(numSquares);
    //pick new randomColor
  pickedColor = pickColor();
    //change color colorDisplay to match pidked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
    //change squares colors
    for(i = 0; i < squares.length; i++){
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      }else{
        squares[i].style.display = "none";
      }
      //add initial colors to squares
      squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});



var changedColors= function(color) {
   //loop through all the squares
   for(var i = 0; i < squares.length; i ++){
     squares[i].style.backgroundColor = color;
   }
   //change each color to given color
};

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
};

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random color to array
    for(i = 0; i < num ; i ++){
      //get random clor and push into array
      arr.push(randomColor())
    }
    //return that array
    return arr;
};

function randomColor(){
  // pick a red from 0 -255
  var r =  Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g =  Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b =  Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}
