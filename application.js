var randomNumber = Math.floor(Math.random()*101);

//while loop
while(answer != randomNumber) {
// Now I need to have a prompt where the number will be entered
var answer = prompt("Pick a number from 1 to 100", randomNumber);

//if answer is higher than randomNumber
if(answer > randomNumber) {
    alert("hot");
    
//if else answer is lower than randomNumber
} else if(answer < randomNumber) {
    alert("cold");
    
//else it is the right answer
} else {
    alert("correct!");
}
}