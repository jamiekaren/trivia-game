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
        radio_button: function () {
            this.forEach(function (object) {
                var radioBtn = $('<input type="radio" name="q1" />');
                $(radioBtn).append(object.possible);

            });

        },
    },

    {
        question: "What's Captain Marvel's first name?",
        possible: ["Wanda", " Natasha ", " Pepper ", " Carol"],
        answer: "Carol",
        radio_button: "",

    },

]

let right = [];
let wrong = [];
let none = [];


let time = 100;
//Need to start a timer, maybe append to Header div
function countDown() {
    time--;
    if (time > 0) {
        setTimeout(countDown, 500);
    }
    $("#counter").html("You have " + time + " seconds remaining left to answer.");
    console.log(time);
};


//Need to add questions to this div
function startGame() {
    questions.forEach(function (object) {


        $("#start").append(object.question + "<br>");
        console.log("These are your questions!");

        $("#start").append(object.possible + "<br>");
        // object.possible.forEach().prepend(radio_button);
        console.log("These are your answers!");
        // radio_button(object);

    });
    // });

};


//Game Over function and end of timer
function setGameOver() {
    
    if (countDown <= 0) {
        $("#start").empty();
        $("#start").append("You got " + wrong + " questions wrong."
            + "<br>" + "You got " + right + "questions correct."
            + "<br>" + "You didn't answer " + none + " questions."
        )
    };

    console.log("Game over!");

};
setGameOver();

//make an on-click function for the button 

$("#start-button").click(function () {
    tonySound.play();
    console.log('Avengers Assemble!');
    $("#start").empty();

    startGame();
    countDown();
    


});

