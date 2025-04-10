// Quiz Questions and Options
const questions = [
    // current questions are sample questions
    {
      question: "When trying a new mala dish, you prefer to:",
      options: [
        { text: "Follow a traditional recipe precisely", type: "J" },
        { text: "Experiment with different spices and ingredients", type: "P" }
      ]
    },
    {
        question: "At a hotpot dinner with friends, you typically:",
        options: [
        { text: "Enjoy the energetic group atmosphere and conversation", type: "E" },
        { text: "Prefer smaller gatherings where you can have deeper conversations", type: "I" }
        ]
    },
    {
        question: "When choosing ingredients for your mala dish, you prioritize:",
        options: [
        { text: "What tastes good based on personal experience", type: "S" },
        { text: "Interesting combinations that might create unique flavors", type: "N" }
        ]
    },
    {
        question: "If your mala dish doesn't turn out as expected, you:",
        options: [
        { text: "Consider how it affects everyone who will eat it", type: "F" },
        { text: "Analyze what went wrong in the cooking process", type: "T" }
        ]
    },
    {
        question: "Your approach to cooking is usually:",
        options: [
        { text: "Planned with ingredients prepped ahead of time", type: "J" },
        { text: "Flexible, adding ingredients as inspiration strikes", type: "P" }
        ]
    },
    {
        question: "When eating spicy food, you tend to:",
        options: [
        { text: "Share your experience and reactions with everyone", type: "E" },
        { text: "Keep your thoughts to yourself while you savor the flavors", type: "I" }
        ]
    },
    {
        question: "The appeal of mala for you is primarily:",
        options: [
        { text: "The familiar, consistent heat and flavor profile", type: "S" },
        { text: "The complex interplay of different spices and sensations", type: "N" }
        ]
    },
    {
        question: "When someone doesn't enjoy your spicy dish, you:",
        options: [
        { text: "Feel concerned about their experience", type: "F" },
        { text: "Wonder what specifically they didn't like about it", type: "T" }
        ]
    },
    {
        question: "Your kitchen is typically:",
        options: [
        { text: "Organized with everything in its place", type: "J" },
        { text: "Creative with several projects happening at once", type: "P" }
        ]
    },
    {
        question: "At a food festival, you would rather:",
        options: [
        { text: "Try many different foods and meet various vendors", type: "E" },
        { text: "Focus on a few quality dishes and have meaningful conversations", type: "I" }
        ]
    },
    {
        question: "When tasting a complex mala flavor, you first notice:",
        options: [
        { text: "The specific ingredients and cooking techniques", type: "S" },
        { text: "The overall impression and how it makes you feel", type: "N" }
        ]
    },
    {
        question: "When deciding on spice level, you consider:",
        options: [
        { text: "What everyone at the table will enjoy", type: "F" },
        { text: "The optimal heat level for the dish itself", type: "T" }
        ]
    },
    {
        question: "Your recipe collection is:",
        options: [
        { text: "Well-organized and categorized", type: "J" },
        { text: "A loose collection of ideas and inspirations", type: "P" }
        ]
    },
    {
        question: "After discovering a great new restaurant, you:",
        options: [
        { text: "Immediately tell friends and share on social media", type: "E" },
        { text: "Keep it as a special place for yourself and close friends", type: "I" }
        ]
    },
    {
        question: "You appreciate mala dishes that:",
        options: [
        { text: "Perfect traditional techniques and authentic flavors", type: "S" },
        { text: "Reimagine the classic with innovative twists", type: "N" }
        ]
    },
    {
        question: "When cooking for others, your main concern is:",
        options: [
        { text: "Creating an emotionally satisfying experience", type: "F" },
        { text: "Executing the dish with technical excellence", type: "T" }
        ]
    }
];

// MBTI personality types with themes
// temporary, will replace with png character cards.

