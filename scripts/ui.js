// UI controller for UI interactions
class QuizUI {
    constructor(quiz) {
        // store reference to quiz logic
        this.quiz = quiz;

        // DOM elements
        this.introPage = document.getElementsByClassName("intro-page")[0];
        this.quizPage = document.getElementsByClassName("quiz-page")[0];
        this.resultPage = document.getElementsByClassName("result-page")[0];
        this.questionText = document.getElementsByClassName("question-text")[0];
        this.optionsContainer = document.getElementsByClassName("options")[0];
        this.progressBar = document.getElementsByClassName("progress")[0];
        this.questionNumber = document.getElementsByClassName("question-number")[0];
        this.resultType = document.getElementsByClassName("result-type")[0];
        this.resultTitle = document.getElementsByClassName("result-title")[0];
        this.resultDescription = document.getElementsByClassName("result-description")[0];
        this.resultIngredient = document.getElementsByClassName("result-ingredient")[0];
        this.spiceLevel = document.getElementsByClassName("spice-level")[0];
    }
    
    // Initialize the quiz UI
    init() {
        // Hide all pages initially
        this.quizPage.style.display = "none";
        this.resultPage.style.display = "none";
    }

    // Show the intro page
    showIntro() {
        this.introPage.style.display = "block";
        this.quizPage.style.display = "none";
        this.resultPage.style.display = "none";
    }

    // start the quiz and show the first question
    startQuiz() {
        this.introPage.style.display = "none";
        this.quizPage.style.display = "block";
        this.resultPage.style.display = "none";
        this.loadQuestion();
    }

    // Load the current question and options
    loadQuestion() {
        // Update progress bar and question number
        const progress = this.quiz.getProgress();
        this.progressBar.style.width = `${progress}%`;
        this.questionNumber.textContent = `Question ${this.quiz.getQuestionNumber()} of ${questions.length}`;

        // Get current question and update UI
        const currentQuestion = this.quiz.getCurrentQuestion();
        this.questionText.textContent = currentQuestion.question;

        // Clear previous options
        this.optionsContainer.innerHTML = "";

        // Create option buttons
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option-button");
            button.textContent = option.text;
            
            button.addEventListener("click", () => this.handleOptionSelect(option.type));
            this.optionsContainer.appendChild(button);
        });
    }

    // Handle option selection
    handleOptionSelect(type) {
        // Record answer and check if quiz is complete
        const isComplete = this.quiz.answerQuestion(type);
        
        // Load next question or show result
        if (isComplete) {
            this.showResults();
        } else {
            this.loadQuestion();
        }
    }

    // display quiz results
    showResults() {
        this.quizPage.style.display = "none";
        this.resultPage.style.display = "block";

        // Get result and update UI
        const result = this.quiz.getResult();

        this.resultType.textContent = result.type;
        this.resultTitle.textContent = result.title;
        this.resultDescription.textContent = result.description;
        this.resultIngredient.textContent = result.ingredient;
        
        // set spice level
        const peppers = this.spiceLevel.querySelectorAll(".pepper");
        peppers.forEach((pepper, index) => {
            if (index < result.spiceLevel) {
                pepper.classList.add("active");
            } else {
                pepper.classList.remove("active");
            }
        });
    }

    // reset and restart quiz
    restartQuiz() {
        this.quiz.reset();
        this.showIntro();
    }
}

// import questions for type information
// import { questions } from "./data.js";

// export ui controller
// export { QuizUI };