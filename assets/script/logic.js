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
var timeEl = document.getElementsByClassName('timer');




startButton.addEventListener('click', startQuiz);

function startQuiz (){
    //code needed for timer to start on quiz start
    var timeInterval;
    var currentQuestionsIndex = 0;
    
    var secondsTaken = 0;
    var timerInterval = setInterval (function() {
        secondsTaken++;
        timeEl.textContent = secondsTaken; 
        
        },1000)
    
    newQuestion(currentQuestionsIndex);
    }


//function needed to change questions
function newQuestion (questionIndex){
var currentQuestion = questions[questionIndex];
newQuestionTitle.textContent = currentQuestion.title;
newQuestion1.textContent = currentQuestion.choices[0];
newQuestion2.textContent = currentQuestion.choices[1];
newQuestion3.textContent = currentQuestion.choices[2];
newQuestion4.textContent = currentQuestion.choices[3];

newQuestion1.addEventListener('click', function() {
    chosenAnswer(currentQuestion, 0);
  });
  newQuestion2.addEventListener('click', function() {
    chosenAnswer(currentQuestion, 1);
  });
  newQuestion3.addEventListener('click', function() {
    chosenAnswer(currentQuestion, 2);
  });
  newQuestion4.addEventListener('click', function() {
    chosenAnswer(currentQuestion, 3);
  });
}



//function to check if the chosen answer matches the correct answer
function chosenAnswer (questions, choiceIndex){
        if (question.correctAnswerIndex === choiceIndex) {
        rightOrWrong.textContent = "Correct!";  
        } else {
        rightOrWrong.textContent = "Incorrect! Try Again!";
        return;
        }
}
// Inside the function, it checks if the correctAnswerIndex of the current question (referred to as question) is equal to the choiceIndex passed as an argument. If they are equal, it sets the text content of an element called rightOrWrong to "Correct!". 
// If the correctAnswerIndex and choiceIndex are not equal, it sets the text content of rightOrWrong to "Incorrect! Try Again!" and then returns from the function.




// var submitHighScore = document.getElementById('submit');
// var finalScore = document.getElementById('finalScore');
// var saveInitials = document.getElementById('initials');
var highScores;

function quizEnd (){
 //Display the final score and allow the user to save their initials and score
//get time from local storage
// highScore = secondsTaken;
// finalScore.textContent = highScore;

}



function highScore() {
//on quiz end, store time and initials in local storage
//addEventListener('click', submit)
// var newHighScore = localStorage.setItem('highScores', JSON.stringify(highScores));
}

