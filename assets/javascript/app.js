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
        radio_button: function radio (){
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

//Need to start a timer, maybe append to Header div


//Need to add questions to this div
function startGame() {
    questions.forEach(function (object) {
        
        // for (let q = 0; q < questions.length; q++) {
        $("#start").append(object.question + "<br>");
        console.log("These are your questions!");

        $("#start").append(object.possible + "<br>");
        // object.possible.forEach().prepend(radio_button);
        console.log("These are your answers!");
        });
    // });


};

let t = 100;


//Game Over function and end of timer
function gameOver() {
    if (t <= 0) {
        $("#start").empty();
        $("#start").append("You got " + wrong + " questions wrong."
            + "<br>" + "You got " + right + "questions correct."
            + "<br>" + "You didn't answer " + none + " questions."
        )
    };

    console.log("Game over!");

};



//make an on-click function for the button 

$("#start-button").click(function () {
    tonySound.play();
    console.log('Avengers Assemble!');
    $("#start").empty();
    startGame();

    setTimeout(countDown, 1000);

    function countDown() {
        t--;
        if (t > 0) {
            setTimeout(countDown, 1000);
        }
        $("#counter").html("You have " + t + " seconds remaining left to answer.");
        console.log(t);
        gameOver();
    };
    
    startGame();
    

    



});

