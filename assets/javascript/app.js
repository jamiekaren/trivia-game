console.log("working...");


let tonySound = new Audio("assets/sounds/avengers02.mp3");

// set some variables for the timer, starts when button is clicked
//display timer on page
// Look at in-class activity to see how this was done again.
// How to save questions for trivia, by Objects or an array of objects?

let questions = [
{ 
    question: "Who is the strongest Avenger?",
    answer: "Hulk",
    radio_button: "",
},

{ 
    question: "What's Captain Marvel's first name?",
    answer: "Mary",
    radio_button: "",

},

]

userAnswer = "";

timerStart = 0;



//make an on-click function for the button 

$("#start-button").click(function () {
    tonySound.play();
    console.log('Avengers Assemble!');
    $("#start").empty();

//Need to start a timer, maybe append to Header div


//Need to add questions to this div    
    $("#start").html(questions)


});

function startGame {
    

};