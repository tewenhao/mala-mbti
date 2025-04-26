/*
Anyway I got ChatGPT to generate the ingredient list and explain why:

1. ISTJ – Lotus Root
Structured, dependable, traditional.
Lotus root is clean, crisp, and always reliable in mala. It adds texture without fuss. Just like the ISTJ, it sticks to what works.

2. ISFJ – Tofu Puffs
Gentle, nurturing, adaptable.
Soaks up the spicy broth and delivers warmth. Tofu puffs are soft, caring, and always there for you—just like ISFJs who take care of everyone in the group.

3. INFJ – Enoki Mushrooms
Mysterious, idealistic, thoughtful.
Delicate, deep, and full of quiet complexity. INFJs, like enokis, may look soft, but bring an unexpectedly unique texture to the table.

4. INTJ – Black Fungus (Wood Ear Mushroom)
Strategic, independent, resilient.
Not flashy, but indispensable. Black fungus adds a subtle, crunchy edge and thrives in intense conditions—just like INTJs.

5. ISTP – Quail Eggs
Cool, analytical, hands-on.
Small but packed with protein, quail eggs are efficient, low-key delicious, and get the job done. Just like an ISTP's no-nonsense approach.

6. ISFP – Sweet Potato Noodles
Artistic, warm, free-spirited.
Soft, chewy, and slightly sweet—these noodles feel like a hug. The ISFP brings creativity and warmth to the mix, just like these glassy strands.

7. INFP – Beancurd Skin (Tofu Skin Rolls)
Dreamy, emotional, idealistic.
They soak up all the flavor, adding a gentle but deep presence. INFPs are like beancurd skin—quiet, thoughtful, and full of heart once you really notice them.

8. INTP – Luncheon Meat
Curious, inventive, quirky.
Spam in mala? Iconic. Unexpected and low-key genius. INTPs, like luncheon meat, may seem odd in theory, but they make everything more interesting.

9. ESTP – Mala Xiang Guo Sausage (Taiwan Sausage)
Bold, energetic, life of the party.
A little fatty, a little sweet, a lot of flavor. ESTPs bring the heat and excitement, just like sausage sizzling in a wok.

10. ESFP – Fried Beancurd Skin
Charismatic, spontaneous, fun-loving.
Crunchy at first, soft after soaking—this one drama queens its way through the broth. ESFPs live for the flavor and make mala an experience.

11. ENFP – Instant Noodles
Playful, optimistic, enthusiastic.
Chaotic? Maybe. Loved by all? Definitely. ENFPs are like instant noodles—familiar, unpredictable, and always a good time.

12. ENTP – Cheese Tofu
Inventive, quick-witted, charmingly odd.
It’s tofu... with cheese inside. Weird? Yes. Genius? Also yes. ENTPs love mixing things up, just like this wildcard ingredient.

13. ESTJ – Broccoli
Efficient, organized, leadership-oriented.
Someone’s gotta balance out all the oil and spice. Broccoli brings order and health vibes to the bowl, just like an ESTJ making sure things run right.

14. ESFJ – Fish Balls
Sociable, loyal, supportive.
Classic, comforting, and loved by everyone. Fish balls are the people-pleaser of mala ingredients, just like the always-there ESFJ friend.

15. ENFJ – Chinese Cabbage (Bai Cai)
Empathetic, inspiring, nurturing.
Soaks up spice, softens over time, and balances the dish. ENFJs are like cabbage—bringing warmth and harmony wherever they go.

16. ENTJ – Beef Slices
Assertive, goal-driven, confident.
Takes center stage, commands attention, and brings the protein. ENTJs lead the bowl—and the room—with power and flavor.
*/

