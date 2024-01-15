//1.Timer to start from 75 when start quiz button is pressed
//2.start quiz button to lead to first question
//3.Text must change, clickable boxes must appear
//4.On selection of answer, correct or incorrect must be displayed
//5.Each question to lead to next question
//6.End game reference html div #end-screen
//7.Submit takes player to highscores page
//8.If start again is pressed, timer to go back to 75


var timeEl = document.querySelector(".timer");
var secondsLeft = 0;
//function needed for timer to start on quiz start and log time taken to complete quiz
var timerInterval = setInterval (function() {
secondsLeft++;
timeEl.textContent = secondsLeft; 

if (secondsLeft === 0) {
    clearInterval(timerInterval)
    
}
},1000)


//function to manage the next and previous button
function buttonsManager (){
    if (secondsLeft>0){
        secondsLeft = 0
    }
}






//function needed to say whether answer is correct or false
function rightOrWrong() {

}

//function needed to store answers
function storeAnswers() {

}


//code needed to replace button text with link to highscores.html
//addEventListener('click',)
