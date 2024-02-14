const triviaData = [
    {
        question:
            "In which city did Kareem Abdul-Jabbar break Wilt Chamberlain's record for most career points in NBA History?",
        answers: {
            a: "New York City",
            rightAnswer: "Las Vegas",
            b: "Los Angeles",
            c: "Chicago",
        },
    },
    {
        question:
            "Laker head coach Phil Jackson retired as a player with the New Jersey Nets in 1980. Which other team did he play for in his career?",
        answers: {
            a: "San Antonio Spurs",
            b: "Los Angeles Clippers",
            c: "Charlotte Hornets",
            rightAnswer: "New York Knicks",
        },
    },
];

function lakersGame() {
    let triviaQuestion = document.querySelector("#trivia-question");
    let optionA = document.querySelector("#Option-A");
    let optionB = document.querySelector("#Option-B");
    let optionC = document.querySelector("#Option-C");
    let rightAnswer = document.querySelector("#Option-RightAnswer");
    let questionButton = document.querySelector('#question-button');
    let i = 0;


    //pushes trivia questions and answers
    // for (i = 0; i < triviaData.length; i++) {
    function updateQuestion() {
        triviaQuestion.textContent = triviaData[i].question;
        optionA.textContent = triviaData[i].answers.a;
        optionB.textContent = triviaData[i].answers.b;
        optionC.textContent = triviaData[i].answers.c;
        rightAnswer.textContent = triviaData[i].answers.rightAnswer;

        let ul = document.querySelector('#list-items');
        let shuffleList = document.querySelectorAll('li');
        for (let a = 0; a < shuffleList.length -1; a++) {
            ul.appendChild(shuffleList[a]);
        }

        questionButton.addEventListener('click', () => {
            i += 1;
            optionA.style.removeProperty('color');
            optionA.style.removeProperty('font-weight');
            optionB.style.removeProperty('color');
            optionB.style.removeProperty('font-weight');
            optionC.style.removeProperty('color');
            optionC.style.removeProperty('font-weight');
            rightAnswer.style.removeProperty('color');
            rightAnswer.style.removeProperty('font-weight');
            updateQuestion();
        })
    }

    updateQuestion();

    function getScore() {
        let lakersScore = 0;
        let opponentsScore = 0;

        optionA.addEventListener("click", () => {
            opponentsScore += 1;
            optionA.style.color = "red";
            optionA.style.fontWeight = "bolder";
            console.log(opponentsScore);

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 250);
        });

        optionB.addEventListener("click", () => {
            opponentsScore += 1;
            optionB.style.color = "red";
            optionB.style.fontWeight = "bolder";
            console.log(opponentsScore);

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 250);
        });

        optionC.addEventListener("click", () => {
            opponentsScore += 1;
            optionC.style.color = "red";
            optionC.style.fontWeight = "bolder";
            console.log(opponentsScore);

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 250);
        });

        rightAnswer.addEventListener("click", () => {
            lakersScore += 1;
            rightAnswer.style.color = "green";
            rightAnswer.style.fontWeight = "bolder";
            console.log(lakersScore);

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 250);
        });

        // if (lakersScore = 2) {

        // }
    }

    getScore();
}

lakersGame();




// function displayScore() {
//     document.querySelector('#lakers-Score').textContent = lakersScore;
//     document.querySelector('#opponents-Score').textContent = opponentsScore;
// }

// displayScore();

// function displayTriviaData() {
//     let addTriviaQuestion = document.createElement('div');
//     addTriviaQuestion.textContent(triviaQuestion);
//     document.getElementById("trivia-section").textContent = triviaData[0].question;
//     addTriviaQuestion.appendChild(triviaSection);
// };

// displayTriviaData();

// document.querySelector('#trivia-section').textContent = triviaQuestion;
// document.querySelector('#trivia-question').textContent = triviaQuestion;
// const triviaOptions = `${triviaData[0].rightAnswer}, ${triviaData[0].wrongAnswer1}, ${triviaData[0].wrongAnswer2}, ${triviaData[0].wrongAnswer3}`
// let triviaOptions = triviaData[0].wrongAnswers;
// console.log(triviaOptions);
// const ul = document.createElement('ul');
// triviaOptions.appendChild(ul);
// li.textContent = `${triviaData[0].rightAnswer}`;
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

// document.querySelector('#trivia-answers').textContent = triviaAnswers;
// let pushAnswers = document.querySelector('#trivia-answers');

// for (var i = 0; i < triviaData.length; i++) {

//     var item = triviaData[i].answers;

//     Object.keys(item).forEach(function(key) {

//       console.log(item[key]); // This will provide you the value for each key.

//     });

//   }

// let pushAnswers = document.querySelector('#trivia-answers');
// let li = document.createElement('li');
// li.textContent = triviaData[0].answers.a;
// pushAnswers.appendChild(li);

// function displayTriviaData() {
//     document.querySelector('#trivia-question').textContent = triviaQuestion;
//     // document.querySelector('#trivia-answers').textContent = triviaAnswers;
//     let triviaOptions = triviaData[0].wrongAnswers;
//     console.log(triviaOptions);
//     const ul = document.createElement('ul');
//     triviaOptions.appendChild(ul);
//     li.textContent = `${triviaData[0].rightAnswer}`;
//     // document.querySelector('#trivia-answers').textContent =

//     //     const triviaAnswers = document.querySelector('#trivia-answers');
//     //    const ul = document.createElement('ul');
//     //     triviaAnswers.appendChild(ul);
//     // li.textContent = `${triviaData[0].rightAnswer}`;
//     // for (let i=0; i < triviaData; i++ {
//     //     const answersList = triviaData[i];
//     //     const li = document.createElement('li');
//     //     li.textContent =
//     // })
//     // ul.appendChild(li);
//     // addTriviaQuestion.textContent(triviaQuestion);
//     // addTriviaQuestion.append(test);
//     // document.getElementById("trivia-section").textContent = triviaQuestion;
// }

// displayTriviaData();