const personalityTypes = {
    ISTJ: {
        title: "The Traditional Hot Pot",
        description: "Reliable and precise, you appreciate tradition and consistency in your mala experience. You prefer authentic recipes followed exactly.",
        spiceLevel: 3,
        ingredient: "Sichuan Peppercorns - traditional and essential"
    },
    ISFJ: {
        title: "The Caring Homestyle Mala",
        description: "Warm and considerate, you make mala dishes that comfort and nurture. You remember everyone's spice preferences.",
        spiceLevel: 2,
        ingredient: "Star Anise - warm and nurturing"
    },
    INFJ: {
        title: "The Mystical Mala Blend",
        description: "Insightful and complex, your mala creations have depth and hidden dimensions that reveal themselves slowly.",
        spiceLevel: 4,
        ingredient: "Cardamom - complex and mysterious"
    },
    INTJ: {
        title: "The Master Mala Strategist",
        description: "Strategic and perfectionistic, you've analyzed the optimal balance of mala spices for maximum flavor impact.",
        spiceLevel: 4,
        ingredient: "Cumin - distinctive and calculated"
    },
    ISTP: {
        title: "The Adaptable Spice Craftsman",
        description: "Practical and hands-on, you can customize mala heat levels on the fly and fix any dish that's too spicy or bland.",
        spiceLevel: 3,
        ingredient: "Dried Chilis - straightforward and effective"
    },
    ISFP: {
        title: "The Gentle Flavor Artist",
        description: "Sensitive to flavor nuances, you create mala dishes that are beautiful, harmonious, and personally meaningful.",
        spiceLevel: 2,
        ingredient: "Cinnamon - subtle and warming"
    },
    INFP: {
        title: "The Idealistic Flavor Poet",
        description: "Dreamy and authentic, your mala creations express your personal values and often tell a story through flavor.",
        spiceLevel: 3,
        ingredient: "Fennel Seeds - unique and idealistic"
    },
    INTP: {
        title: "The Mala Theorist",
        description: "Analytical and curious, you experiment with the chemical properties of mala spices to create intellectually stimulating dishes.",
        spiceLevel: 3,
        ingredient: "Black Cardamom - complex and thought-provoking"
    },
    ESTP: {
        title: "The Daredevil Mala Master",
        description: "Bold and energetic, you're always pushing the boundaries of how spicy and flavorful mala can be.",
        spiceLevel: 5,
        ingredient: "Ghost Peppers - intense and exciting"
    },
    ESFP: {
        title: "The Mala Entertainer",
        description: "Vivacious and fun-loving, your mala dishes are exciting conversation starters at social gatherings.",
        spiceLevel: 4,
        ingredient: "Sichuan Peppercorn Oil - vibrant and showy"
    },
    ENFP: {
        title: "The Enthusiastic Spice Explorer",
        description: "Imaginative and passionate, you love discovering unusual ingredients to create innovative mala fusions.",
        spiceLevel: 4,
        ingredient: "Lemongrass - unexpected and inspiring"
    },
    ENTP: {
        title: "The Mala Innovator",
        description: "Clever and quick-witted, you're always reinventing mala with unexpected ingredient combinations that challenge traditions.",
        spiceLevel: 4,
        ingredient: "Sichuan Pickles - surprising and conversation-starting"
    },
    ESTJ: {
        title: "The Executive Chef",
        description: "Efficient and structured, you make mala dishes with clear, reliable processes that consistently deliver excellent results.",
        spiceLevel: 3,
        ingredient: "Bay Leaves - organized and foundational"
    },
    ESFJ: {
        title: "The Harmonious Host",
        description: "Sociable and caring, your mala dishes bring people together and accommodate everyone's preferences at the table.",
        spiceLevel: 2,
        ingredient: "Ginger - warming and approachable"
    },
    ENFJ: {
        title: "The Inspirational Flavor Guide",
        description: "Charismatic and empathetic, you use mala flavors to create experiences that emotionally resonate with and inspire others.",
        spiceLevel: 3,
        ingredient: "Galangal - uplifting and influential"
    },
    ENTJ: {
        title: "The Mala Commander",
        description: "Decisive and commanding, your bold mala creations make a strong impression and you're not afraid to use maximum spice.",
        spiceLevel: 5,
        ingredient: "Sichuan Fire Oil - powerful and commanding"
    }
};

// Exporting the questions and personality types
// export { questions, personalityTypes };