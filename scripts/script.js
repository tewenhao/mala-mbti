const questions = [
    // sample question
    {
        "question": "When trying a new mala dish, you prefer to:",
        "options": [
            {
                "text": "Follow a traditional recipe",
                "type": "J"
            },
            {
                "text": "Experiment with new ingredients",
                "type": "P"
            }
        ]
    },
    
    // add new questions here
];

// personality types will be replaced with
// character cards, like Fruit Odessey.

const personalityTypes = {
    
    // placeholders
    "J": {
        "name": "Judging",
        "description": "You prefer structure and order. You like to plan ahead and stick to a schedule.",
        "image": "images/judging.png"
    },
    "P": {
        "name": "Perceiving",
        "description": "You are more spontaneous and flexible. You prefer to keep your options open.",
        "image": "images/perceiving.png"
    }
};