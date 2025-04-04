import { questions, personalityTypes } from './data.js';

// main quiz logic class
class MalaQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.userAnswers = {
            E: 0,
            I: 0,
            S: 0,
            N: 0,
            T: 0,
            F: 0,
            J: 0,
            P: 0
        };
    }

    // get current question
    getCurrentQuestion() {
        return questions[this.currentQuestion];
    }

    // record user's answer and move to next question
    answerQuestion(type) {
        this.userAnswers[type] += 1;
        this.currentQuestion += 1;
        return this.isQuizComplete();
    }

    // check if quiz is complete
    isQuizComplete() {
        return this.currentQuestion >= questions.length;
    }

    // get current progress percentage
    getProgress() {
        return (this.currentQuestion / questions.length) * 100;
    }

    // get current question number
    getQuestionNumber() {
        return this.currentQuestion + 1;
    }

    // get personality type based on user answers
    calculateMBTI() {
        const type = [
            this.userAnswers.E >= this.userAnswers.I ? 'E' : 'I',
            this.userAnswers.S >= this.userAnswers.N ? 'S' : 'N',
            this.userAnswers.T >= this.userAnswers.F ? 'T' : 'F',
            this.userAnswers.J >= this.userAnswers.P ? 'J' : 'P'
        ].join('');

        return type;
    }

    // get result personality type details
    getResult() {
        const mbtiType = this.calculateMBTI();
        return {
            type: mbtiType,
            ...personalityTypes[mbtiType]
        };
    }

    // reset the quiz
    reset() {
        this.currentQuestion = 0;
        this.userAnswers = {
            E: 0,
            I: 0,
            S: 0,
            N: 0,
            T: 0,
            F: 0,
            J: 0,
            P: 0
        };
    }
}

// export the quiz class
export { MalaQuiz };