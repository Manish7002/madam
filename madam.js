// Quotes rotation
const quotes = [
  "Some people make your world brighter just by being in it.",
  "You don’t always need reasons to care, sometimes it just happens.",
  "The rarest people are those who stay the same—real and true.",
  "Time spent with genuine souls is never wasted.",
  "You make life feel lighter, warmer, and simply better."
];

let quoteIndex = 0;
const quoteBox = document.getElementById("quote");

function changeQuote() {
  // Fade-out + fade-in effect
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    quoteBox.textContent = quotes[quoteIndex];
    quoteBox.style.opacity = 1;
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 500);
}
setInterval(changeQuote, 4000);
changeQuote();

// Toggle collapse
const toggleBtn = document.getElementById("toggleMessage");
const messageBox = document.getElementById("messageBox");

toggleBtn.onclick = () => {
  if (!messageBox.classList.contains("show")) {
    messageBox.classList.add("show");
    toggleBtn.textContent = "Hide Message 💕";
  } else {
    messageBox.classList.remove("show");
    toggleBtn.textContent = "Show Message 💌";
  }
};

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 900);
