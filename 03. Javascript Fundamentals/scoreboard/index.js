let homeScore = 0;
let homeScoreNumber = document.getElementById("home-score-number")
let guestScore = 0;
let guestScoreNumber = document.getElementById("guest-score-number")


function updateScore(team, points) {
    if (team === "home") {
        homeScore += points;
        homeScoreNumber.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        guestScoreNumber.textContent = guestScore;
    }
}

function highlightLeader() {
    if (homeScore > guestScore) {
        homeScoreNumber.style.color = "#00FF00";
        guestScoreNumber.style.color = "#F94F6D";
    } else if (guestScore > homeScore) {
        guestScoreNumber.style.color = "#00FF00";
        homeScoreNumber.style.color = "#F94F6D";
    } else {
        homeScoreNumber.style.color = "#F94F6D";
        guestScoreNumber.style.color = "#F94F6D";
    }
}


function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreNumber.textContent = homeScore;
    guestScoreNumber.textContent = guestScore;
}
