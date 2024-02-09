const triviaData = [
    {
        "question": "In which city did Kareem Abdul-Jabbar break Wilt Chamberlain's record for most career points in NBA History?",
        "rightAnswer": "Las Vegas",
        "wrongAnswer1": "New York City",
        "wrongAnswer2": "Los Angeles",
        "wrongAnswer3": "Chicago",
    },
    {
        "question": "Laker head coach Phil Jackson retired as a player with the New Jersey Nets in 1980. Which other team did he play for in his career?",
        "rightAnswer": "New York Knicks",
        "wrongAnswer1": "San Antonio Spurs",
        "wrongAnswer2": "Los Angeles Clippers",
        "wrongAnswer3": "Charlotte Hornets",
    }
];


function getTriviaData() {
    let triviaQuestion = triviaData[0].question;
    let triviaAnswer = triviaData[0].rightAnswer;
    console.log(triviaQuestion, triviaAnswer);

    function displayTriviaData() {
    document.getElementById("trivia-section").textContent = triviaData[0].question;
    //    console.log(question);
    }

    displayTriviaData();
}

getTriviaData();


// function displayTriviaData() {
//     let addTriviaQuestion = document.createElement('div');
//     addTriviaQuestion.textContent(triviaQuestion);
//     document.getElementById("trivia-section").textContent = triviaData[0].question;
//     addTriviaQuestion.appendChild(triviaSection);
// };

// displayTriviaData();

