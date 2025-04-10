// main entry point for quiz application
// import { MalaQuiz } from './quiz.js';
// import { QuizUI } from './ui.js';

// wait for DOM to FULLY load
document.addEventListener('DOMContentLoaded', () => {
    // initialize quiz and UI
    const quiz = new MalaQuiz();
    const ui = new QuizUI(quiz);
    ui.init();

    // set up event listeners for buttons
    const startButton = document.getElementsByClassName('start-button')[0];
    const restartButton = document.getElementsByClassName('restart-button')[0];

    startButton.addEventListener('click', () => {
        ui.startQuiz();
    });

    restartButton.addEventListener('click', () => {
        ui.restartQuiz();
    });
});