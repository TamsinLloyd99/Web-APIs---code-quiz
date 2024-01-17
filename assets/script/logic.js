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
// var newQuestion1 = document.getElementById('a');
// var newQuestion2 = document.getElementById('b');
// var newQuestion3 = document.getElementById('c');
// var newQuestion4 = document.getElementById('d');
var choicesEl = document.getElementById('choices');
var rightOrWrong = document.getElementById('wrongOrRight');
var timeEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var endScreenEl = document.getElementById('end-screen');
// const hiddenStartScreen = document.querySelectorAll('.hide0');
// const hiddenQuestions = document.querySelectorAll('.hide1');
// const hiddenEndQuiz = document.querySelectorAll('.hide2');
// const hiddenHighScores = document.querySelectorAll('.hide3');

var timeInterval;
var questionIndex = 0;

var secondsTaken = 0;
startButton.addEventListener('click', startQuiz);

//hide visual intro div, unide question div and start clock and go to question function
function startQuiz (){
  var startScreenEl =  document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

questionsEl.removeAttribute('class');
  // hiddenStartScreen.forEach(function(element) {
  //   element.style.display = 'none';
  // });
  // hiddenQuestions.forEach(function(element) {
  //   element.style.display = 'block';
  // });
    
    //code needed for timer to start on quiz start
    
        timerInterval = setInterval (function() {
        secondsTaken++;
        timeEl.textContent = secondsTaken; 
        },1000);
    
    newQuestion();
    // currentQuestionsIndex++;
    //not changing to next question
    }

//bring in questions and options and reuse function

function newQuestion (){
  var currentQuestion = questions[questionIndex];
  console.log(currentQuestion.question);
newQuestionTitle.textContent = currentQuestion.question;


// newQuestion1.textContent = currentQuestion.choices[0];
// newQuestion2.textContent = currentQuestion.choices[1];
// newQuestion3.textContent = currentQuestion.choices[2];
// newQuestion4.textContent = currentQuestion.choices[3];

choicesEl.innerHTML = "";
for (let i = 0; i < currentQuestion.choices.length; i++) {
  var choice = currentQuestion.choices[i];
  var btnEl = document.createElement('button');
  btnEl.setAttribute('class', 'choice');
  btnEl.setAttribute('value', choice);
  btnEl.textContent = i + 1 + '. ' + choice;
  btnEl.onclick = chosenAnswer(currentQuestion);
  choicesEl.appendChild(btnEl);
}
//creates a button that selects chosen answer
//does this effect the buttons already in the html?


// newQuestion1.addEventListener('click', function() {
//     chosenAnswer(currentQuestion, 0);
//   });
//   newQuestion2.addEventListener('click', function() {
//     chosenAnswer(currentQuestion, 1);
//   });
//   newQuestion3.addEventListener('click', function() {
//     chosenAnswer(currentQuestion, 2);
//   });
//   newQuestion4.addEventListener('click', function() {
//     chosenAnswer(currentQuestion, 3);
//   });
}



//function to check if the chosen answer is wrong, apply penalty
function chosenAnswer (currentQuestion){
  console.log(currentQuestion);
    //not sure if a for loop is needed here - console said i is not defined
  var correctAnswer = currentQuestion.answer;
  
  if (this.value !== correctAnswer){
    console.log("wrong answer");
    // rightOrWrong.textContent = "Incorrect! Penalty Time Added! Try Again!";
    secondsTaken += 5;
    timeEl.textContent = secondsTaken; 
    // return;
  }else{
    // rightOrWrong.textContent = "Correct!";
    console.log("correct");
  }
  questionIndex++;
  console.log(questionIndex);
  if (questionIndex === questions.length) {
    // quizEnd ();
    console.log("end of game");
    } else {
      console.log("still going");
    newQuestion();
    }
  }
  //1.check if answer is wrong, update time - add penalty
  //2. questionIndex ++
  //3. if you've gone over 100sec or is question Index = question array
  //if you are out of questions -- end of game, if not go to next question
  //}


        // while (question.correctAnswerIndex !== choiceIndex){
        // rightOrWrong.textContent = "Incorrect! Try Again!";
        // return;
        // }
        // rightOrWrong.textContent = "Correct!";  
        // currentQuestionIndex++;
        // newQuestion(currentQuestionsIndex);
  
        
//currently displaying incorrect but not letting player resubmit
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

