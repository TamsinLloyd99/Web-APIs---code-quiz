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
    
        timerInterval = setInterval (function() {
        secondsTaken++;
        timeEl.textContent = secondsTaken; 
        },1000);
    
    newQuestion();
    }


//bring in questions and options and reuse function
function newQuestion (){
  var currentQuestion = questions[questionIndex];
  console.log(currentQuestion.question);
newQuestionTitle.textContent = currentQuestion.question;
//isn't showing up past first question

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
  //1.check if answer is wrong, update time - add penalty
  //2. questionIndex ++
  //3. if you've gone over 100sec or is question Index = question array
  //if you are out of questions -- end of game, if not go to next question
  //}


  
        
//currently displaying incorrect but not letting player resubmit
// Inside the function, it checks if the correctAnswerIndex of the current question (referred to as question) is equal to the choiceIndex passed as an argument. If they are equal, it sets the text content of an element called rightOrWrong to "Correct!". 
// If the correctAnswerIndex and choiceIndex are not equal, it sets the text content of rightOrWrong to "Incorrect! Try Again!" and then returns from the function.



//Display the final score and allow the user to save their initials and score
function quizEnd (){
  console.log("you have reached the quizEnd function!") //added console log
  clearInterval(timerInterval);
  timeEl.textContent = secondsTaken;

questionsEl.setAttribute('class', 'hide');
endScreenEl.removeAttribute('class');
  //stop the timer by applying clearInterval and update time on the DOM
  //hide current screen and unhide the score screen

}

var initials;
//event listener for the input of initials button
sumbitEL.addEventListener('click', function(event){
  event.preventDefault();
  initials = initialsEL.value.trim();
  localStorage.setItem('initials', initials);

});



//display score and getItem and setItem of LS
function highScore() {
  
if (initials !== "") {
  var newHighScore = localStorage.getItem ('initials');
}
var tempData = {
  score: 100,
  time: 60,
  initials: 'AB'
};
tempData.push(newHighScore);
localStorage.setItem('tempdata', JSON.stringify(tempData));
window.location.href = 'highscores.html';

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

