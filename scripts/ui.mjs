import { questions } from "./questions.mjs";
import { MBTICharacters, getTypeImage } from "./characters.mjs";

// UI controller for UI interactions
class QuizUI {
    constructor(quiz) {
        // store reference to quiz logic
        this.quiz = quiz;

        // DOM elements
        this.introPage = document.getElementsByClassName("intro-page")[0];
        this.quizPage = document.getElementsByClassName("quiz-page")[0];
        this.resultsPage = document.getElementsByClassName("results-page")[0];
        this.questionText = document.getElementsByClassName("question-text")[0];
        this.optionsContainer = document.getElementsByClassName("options")[0];
        this.progressBar = document.getElementsByClassName("progress")[0];
        this.questionNumber = document.getElementsByClassName("question-number")[0];
        
        // character card elements
        this.resultType = document.getElementsByClassName("result-type")[0];
        this.characterImage = document.getElementsByClassName("character-image")[0];
        this.populationText = document.getElementsByClassName("population-text")[0];
        this.trait1 = document.getElementsByClassName("trait1")[0];
        this.trait2 = document.getElementsByClassName("trait2")[0];
        this.quote = document.getElementsByClassName("quote")[0];

        // stats elements
        this.spicinessStat = document.getElementsByClassName("spiciness-stat")[0];
        this.complexityStat = document.getElementsByClassName("complexity-stat")[0];
        this.traditionalityStat = document.getElementsByClassName("traditionality-stat")[0];
        this.adaptabilityStat = document.getElementsByClassName("adaptability-stat")[0];

        // compatibility elements
        this.compatible1 = document.getElementsByClassName("compatible1")[0].querySelector("img");
        this.compatible2 = document.getElementsByClassName("compatible2")[0].querySelector("img");
        this.incompatible1 = document.getElementsByClassName("incompatible1")[0].querySelector("img");
        this.incompatible2 = document.getElementsByClassName("incompatible2")[0].querySelector("img");
    }
    
    // Initialize the quiz UI
    init() {
        // Hide all pages initially
        this.quizPage.style.display = "none";
        this.resultsPage.style.display = "none";
    }

    // Show the intro page
    showIntro() {
        this.introPage.style.display = "block";
        this.quizPage.style.display = "none";
        this.resultsPage.style.display = "none";
    }

    // start the quiz and show the first question
    startQuiz() {
        this.introPage.style.display = "none";
        this.quizPage.style.display = "block";
        this.resultsPage.style.display = "none";
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

    // generate star rating html
    generateStarRating(rating) {
        let stars = "";
        for (let i = 0; i < 5; i++) {
            stars += `<span class="star ${i < rating ? "filled" : "empty"}">🌶️</span>`;
        }
        return stars;
    }

    // display quiz results as a character card
    showResults() {
        this.quizPage.style.display = "none";
        this.resultsPage.style.display = "block";

        const result = this.quiz.getResult();
        const mbtiType = result.type;
        const character = MBTICharacters[mbtiType];

        // set character data
        this.resultType.textContent = mbtiType + " - " + character.title;

        // this.characterImage.src = getTypeImage(mbtiType);
        // Use emoji as placeholder for now - in a real app, you'd use actual images
        this.characterImage.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><text x="50%" y="50%" font-size="70" text-anchor="middle" dominant-baseline="middle">${character.image}</text></svg>`;
        this.characterImage.alt = character.title;

        // set population text
        this.populationText.textContent = `This ingredient is ${character.population} of all ingredients in the world!`;

        // set traits
        this.trait1.textContent = character.traits[0];
        this.trait2.textContent = character.traits[1];

        // set quote
        this.quote.textContent = `"${character.quote}"`;

        // set stats with star ratings
        this.spicinessStat.innerHTML = this.generateStarRating(character.stats.spiciness);
        this.complexityStat.innerHTML = this.generateStarRating(character.stats.complexity);
        this.traditionalityStat.innerHTML = this.generateStarRating(character.stats.traditionality);
        this.adaptabilityStat.innerHTML = this.generateStarRating(character.stats.adaptability);

        // set compatibility images
        const compatibles = character.compatibleTypes;
        const incompatibles = character.incompatibleTypes;

        this.compatible1.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><text x="50%" y="50%" font-size="20" text-anchor="middle" dominant-baseline="middle">${getTypeImage(compatibles[0])}</text></svg>`;
        this.compatible1.alt = compatibles[0];
        
        this.compatible2.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><text x="50%" y="50%" font-size="20" text-anchor="middle" dominant-baseline="middle">${getTypeImage(compatibles[1])}</text></svg>`;
        this.compatible2.alt = compatibles[1];
        
        this.incompatible1.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><text x="50%" y="50%" font-size="20" text-anchor="middle" dominant-baseline="middle">${getTypeImage(incompatibles[0])}</text></svg>`;
        this.incompatible1.alt = incompatibles[0];
        
        this.incompatible2.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><text x="50%" y="50%" font-size="20" text-anchor="middle" dominant-baseline="middle">${getTypeImage(incompatibles[1])}</text></svg>`;
        this.incompatible2.alt = incompatibles[1];

    }

    // reset and restart quiz
    restartQuiz() {
        this.quiz.reset();
        this.showIntro();
    }
}

// export ui controller
export { QuizUI };