// Get DOM elements
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");

// Conversion constants
const METERS_TO_FEET = 3.28084;
const LITERS_TO_GALLONS = 0.264172;
const KILOGRAMS_TO_POUNDS = 2.20462;

// Length conversion function
const convertLength = (value) => {
    const metersToFeet = (value * METERS_TO_FEET).toFixed(3);
    const feetToMeters = (value / METERS_TO_FEET).toFixed(3);
    return `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
};

// Volume conversion function
const convertVolume = (value) => {
    const litersToGallons = (value * LITERS_TO_GALLONS).toFixed(3);
    const gallonsToLiters = (value / LITERS_TO_GALLONS).toFixed(3);
    return `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
};

// Mass conversion function
const convertMass = (value) => {
    const kilogramsToPounds = (value * KILOGRAMS_TO_POUNDS).toFixed(3);
    const poundsToKilograms = (value / KILOGRAMS_TO_POUNDS).toFixed(3);
    return `${value} kilograms = ${kilogramsToPounds} pounds | ${value} pounds = ${poundsToKilograms} kilograms`;
};

// Main conversion function
const performConversion = () => {
    const inputValue = parseFloat(inputEl.value);

    // Validate input
    if (isNaN(inputValue) || inputValue === "") {
        lengthEl.textContent = "Please enter a valid number";
        volumeEl.textContent = "Please enter a valid number";
        massEl.textContent = "Please enter a valid number";
        return;
    }

    if (inputValue < 0) {
        lengthEl.textContent = "Please enter a positive number";
        volumeEl.textContent = "Please enter a positive number";
        massEl.textContent = "Please enter a positive number";
        return;
    }

    // Perform conversions
    lengthEl.textContent = convertLength(inputValue);
    volumeEl.textContent = convertVolume(inputValue);
    massEl.textContent = convertMass(inputValue);
};

// Event listener for convert button
convertBtn.addEventListener("click", performConversion);

// Event listener for Enter key press
// inputEl.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         performConversion();
//     }
// });

// Optional: Real-time conversion on input change
// inputEl.addEventListener("input", () => {
//     if (inputEl.value !== "") {
//         performConversion();
//     }
// });
