const triviaData = [
    {
        "question": "In which city did Kareem Abdul-Jabbar break Wilt Chamberlain's record for most career points in NBA History?",
        // "rightAnswer": "Las Vegas",
        "wrongAnswers":
        {
            a: "New York City",
            rightAnswer: 'Las Vegas',
            b: "Los Angeles",
            c: "Chicago"
        }
    },
    {
        "question": "Laker head coach Phil Jackson retired as a player with the New Jersey Nets in 1980. Which other team did he play for in his career?",
        // "rightAnswer": "New York Knicks",
        "wrongAnswers":
        {
            a: "San Antonio Spurs",
            b: "Los Angeles Clippers",
            c: "Charlotte Hornets",
            rightAnswer: 'New York Knicks'
        }
    }
];


function getTriviaData() {
    let triviaQuestion = triviaData[0].question;
    let triviaAnswer = triviaData[0].rightAnswer;
    console.log(triviaQuestion, triviaAnswer);

    function displayTriviaData() {
        // document.querySelector('#trivia-section').textContent = triviaQuestion;
        document.querySelector('#trivia-question').textContent = triviaQuestion;
        // const triviaOptions = `${triviaData[0].rightAnswer}, ${triviaData[0].wrongAnswer1}, ${triviaData[0].wrongAnswer2}, ${triviaData[0].wrongAnswer3}`
        let triviaOptions = triviaData[0].wrongAnswers;
        console.log(triviaOptions);
        const ul = document.createElement('ul');
        triviaOptions.appendChild(ul);
        li.textContent = `${triviaData[0].rightAnswer}`;
        // document.querySelector('#trivia-answers').textContent = 



        //     const triviaAnswers = document.querySelector('#trivia-answers');
        //    const ul = document.createElement('ul');
        //     triviaAnswers.appendChild(ul);
        // li.textContent = `${triviaData[0].rightAnswer}`;
        // for (let i=0; i < triviaData; i++ {
        //     const answersList = triviaData[i];
        //     const li = document.createElement('li');
        //     li.textContent = 
        // })
        // ul.appendChild(li);
        // addTriviaQuestion.textContent(triviaQuestion);
        // addTriviaQuestion.append(test);
        // document.getElementById("trivia-section").textContent = triviaQuestion;
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

