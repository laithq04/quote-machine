const quotes = [
  "Make it work, then make it better.",
  "Done is better than perfect.",
  "Simplicity is the soul of efficiency.",
  "First, solve the problem. Then, write the code.",
  "Programs must be written for people to read.",
];

const quoteEl = document.getElementById("quote");
const button = document.getElementById("newQuote");

button.addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = random;
});
