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
        answer: 0,
    },

    {
        question: "What's Captain Marvel's first name?",
        possible: ["Wanda", " Natasha ", " Pepper ", " Carol"],
        answer: 3,
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

let questionHTML = '';
//Iterates through object for questions and appends them to the start div
function startGame() {

    //goes through entire object
    questions.forEach(function (object) {

        //stores the question in this variable
        questionHTML = '<p>' + questions.question + '</p>';

        //goes through object answers,adds on to it with radio button, answer and a break...
        questions.possible.forEach(function (answer, i) {
            questionHTML += '<input type="radio" name="answer"'
            questionHTML += 'value="' + i + '">'
            questionHTML += answer + '<br>'
        });

        //adds new variable data to start div
        $("#start").append(questionHTML);
    });


};

//Game Over function and end of timer
function setGameOver() {

    if (time === 0) {
        $("#start").empty();
        $("#start").append("You got " + " questions wrong."
            + "<br>" + "You got " + "questions correct."
            + "<br>" + "You didn't answer " + " questions.");
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





