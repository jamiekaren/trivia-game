console.log("working...");


let tonySound = new Audio("assets/sounds/avengers02.mp3");

// set some variables for the timer, starts when button is clicked
//display timer on page
// Look at in-class activity to see how this was done again.
// How to save questions for trivia, by Objects or an array of objects?

let questions = [
    {
        question: "Who is the strongest Avenger?",
        possible: ["Hulk", " Thor ", " Black Widow ", " Scarlet Witch"],
        answer: "Hulk",     
    },

    {
        question: "What's Captain Marvel's first name?",
        possible: ["Wanda", " Natasha ", " Pepper ", " Carol"],
        answer: "Carol",
    },

]

let answers = [];
let correct = 0;
let wrong = 0;
let blank = 0;

//setting time variable to 30 seconds...
let time = 30;


//A countdown function...
// If timer is greater than 0, run countdown where time - 1, sets a timeout of 500 milliseconds?? 
// GameOver works when set in countdown under time!


function countDown() {
  
    if (time > 0) {
        setTimeout(countDown, 500);
    }
    setGameOver();
    time--;

    $("#counter").html("You have " + time + " seconds remaining left to answer.");
    console.log(time);
};





//Iterates through object for questions and appends them to the start div
function startGame() {
    questions.forEach(function (object) {
        $("#start").append(object.question + "<p>" + object.possible + "</p>");
    });

};

//Game Over function and end of timer
function setGameOver() {

    if (time === 0) {
        $("#start").empty();
        $("#start").append("You got " + " questions wrong."
            + "<br>" + "You got " + "questions correct."
            + "<br>" + "You didn't answer " +  " questions.");
            console.log("Game over!");
        
    };

    

};

//make an on-click function for the button 

$("#start-button").click(function () {
    tonySound.play();
    console.log('Avengers Assemble!');
    $("#start").empty();

    startGame();
    countDown();



});
// function setUserAnswers() {
//     let input = $("#question-input").val().trim();

//     answers.push(input);

//     if (answers == questions.answer) {
//         right++;
//     }
//     else if (answers != questions.answer) {
//         wrong++;
//     }

// };




