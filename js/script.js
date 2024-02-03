// JavaScript to toggle the "open-book" class on scroll for the about section
document.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('.about-section');
    const aboutSectionOffset = aboutSection.offsetTop;
    const hasAnimated = false;

    const scrollPosition = window.scrollY;

    if (scrollPosition > aboutSectionOffset - window.innerHeight / 2 && !hasAnimated) {
        aboutSection.classList.add('open-book');
        hasAnimated = true;
    }
});

// JavaScript to toggle the active-nav class on click for the mobile menu icon
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('active-nav');
});

// Auto type the mantra when the user enters the mission section
document.addEventListener('DOMContentLoaded', function () {
    const mantraText = '"Sarve Bhavantu Sukhinaha" is the main mantra of our organization.';
    const mantraElement = document.getElementById('mantra');
    mantraElement.innerHTML = ""; // Clear any existing text
    let index = 0;

    function typeMantra() {
        mantraElement.innerHTML += mantraText[index];
        index++;

        if (index < mantraText.length) {
            setTimeout(typeMantra, 150); // Adjust typing speed (milliseconds)
        }
    }

    typeMantra();
});

// Auto-rotating quotes
const quotes = [
    { text: "The youth is the hope of our future.", author: "Jose Rizal" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Give me blood, and I shall give you freedom.", author: "Subhash Chandra Bose" },
    { text: "Inquilab Zindabad!", author: "Bhagat Singh" },
    { text: "Arise, awake, and stop not until the goal is reached.", author: "Swami Vivekananda" }
];

let currentIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const currentQuote = quotes[currentIndex];

    if (isTyping) {
        quoteElement.textContent = currentQuote.text.slice(0, charIndex);
        charIndex++;

        if (charIndex > currentQuote.text.length) {
            isTyping = false;
            setTimeout(() => {
                isTyping = true;
                charIndex = 0;
                currentIndex = (currentIndex + 1) % quotes.length;
            }, 3000); // Wait for 3 seconds before typing the next quote
        }
    } else {
        quoteElement.textContent = currentQuote.text;
        authorElement.textContent = `- ${currentQuote.author}`;
    }
}

setInterval(typeQuote, 100); // Typing speed (milliseconds)
