
var startButton = document.getElementById('start');
var newQuestionTitle = document.getElementById('question-title');

var choicesEl = document.getElementById('choices');
// var rightOrWrong = document.getElementById('wrongOrRight');
var timeEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var endScreenEl = document.getElementById('end-screen');

var timeInterval;
var questionIndex = 0;

var secondsTaken = 0;
startButton.addEventListener('click', startQuiz);

//hide visual intro div, unide question div and start clock and go to question function
function startQuiz() {
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

  questionsEl.removeAttribute('class');
  // hiddenStartScreen.forEach(function(element) {


  //code needed for timer to start on quiz start

  timerInterval = setInterval(function () {
    secondsTaken++;
    timeEl.textContent = secondsTaken;
  }, 1000);

  newQuestion();
  // currentQuestionsIndex++;
  //not changing to next question
}

//bring in questions and options and reuse function

function newQuestion() {
  var currentQuestion = questions[questionIndex];
  console.log(currentQuestion.question);
  newQuestionTitle.textContent = currentQuestion.question;

  choicesEl.innerHTML = "";

  // for (let i = 0; i < currentQuestion.choices.length; i++) {
  currentQuestion.choices.forEach(function (choice, i) {
    // var choice = currentQuestion.choices[i];
    var btnEl = document.createElement('button');
    btnEl.setAttribute('class', 'choice');
    btnEl.setAttribute('value', choice);

    btnEl.textContent = i + 1 + '. ' + choice;
//this need not to carry the data, just manually write out the data in next function
    btnEl.onclick = chosenAnswer;

    choicesEl.appendChild(btnEl);
  })

}

//function to check if the chosen answer is wrong, apply penalty
function chosenAnswer() {

 
//write the entire array path out -- this was the major issue with the code was carrying the data - the shortcut of the array
  if (this.value !== questions[questionIndex].answer) {
    console.log("wrong answer");
    // rightOrWrong.textContent = "Incorrect! Penalty Time Added! Try Again!";
    secondsTaken += 5;
    timeEl.textContent = secondsTaken;
    // return;
  } else {
    // rightOrWrong.textContent = "Correct!";
    console.log("correct");
  }

  questionIndex++;

  console.log(questionIndex);

  if (questionIndex === questions.length) {
    quizEnd();
    // console.log("end of game");
  } else {
    console.log("still going");
    newQuestion();
  }
}

var highScores;

//Display the final score and allow the user to save their initials and score
function quizEnd() {

  console.log("you have reached the quizEnd function!")
  //stop the timer by applying clearInterval and update time on the DOM
  //hide current screen and unhide the score screen

}


//event lisener for the input of initials button

//display score and getItem and setItem of LS
function highScore() {
  //on quiz end, store time and initials in local storage
  //addEventListener('click', submit)
  // var newHighScore = localStorage.setItem('highScores', JSON.stringify(highScores));

  //get the value of the input box
  //set a rule that if input box is not an empty string, withing the rule/conditional the logic should be as follows
  //create a variable that will getItem of LS or be an empty array -- what this does it defines the variable as an array
  //why the getItem first, well if the user uses the app over an over again, LS builds up the scores, and there fore LS is not empty, and the code is requiring getItem to be pulled and will be getting it to display.

  //dealing with new scores, create an object that will temporarily take in the values in an objet format of score/time and initials/initials
  //grab the array variable and take the object info and push it into the array.

  //Array will now store each index asn an object array, the array will have an object index with two key pair values - score and initials and its values from the input of the user.

  //setup local storage to setItem to send the data of the object array to LS.

  //at this point you can redirect the page to highscores page html by method of location.href.

}