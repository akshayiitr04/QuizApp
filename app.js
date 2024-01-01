const questions= [
    {
        question : "Which is the largest coffee-producing state of India?",
        answers : [
            
            { text: "Kerala" , correct: false},
            { text: "Tamil Nadu" , correct: false},
            { text: "Karnataka" , correct: true},
            { text: "Arunachal Pradesh" , correct: false},
        ]

    },
    {


        question : "For the Olympics and World Tournaments, the dimensions of basketball court are?",
        answers : [
            
            { text: "28 m x 15 m" , correct: true},
            { text: "27 m x 16 m" , correct: false},
            { text: "26 m x 14 m" , correct: false},
            { text: "28 m x 16 m" , correct: false},
        ]

    },
    {
        question : "Which of these technologies help computers to behave like humans?",
        answers : [
            
            { text: "XBOX" , correct: false},
            { text: "Artificial embryo" , correct: false},
            { text: "3-D printing " , correct: false},
            { text: "Artificial intelligence " , correct: true},
        ]

    },
    {
        question : "White rust is an important fungal disease of?",
        answers : [

            { text: "Wheat" , correct: false},
            { text: "Mustard" , correct: true},
            { text: "Rice" , correct: false},
            { text: "Bajra" , correct: false},
        ]

    }




];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
         if(answer.correct)
         {
            button.dataset.correct = answer.correct;
            // console.log(button.dataset.correct);
         }

        button.addEventListener("click" , selectAnswer)
        

    });
};



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    //  console.log(selectedBtn);
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
          score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
})


startQuiz();


