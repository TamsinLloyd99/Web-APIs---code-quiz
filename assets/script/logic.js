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

var choicesEl = document.getElementById('choices');
var timeEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var endScreenEl = document.getElementById('end-screen');
var sumbitEL = document.getElementById('submit');
var initialsEL = document.getElementById('initials');
var highScoreEL = document.getElementById('wrapper');
var olEL = document.getElementById('highscores');

var timeInterval;
var questionIndex = 0;

var secondsTaken = 0;
startButton.addEventListener('click', startQuiz);

//hide visual intro div, unide question div and start clock and go to question function
function startQuiz (){
  var startScreenEl =  document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

questionsEl.removeAttribute('class');

    
    //code needed for timer to start on quiz start
    
        timeInterval = setInterval (function() {
        secondsTaken++;
        timeEl.textContent = secondsTaken; 
        },1000);
    
    newQuestion();
    }


//bring in questions and options and reuse function
function newQuestion (){
  var currentQuestion = questions[questionIndex];
  
newQuestionTitle.textContent = questions[questionIndex].question;
//isn't showing up past first question
console.log(questions[questionIndex].question);

choicesEl.innerHTML = "";
  //commented out for loop
currentQuestion.choices.forEach(function (choice, i) {
  //commented out choice variable
  var btnEl = document.createElement('button');
  btnEl.setAttribute('class', 'choice');
  btnEl.setAttribute('value', choice);

  btnEl.textContent = i + 1 + '. ' + choice;
  btnEl.onclick = chosenAnswer;

  choicesEl.appendChild(btnEl);
})
}
//creates a button that selects chosen answer



//function to check if the chosen answer is wrong, apply penalty
function chosenAnswer (){
  //write the entire array path out -- this was the major issue with the code was carrying the data - the shortcut of the array
  // console.log(currentQuestion);
  // var correctAnswer = currentQuestion.answer;
  
  if (this.value !== questions[questionIndex].answer){
    //changed correctAnswer to questions[questionIndex].answer
    console.log("wrong answer");
    
    secondsTaken += 5;
    timeEl.textContent = secondsTaken; 
    
  }else{
    
    console.log("correct");
  }
  questionIndex++;
  console.log(questionIndex);
  if (questionIndex === questions.length) {
    quizEnd ();
   
    } else {
      console.log("still going");
    newQuestion();
    }
  }




//Display the final score and allow the user to save their initials and score
function quizEnd (){
  console.log("you have reached the quizEnd function!") //added console log
  clearInterval(timeInterval);
  endScreenEl.removeAttribute('class');
  var finalScore = document.getElementById('final-score');
  finalScore.textContent = secondsTaken;

questionsEl.setAttribute('class', 'hide');

  //stop the timer by applying clearInterval and update time on the DOM
  //hide current screen and unhide the score screen

}

var initials;
//event listener for the input of initials button
sumbitEL.addEventListener('click', function(){
  // event.preventDefault();
  initials = initialsEL.value.trim();
  if (initials !== "") {
    // var highScores = JSON.parse(window.localStorage.getItem('initials')) || [];
    var highScores = JSON.parse(window.localStorage.getItem('initial')) || [];
    
  }
  
   //added JSON.stringify to store initials);
  var tempData = {
    score: secondsTaken,
    initials: initials,
    };
  highScores.push(tempData);
  console.log(highScores);
  console.log(tempData);
  endScreenEl.setAttribute('class', 'hide');
  highScoreEL.removeAttribute('class');
  localStorage.setItem('initial', JSON.stringify(highScores));
  // window.location.href = 'highscores.html';
  highScores.sort(function(a,b){
    return b.score - a.score
})
for (let i = 0; i < highScores.length; i++) {
    // const hS = highScores[i];
    var newScore = document.createElement ('li');
    newScore.textContent = highScores[i].initials + ' - ' + highScores[i].score;
    
    olEL.appendChild(newScore);
    console.log(newScore);
}
  
});

function clearHighScores(){
  localStorage.removeItem('initial');
  console.log("cleared");
  window.location.reload(true);
}


//link clear highscore button to clear local storage
clearBtn.addEventListener ('click', clearHighScores); //function clearHighScores


