const triviaData = [
    {
        question:
            "In which city did Kareem Abdul-Jabbar break Wilt Chamberlain's record for most career points in NBA History?",
        answers: {
            a: "New York City",
            b: "Los Angeles",
            c: "Chicago",
            rightAnswer: "Las Vegas",
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
    {
        question:
            "The Lakers acquired forward Lamar Odom in the trade for Shaquille O'Neal. Which team did Odom come from?",
        answers: {
            a: "LA Clippers",
            b: "Cleveland Cavaliers",
            c: "Detroit Pistons",
            rightAnswer: "Miami Heat",
        },
    },
    {
        question:
            "What school did Laker Rick Fox attend?",
        answers: {
            a: "Clemson",
            b: "Duke",
            c: "Syracuse",
            rightAnswer: "UNC",
        },
    },
    {
        question:
            "The popular style of game play adapted by the Lakers that was ushered in by Magic Johnson was known as what?",
        answers: {
            a: "Gametime",
            b: "Playtime",
            c: "Wildtime",
            rightAnswer: "Showtime",
        },
    },
    {
        question:
            "Who is the Lakers' all-time leading scorer?",
        answers: {
            a: "Magic Joshnson",
            b: "Lebron James",
            c: "Shaquille O'Neal",
            rightAnswer: "Kobe Bryant",
        },
    },
    {
        question:
            "Which team did Shaq score 61 points against in 2000?",
        answers: {
            a: "Dallas Mavericks",
            b: "Memphis Grizzlies",
            c: "Milwaukee Bucks",
            rightAnswer: "Los Angeles Clippers",
        },
    },
    {
        question:
            "At 6-9, Magic Johnson officially played what position?",
        answers: {
            a: "Small Forward",
            b: "Shooting Guard",
            c: "Center",
            rightAnswer: "Point Guard",
        },
    },
    {
        question:
            "Which Laker was famous for his \"skyhook\" shot?",
        answers: {
            a: "Pau Gasol",
            b: "Shaquille O'Neal",
            c: "Wilt Chamberlain",
            rightAnswer: "Kareem Abdul-Jabbar",
        },
    },
];


let lakersScore = 0;
let opponentsScore = 0;

function lakersGame() {
    let triviaQuestion = document.querySelector("#trivia-question");
    let optionA = document.querySelector("#Option-A");
    let optionB = document.querySelector("#Option-B");
    let optionC = document.querySelector("#Option-C");
    let rightAnswer = document.querySelector("#Option-RightAnswer");
    let questionButton = document.querySelector('#question-button');
    let i = 0;
    let lakersWinModal = document.querySelector('#lakers-win');
    let lakersLoseModal = document.querySelector('#lakers-lose');

    function setQuestion() {
        triviaQuestion.textContent = triviaData[i].question;
        optionA.textContent = triviaData[i].answers.a;
        optionB.textContent = triviaData[i].answers.b;
        optionC.textContent = triviaData[i].answers.c;
        rightAnswer.textContent = triviaData[i].answers.rightAnswer;

        let ol = document.querySelector('#list-items');
        let shuffleList = document.querySelectorAll('li');
        for (let a = 0; a < shuffleList.length - 1; a++) {
            ol.appendChild(shuffleList[a]);
        }
    }

    function updateQuestion() {
        triviaQuestion.textContent = triviaData[i].question;
        optionA.textContent = triviaData[i].answers.a;
        optionB.textContent = triviaData[i].answers.b;
        optionC.textContent = triviaData[i].answers.c;
        rightAnswer.textContent = triviaData[i].answers.rightAnswer;

        questionButton.addEventListener('click', () => {
            i++;
            optionA.style.removeProperty('color');
            optionA.style.removeProperty('font-weight');
            optionB.style.removeProperty('color');
            optionB.style.removeProperty('font-weight');
            optionC.style.removeProperty('color');
            optionC.style.removeProperty('font-weight');
            rightAnswer.style.removeProperty('color');
            rightAnswer.style.removeProperty('font-weight');
            setQuestion();
        })
    }

    updateQuestion();

    function getScore() {

        optionA.addEventListener("click", () => {
            opponentsScore += 1;
            optionA.style.color = "red";
            optionA.style.fontWeight = "bolder";

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 0);

            getResults();
        });

        optionB.addEventListener("click", () => {
            opponentsScore += 1;
            optionB.style.color = "red";
            optionB.style.fontWeight = "bolder";

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 0);

            getResults();
        });

        optionC.addEventListener("click", () => {
            opponentsScore += 1;
            optionC.style.color = "red";
            optionC.style.fontWeight = "bolder";

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 0);

            getResults();
        });

        rightAnswer.addEventListener("click", () => {
            lakersScore += 1;
            rightAnswer.style.color = "green";
            rightAnswer.style.fontWeight = "bolder";

            setTimeout(() => {
                document.querySelector("#lakers-Score").textContent = lakersScore;
                document.querySelector("#opponents-Score").textContent = opponentsScore;
            }, 0);

            getResults();

        });

    }

    getScore();

    function getResults() {
        if (lakersScore === 5) {
            lakersWinModal.style.display = 'block';
            console.log("You win!");
        } else if (opponentsScore === 5) {
            lakersLoseModal.style.display = 'block';
            console.log("You lose!");
        } else {
            lakersLoseModal.style.display = 'none';
            lakersWinModal.style.display = 'none';
        }
    };

    getResults();

}

lakersGame();
