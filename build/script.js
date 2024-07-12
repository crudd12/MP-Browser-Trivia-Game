"use strict";
var triviaData = [
    {
        question: "In which city did Kareem Abdul-Jabbar break Wilt Chamberlain's record for most career points in NBA History?",
        answers: {
            a: "New York City",
            b: "Los Angeles",
            c: "Chicago",
            rightAnswer: "Las Vegas",
        },
    },
    {
        question: "Laker head coach Phil Jackson retired as a player with the New Jersey Nets in 1980. Which other team did he play for in his career?",
        answers: {
            a: "San Antonio Spurs",
            b: "Los Angeles Clippers",
            c: "Charlotte Hornets",
            rightAnswer: "New York Knicks",
        },
    },
    {
        question: "The Lakers acquired forward Lamar Odom in the trade for Shaquille O'Neal. Which team did Odom come from?",
        answers: {
            a: "LA Clippers",
            b: "Cleveland Cavaliers",
            c: "Detroit Pistons",
            rightAnswer: "Miami Heat",
        },
    },
    {
        question: "What school did Laker Rick Fox attend?",
        answers: {
            a: "Clemson",
            b: "Duke",
            c: "Syracuse",
            rightAnswer: "UNC",
        },
    },
    {
        question: "The popular style of gameplay adapted by the Lakers that was ushered in by Magic Johnson was known as what?",
        answers: {
            a: "Gametime",
            b: "Playtime",
            c: "Wildtime",
            rightAnswer: "Showtime",
        },
    },
    {
        question: "Who is the Lakers' all-time leading scorer?",
        answers: {
            a: "Magic Johnson",
            b: "LeBron James",
            c: "Shaquille O'Neal",
            rightAnswer: "Kobe Bryant",
        },
    },
    {
        question: "Which team did Shaq score 61 points against in 2000?",
        answers: {
            a: "Dallas Mavericks",
            b: "Memphis Grizzlies",
            c: "Milwaukee Bucks",
            rightAnswer: "Los Angeles Clippers",
        },
    },
    {
        question: "At 6-9, Magic Johnson officially played what position?",
        answers: {
            a: "Small Forward",
            b: "Shooting Guard",
            c: "Center",
            rightAnswer: "Point Guard",
        },
    },
    {
        question: "Which Laker was famous for his \"skyhook\" shot?",
        answers: {
            a: "Pau Gasol",
            b: "Shaquille O'Neal",
            c: "Wilt Chamberlain",
            rightAnswer: "Kareem Abdul-Jabbar",
        },
    },
];
var lakersScore = 0;
var opponentsScore = 0;
function lakersGame() {
    var triviaQuestion = document.querySelector("#trivia-question");
    var optionA = document.querySelector("#Option-A");
    var optionB = document.querySelector("#Option-B");
    var optionC = document.querySelector("#Option-C");
    var rightAnswer = document.querySelector("#Option-RightAnswer");
    var questionButton = document.querySelector('#question-button');
    var i = 0;
    var lakersWinModal = document.querySelector('#lakers-win');
    var lakersLoseModal = document.querySelector('#lakers-lose');
    function setQuestion() {
        if (i < triviaData.length) {
            triviaQuestion.textContent = triviaData[i].question;
            optionA.textContent = triviaData[i].answers.a;
            optionB.textContent = triviaData[i].answers.b;
            optionC.textContent = triviaData[i].answers.c;
            rightAnswer.textContent = triviaData[i].answers.rightAnswer;
            var ol_1 = document.querySelector('#list-items');
            var shuffleList = Array.from(document.querySelectorAll('li'));
            shuffleList.sort(function () { return Math.random() - 0.5; });
            shuffleList.forEach(function (li) { return ol_1.appendChild(li); });
        }
    }
    function updateQuestion() {
        triviaQuestion.textContent = triviaData[i].question;
        optionA.textContent = triviaData[i].answers.a;
        optionB.textContent = triviaData[i].answers.b;
        optionC.textContent = triviaData[i].answers.c;
        rightAnswer.textContent = triviaData[i].answers.rightAnswer;
        console.log("Question updated:", triviaData[i].question);
        console.log("Options:", triviaData[i].answers);
        questionButton.addEventListener('click', function () {
            i = (i + 1) % triviaData.length;
            optionA.style.removeProperty('color');
            optionA.style.removeProperty('font-weight');
            optionB.style.removeProperty('color');
            optionB.style.removeProperty('font-weight');
            optionC.style.removeProperty('color');
            optionC.style.removeProperty('font-weight');
            rightAnswer.style.removeProperty('color');
            rightAnswer.style.removeProperty('font-weight');
            setQuestion();
        });
    }
    setQuestion();
    updateQuestion();
    function getScore() {
        optionA.addEventListener("click", function () {
            opponentsScore += 1;
            optionA.style.color = "red";
            optionA.style.fontWeight = "bolder";
            setTimeout(function () {
                document.querySelector("#lakers-Score").textContent = lakersScore.toString();
                document.querySelector("#opponents-Score").textContent = opponentsScore.toString();
            }, 0);
            getResults();
        });
        optionB.addEventListener("click", function () {
            opponentsScore += 1;
            optionB.style.color = "red";
            optionB.style.fontWeight = "bolder";
            setTimeout(function () {
                document.querySelector("#lakers-Score").textContent = lakersScore.toString();
                document.querySelector("#opponents-Score").textContent = opponentsScore.toString();
            }, 0);
            getResults();
        });
        optionC.addEventListener("click", function () {
            opponentsScore += 1;
            optionC.style.color = "red";
            optionC.style.fontWeight = "bolder";
            setTimeout(function () {
                document.querySelector("#lakers-Score").textContent = lakersScore.toString();
                document.querySelector("#opponents-Score").textContent = opponentsScore.toString();
            }, 0);
            getResults();
        });
        rightAnswer.addEventListener("click", function () {
            lakersScore += 1;
            rightAnswer.style.color = "green";
            rightAnswer.style.fontWeight = "bolder";
            setTimeout(function () {
                document.querySelector("#lakers-Score").textContent = lakersScore.toString();
                document.querySelector("#opponents-Score").textContent = opponentsScore.toString();
            }, 0);
            getResults();
        });
    }
    getScore();
    function getResults() {
        if (lakersScore === 5) {
            lakersWinModal.style.display = 'block';
            console.log("You win!");
        }
        else if (opponentsScore === 5) {
            lakersLoseModal.style.display = 'block';
            console.log("You lose!");
        }
        else {
            lakersLoseModal.style.display = 'none';
            lakersWinModal.style.display = 'none';
        }
    }
    getResults();
}
lakersGame();
