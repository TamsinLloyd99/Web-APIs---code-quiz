
//function to lead to highscores after pressing submit button
var highScoreEL = document.getElementById('highscores');

function goToHighScores(){
    var highScores = localStorage.getItem('highScores');
    for (let i = 0; i < highScores.length; i++) {
        const hS = highScores[i];
        var newScore = document.createElement ('li');
        li.textContent = hS;
        highScoreEL.appendChild(li);
    }

    // localStorage.getItem('highScores');
    //you are pulling an array.  In order to display an entire array you mush use a for loop.
}