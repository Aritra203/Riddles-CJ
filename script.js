const startBtn = document.querySelector('#start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const riddleSection = document.querySelector('.riddle-section');

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
