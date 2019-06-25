console.log("working...");


let tonySound = new Audio("assets/sounds/avengers02.mp3");

// set some variables for the timer, starts when button is clicked
//display timer on page
// Look at in-class activity to see how this was done again.
// How to save questions for trivia, by Objects or an array of objects?

let questions = [
    {
        question: "Who is the strongest Avenger?",
        possible: ["Hulk", "Thor", "Black Widow", "Scarlet Witch"],
        answer: "Hulk",
        radio_button: "",
    },

    {
        question: "What's Captain Marvel's first name?",
        possible: ["Wanda", "Natasha", "Pepper", "Carol"],
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
        $("#start").html(object.question);
        $("#start").html(object.possible);
        possible.forEach().prepend(radio_button);
    });
};

let t = 100;


//Game Over function
function gameOver() {
    if (t <= 0) {
        $("#start").empty();
        $("#start").text("You got " + wrong + " questions wrong."
            + "<br>" + "You got " + right + "questions correct."
            + "<br>" + "You didn't answer " + none + " questions."
        )
    };

};



//make an on-click function for the button 

$("#start-button").click(function () {
    tonySound.play();
    console.log('Avengers Assemble!');
    $("#start").empty();

    setTimeout(countDown, 1000);

    function countDown() {
        t--;
        if (t > 0) {
            setTimeout(countDown, 1000);
        }
        $("#counter").html("You have " + t + " remaining seconds left to answer.");
        console.log(t);


    };







});