// Character data for MBTI types
const MBTICharacters = {
    ISTJ: {
        title: "Structured Lotus Root",
        traits: [
            "Reliable and Practical",
            "Brings Crunch without Drama"
        ],
        quote: "If it ain’t broke, don’t fix it.",
        population: "11–14%",
        image: "assets/mala-lotus-root.png",
        stats: {
            spiciness: 2,
            complexity: 2,
            traditionality: 5,
            adaptability: 2
        },
        compatibleTypes: ["ESTP", "ISFJ"],
        incompatibleTypes: ["ENFP", "ENTP"]
    },

    ISFJ: {
        title: "Caring Tofu Puff",
        traits: [
            "Nurturing and Adaptable",
            "Soaks Up All the Flavor"
        ],
        quote: "I’ve got you—soak it all in.",
        population: "9–14%",
        image: "assets/mala-tofu-puff.png",
        stats: {
            spiciness: 1,
            complexity: 3,
            traditionality: 5,
            adaptability: 5
        },
        compatibleTypes: ["ESFP", "ISTJ"],
        incompatibleTypes: ["ENTP", "INTP"]
    },

    INFJ: {
        title: "Dreamy Enoki Mushroom",
        traits: [
            "Soft-Spoken but Intense",
            "Quietly Complicated"
        ],
        quote: "Soft-spoken, spice-soaked.",
        population: "1–3%",
        image: "assets/mala-enoki-mushroom.png",
        stats: {
            spiciness: 2,
            complexity: 5,
            traditionality: 4,
            adaptability: 3
        },
        compatibleTypes: ["ENFP", "ENTP"],
        incompatibleTypes: ["ESTP", "ESTJ"]
    },

    INTJ: {
        title: "Strategic Black Fungus",
        traits: [
            "Low-Key but Essential",
            "Thrives Under Heat"
        ],
        quote: "Calculated crunch.",
        population: "2–4%",
        image: "assets/mala-black-fungus.png",
        stats: {
            spiciness: 2,
            complexity: 4,
            traditionality: 4,
            adaptability: 3
        },
        compatibleTypes: ["ENTP", "INFP"],
        incompatibleTypes: ["ESFP", "ISFJ"]
    },

    ISTP: {
        title: "Cool Quail Egg",
        traits: [
            "Chill and Efficient",
            "Does More Than It Looks"
        ],
        quote: "Silent, sharp, and protein-packed.",
        population: "5–6%",
        image: "assets/mala-quail-egg.png",
        stats: {
            spiciness: 3,
            complexity: 3,
            traditionality: 3,
            adaptability: 4
        },
        compatibleTypes: ["ESTP", "ISFP"],
        incompatibleTypes: ["ENFJ", "INFJ"]
    },

    ISFP: {
        title: "Chill Sweet Potato Noodles",
        traits: [
            "Warm and Artistic",
            "Sweet with a Kick"
        ],
        quote: "Soft, sweet, and sliding through spice.",
        population: "4–9%",
        image: "assets/mala-sweet-potato-noodles.png",
        stats: {
            spiciness: 3,
            complexity: 3,
            traditionality: 4,
            adaptability: 4
        },
        compatibleTypes: ["ESFP", "INFP"],
        incompatibleTypes: ["ENTJ", "ESTJ"]
    },

    INFP: {
        title: "Wholesome Beancurd Skin",
        traits: [
            "Soft-Hearted and Dreamy",
            "Absorbs All the Spice"
        ],
        quote: "Feel deeply, soak fully.",
        population: "4–5%",
        image: "assets/mala-beancurd-skin.png",
        stats: {
            spiciness: 2,
            complexity: 4,
            traditionality: 3,
            adaptability: 5
        },
        compatibleTypes: ["ENFJ", "INTJ"],
        incompatibleTypes: ["ESTP", "ESTJ"]
    },

    INTP: {
        title: "Chaotic Luncheon Meat",
        traits: [
            "Quirky but Brilliant",
            "Unexpected but Iconic"
        ],
        quote: "Strangely perfect. Don’t question it.",
        population: "3–5%",
        image: "assets/mala-luncheon-meat.png",
        stats: {
            spiciness: 3,
            complexity: 5,
            traditionality: 2,
            adaptability: 3
        },
        compatibleTypes: ["ENTP", "ISFP"],
        incompatibleTypes: ["ESFJ", "ISFJ"]
    },

    ESTP: {
        title: "Sizzling Taiwan Sausage",
        traits: [
            "Energetic and Bold",
            "Loves to Stir the Pot"
        ],
        quote: "Let’s sizzle, baby.",
        population: "4–5%",
        image: "assets/mala-taiwan-sausage.png",
        stats: {
            spiciness: 5,
            complexity: 2,
            traditionality: 2,
            adaptability: 5
        },
        compatibleTypes: ["ISTJ", "ESFP"],
        incompatibleTypes: ["INFJ", "INFP"]
    },

    ESFP: {
        title: "Flamboyant Fried Beancurd Skin",
        traits: [
            "Life of the Party",
            "Crunch Now, Soften Later"
        ],
        quote: "Crunch first, questions later.",
        population: "8–10%",
        image: "assets/mala-fried-beancurd-skin.png",
        stats: {
            spiciness: 4,
            complexity: 3,
            traditionality: 3,
            adaptability: 5
        },
        compatibleTypes: ["ISFP", "ESFJ"],
        incompatibleTypes: ["INTJ", "ISTJ"]
    },

    ENFP: {
        title: "Chaotic Instant Noodles",
        traits: [
            "Optimistic and Fun",
            "Unpredictable but Loved"
        ],
        quote: "Chaos is my seasoning.",
        population: "6–8%",
        image: "assets/mala-instant-noodles.png",
        stats: {
            spiciness: 4,
            complexity: 4,
            traditionality: 2,
            adaptability: 5
        },
        compatibleTypes: ["INFJ", "INTJ"],
        incompatibleTypes: ["ISTJ", "ESTJ"]
    },

    ENTP: {
        title: "Witty Cheese Tofu",
        traits: [
            "Inventive and Bold",
            "Breaks All the Rules—Tastes Amazing"
        ],
        quote: "Surprise! Bet you weren’t ready.",
        population: "2–5%",
        image: "assets/mala-cheese-tofu.png",
        stats: {
            spiciness: 3,
            complexity: 5,
            traditionality: 1,
            adaptability: 5
        },
        compatibleTypes: ["INFP", "INFJ"],
        incompatibleTypes: ["ISFJ", "ESFJ"]
    },

    ESTJ: {
        title: "Bossy Broccoli",
        traits: [
            "Efficient and No-Nonsense",
            "Keeps the Spice in Check"
        ],
        quote: "Keeping this bowl in line.",
        population: "8–10%",
        image: "🥦",
        stats: {
            spiciness: 2,
            complexity: 2,
            traditionality: 5,
            adaptability: 2
        },
        compatibleTypes: ["ISTJ", "ESFJ"],
        incompatibleTypes: ["INFP", "ENFP"]
    },

    ESFJ: {
        title: "Friendly Fish Ball",
        traits: [
            "Supportive and Classic",
            "Everyone’s Comfort Ingredient"
        ],
        quote: "Here for everyone. Always.",
        population: "9–13%",
        image: "🐟",
        stats: {
            spiciness: 2,
            complexity: 2,
            traditionality: 5,
            adaptability: 4
        },
        compatibleTypes: ["ISFJ", "ESFP"],
        incompatibleTypes: ["INTP", "ENTP"]
    },

    ENFJ: {
        title: "Nurturing Bai Cai",
        traits: [
            "Empathetic and Inspiring",
            "Balances the Burn"
        ],
        quote: "Soaking up spice, serving soul.",
        population: "2–5%",
        image: "🥬",
        stats: {
            spiciness: 3,
            complexity: 4,
            traditionality: 4,
            adaptability: 5
        },
        compatibleTypes: ["INFP", "ISFP"],
        incompatibleTypes: ["ISTP", "INTP"]
    },

    ENTJ: {
        title: "Commanding Beef Slices",
        traits: [
            "Confident and Direct",
            "Takes Charge of the Wok"
        ],
        quote: "Lead with heat.",
        population: "2–4%",
        image: "🥩",
        stats: {
            spiciness: 5,
            complexity: 4,
            traditionality: 4,
            adaptability: 3
        },
        compatibleTypes: ["INTP", "ENFP"],
        incompatibleTypes: ["ISFP", "ESFP"]
    }
}

// helper function to get image for each type
function getTypeImage(type) {
    return MBTICharacters[type]?.image || "";
}

export { MBTICharacters, getTypeImage }