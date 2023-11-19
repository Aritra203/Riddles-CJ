const startBtn = document.querySelector('#start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const riddleSection = document.querySelector('.riddle-section');
const riddleBox = document.querySelector('.riddle-box');

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
}


let questionCount = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    questionCount++;
    showQuestions(questionCount);
}

// const answer = document.querySelector('.answer');

//getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    // let optionTag = `<form><input type="text" placeholder="${questions[index].options[0]}" ></form>`;

    
    // answer.innerHTML = optionTag;
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
