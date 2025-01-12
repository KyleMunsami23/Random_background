const mantras = [
    '#GodFirstBro',
    '#youCan',
    '#makeAdifference',
    '#BeTheLight',
    '#ItsInTheMind',
    '#WorkSmarter',
    '#WinHarder',
    '#DOIT!',
    '#AddALittleMore',
    '#Unstoppable'
];

const image = [
    'image_1.jpg',
    'image_2.jpg',
    'image_3.jpg',
    'image_4.jpg',
    'image_5.jpg',
    'image_6.jpg',
    'image_7.jpg',
    'image_8.jpg',
    'image_9.jpg',
    'image_10.jpg',
];

const randomQuotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
];

function displayRandomItem() {
    const x = Math.floor(Math.random() * 10); 
    const randomQuote = randomQuotes[x].quote;
    const randomQuoteAuthor = randomQuotes[x].author;
    const randomImage = image[x];
    const randomMantra = mantras[x];

    document.getElementById("quote").textContent = `"${randomQuote}"`;
    document.getElementById("author").textContent = `- ${randomQuoteAuthor}`;

    document.getElementById("mantra").textContent = ` ${randomMantra} `;

    document.body.style.backgroundImage = `url('./images/${randomImage}')`;
}

displayRandomItem();
