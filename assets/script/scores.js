
//function to lead to highscores after pressing submit button
var highScoreEL = document.getElementById('highscores');
var clearBtn = document.getElementById('clear');

function goToHighScores(){
    var highScores = JSON.parse(localStorage.getItem('initials')) || [];
    highScores.sort(function(a,b){
        return b.score - a.score
    })
    for (let i = 0; i < highScores.length; i++) {
        const hS = highScores[i];
        var newScore = document.createElement ('li');
        newScore.textContent = hS;
        highScoreEL.appendChild(newScore);
    }

    // localStorage.getItem('highScores');
    //you are pulling an array.  In order to display an entire array you mush use a for loop.
}
function clearHighScores(){
    localStorage.removeItem('Initials');
    console.log("cleared");
    window.location.reload(true);
}


//link clear highscore button to clear local storage
clearBtn.addEventListener ('click', clearHighScores); //function clearHighScores