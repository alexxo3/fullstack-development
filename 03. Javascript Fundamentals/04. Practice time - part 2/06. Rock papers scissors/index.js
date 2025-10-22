let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getRandomHand() {
    let randomIndex = Math.floor( Math.random() * hands.length )
    return hands[randomIndex]
}

// Call the function to test it

console.log( getRandomHand() )
