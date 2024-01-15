//1.Timer to start from 75 when start quiz button is pressed
//2.start quiz button to lead to first question
//3.Text must change, clickable boxes must appear
//4.On selection of answer, correct or incorrect must be displayed
//5.Each question to lead to next question
//6.End game reference html div #end-screen
//7.Submit takes player to highscores page
//8.If start again is pressed, timer to go back to 75

var startButton = document.getElementById('start');
var newQuestionTitle =  document.getElementById('question-title');
var newQuestion1 = document.getElementById('a');
var newQuestion2 = document.getElementById('b');
var newQuestion3 = document.getElementById('c');
var newQuestion4 = document.getElementById('d');
var rightOrWrong = document.getElementById('wrongOrRight');






function fetchData() {
fetch('./assets/script/questions.js')
.then(response => response.text())
.then(data => {
    newQuestion(data, 0);
    chosenAnswer(data, 0);
    console.log(data);
})
.catch(err => {
    console.error(err);
});
}
//questions array has been fetched from questions.js

startButton.addEventListener('click', () => {
    fetchData();
});


// Timer variables
var timeEl = document.querySelector(".timer");
var secondsLeft = 0;

//function needed for timer to start on quiz start and log time taken to complete quiz
var timerInterval = setInterval (function() {
secondsLeft++;
timeEl.textContent = secondsLeft; 

},1000)

//function needed to change questions
function newQuestion (data, i){
Event.preventDefault();
newQuestionTitle.textContent = data[i].title;
newQuestion1.textContent = (data[i].choices[0]);
newQuestion2.textContent = (data[i].choices[1]);
newQuestion3.textContent = (data[i].choices[2]);
newQuestion4.textContent = (data[i].choices[3]);
}


//function to check the chosen answer
function chosenAnswer (){
    for (let i = 0; i < questions.length; i++) {
        var answer = document.getElementById('choices').children;
        if (answer[i].innerHTML === questions[i].answer) {
        rightOrWrong.textContent = "Correct!";  
        } else {
        rightOrWrong.textContent = "Incorrect! Try Again!";
        return;
        }
}
}





//function needed to say whether answer is correct or false
//if answer is wrong, player cannot continue until they answer correctly




//function needed to store time
function storeTime() {

}


//code needed to replace button text with link to highscores.html
//addEventListener('click',)
