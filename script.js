const quotes = [
  "The only way to go great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobes",
  "Your time is limited, so dont waste it living someone elsses life. - Steve Jobs",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote);
