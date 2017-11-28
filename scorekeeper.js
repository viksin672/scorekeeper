var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var display1 = document.querySelector("#display1");
var display2 = document.querySelector("#display2");
var numInput = document.querySelector("input");
var tplays = document.querySelector("#tplays");



var score2 = 0;
var score1 = 0;
var gameover = false;
var winningscore =5;

 
 
 numInput.addEventListener("change", function(){
 	tplays.textContent = numInput.value ;
 	 winningscore = Number(numInput.value);
 });


 p1Button.addEventListener("click", function(){
 
 if(!gameover){
 score1++;
 display1.textContent = score1; 

 if (score1 === winningscore) {
 	gameover = true;
  display1.classList.add("winner");
 }
 	}
 });

 p2Button.addEventListener("click", function(){
 
 if(!gameover){
 score2++;
 display2.textContent = score2; 

 if (score2 === winningscore) {
 	gameover = true;
 	display2.classList.add("winner");
 }
 	}
 });
 
 resetButton.addEventListener("click", function(){
 
 display1.textContent = 0;
  display2.textContent = 0;
  score2 = 0;
  score1 = 0;
  display1.classList.remove("winner");
  display2.classList.remove("winner");
  gameover = false;
  
 });

 