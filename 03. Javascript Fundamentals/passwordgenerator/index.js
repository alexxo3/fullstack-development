// --- Character Sets ---
const charSets = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_+={}[]:;<>.,?/~`|\\"
};

// --- DOM Elements ---
const generateBtn = document.getElementById("generate-btn");
const password1El = document.getElementById("pw-1");
const password2El = document.getElementById("pw-2");
const copyBtns = document.querySelectorAll(".copy-btn");

// Settings Elements
const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");
const includeUppercaseEl = document.getElementById("include-uppercase");
const includeLowercaseEl = document.getElementById("include-lowercase");
const includeNumbersEl = document.getElementById("include-numbers");
const includeSymbolsEl = document.getElementById("include-symbols");

// --- Helper Functions ---

/**
 * Gets a random character from a given string.
 */
function getRandomCharacter(str) {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

/**
 * Generates a single password based on the current settings.
 */
function createPassword() {
    const length = parseInt(lengthSlider.value);
    const includeUpper = includeUppercaseEl.checked;
    const includeLower = includeLowercaseEl.checked;
    const includeNumbers = includeNumbersEl.checked;
    const includeSymbols = includeSymbolsEl.checked;

    let allowedChars = "";
    let guaranteedChars = [];

    if (includeUpper) {
        allowedChars += charSets.upper;
        guaranteedChars.push(getRandomCharacter(charSets.upper));
    }
    if (includeLower) {
        allowedChars += charSets.lower;
        guaranteedChars.push(getRandomCharacter(charSets.lower));
    }
    if (includeNumbers) {
        allowedChars += charSets.numbers;
        guaranteedChars.push(getRandomCharacter(charSets.numbers));
    }
    if (includeSymbols) {
        allowedChars += charSets.symbols;
        guaranteedChars.push(getRandomCharacter(charSets.symbols));
    }

    // Check if any character set is selected
    if (allowedChars.length === 0) {
        return "Select options"; // Return an error message
    }

    // Fill the rest of the password length
    const remainingLength = length - guaranteedChars.length;
    let passwordChars = [...guaranteedChars];

    for (let i = 0; i < remainingLength; i++) {
        passwordChars.push(getRandomCharacter(allowedChars));
    }

    // Shuffle the final array to mix guaranteed chars
    shuffleArray(passwordChars);

    // Join and return
    return passwordChars.join("");
}

// --- Main Function ---

/**
 * Generates and displays two new passwords.
 */
function generatePasswords() {
    const passwordOne = createPassword();
    const passwordTwo = createPassword();

    password1El.textContent = passwordOne;
    password2El.textContent = passwordTwo;
}

/**
 * Copies the password text from the target element to the clipboard.
 */
async function copyToClipboard(event) {
    const btn = event.currentTarget;
    const targetId = btn.dataset.target;
    const targetEl = document.getElementById(targetId);
    const textToCopy = targetEl.textContent;

    if (!textToCopy || textToCopy === "Select options") {
        return; // Don't copy empty text or errors
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        // Visual feedback
        btn.textContent = "✅";
        btn.classList.add("copied");

        setTimeout(() => {
            btn.textContent = "📋";
            btn.classList.remove("copied");
        }, 1500); // Reset after 1.5 seconds

    } catch (err) {
        console.error("Failed to copy password: ", err);
    }
}

// --- Event Listeners ---

// Update the length display when the slider moves
lengthSlider.addEventListener("input", (e) => {
    lengthValue.textContent = e.target.value;
});

// Generate passwords when the button is clicked
generateBtn.addEventListener("click", generatePasswords);

// Add click listeners to all copy buttons
copyBtns.forEach(btn => {
    btn.addEventListener("click", copyToClipboard);
});

// --- Initial Generation ---
generatePasswords(); // Generate passwords on page load
