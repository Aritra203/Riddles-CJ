const startBtn = document.querySelector('#start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const riddleSection = document.querySelector('.riddle-section');
const riddleBox = document.querySelector('.riddle-box');
const resultBox = document.querySelector('.result-box');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    riddleSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    riddleBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}


let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
    }
    else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

//getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>`;

    
    optionList.innerHTML = optionTag;

    const option = optionList.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('incorrect');

        //if answer is incorrect, automatically select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    //if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const riddleTotal = document.querySelector('.riddle-total');
    riddleTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
    const headerScoretext = document.querySelector('.header-score');
    headerScoretext.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
}








// fullscreen mode

document.addEventListener('DOMContentLoaded', function () {
    var fullscreenElement = document.documentElement;

    // Toggle fullscreen on button click
    document.getElementById('start-btn').addEventListener('click', function () {
        if (!document.fullscreenElement) {
            fullscreenElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    if (!document.fullscreenEnabled) {
        document.getElementById('start-btn').style.display = 'none';
    }
    else {

        fullscreenElement.requestFullscreen();

        // warning when exiting fullscreen mode
        document.addEventListener('fullscreenchange', function () {
            if (!document.fullscreenElement) {
                if (confirm('Are you sure you want to exit the Contest?')) {

                    window.close();
                }
                else {

                    fullscreenElement.requestFullscreen();
                }
            }
        });
    }
});
