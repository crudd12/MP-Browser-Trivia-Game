const triviaData = [
    {
        "question": "In which city did Kareem Abdul-Jabbar break Wilt Chamberlain's record for most career points in NBA History?",
        // "rightAnswer": "Las Vegas",
        "answers":
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
        "answers":
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
    // let triviaAnswers = triviaData[0].answers;
    // let rightAnswer = triviaData[0].answers.rightAnswer;

    console.log(triviaQuestion);

//pushes trivia questions and answers
    document.querySelector('#trivia-question').textContent = triviaQuestion;
    document.querySelector('#Option-A').textContent = triviaData[0].answers.a;
    document.querySelector('#Option-B').textContent = triviaData[0].answers.b;
    document.querySelector('#Option-C').textContent = triviaData[0].answers.c;
    document.querySelector('#Option-RightAnswer').textContent = triviaData[0].answers.rightAnswer;

    let optionA = document.querySelector('#Option-A');
    let optionB = document.querySelector('#Option-B');
    let optionC = document.querySelector('#Option-C');
    let rightAnswer = document.querySelector('#Option-RightAnswer');


    optionA.textContent = triviaData[0].answers.a;
    optionB.textContent = triviaData[0].answers.b;
    
    function getScore() {
        let lakersScore = 0;
        let opponentsScore = 0;

        optionA.addEventListener('click', () => {
            opponentsScore += 1;
            optionA.style.color = 'red';
            optionA.style.fontWeight = 'bolder';
             console.log(opponentsScore);

             setTimeout(() => {
                document.querySelector('#lakers-Score').textContent = lakersScore;
                document.querySelector('#opponents-Score').textContent = opponentsScore;
              }, 250);
            })

         optionB.addEventListener('click', () => {
             opponentsScore += 1;
             optionB.style.color = 'red';
             optionB.style.fontWeight = 'bolder';
              console.log(opponentsScore);

              setTimeout(() => {
                document.querySelector('#lakers-Score').textContent = lakersScore;
                document.querySelector('#opponents-Score').textContent = opponentsScore;
              }, 250);
             })

                
    };

    getScore();

}

getTriviaData();




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