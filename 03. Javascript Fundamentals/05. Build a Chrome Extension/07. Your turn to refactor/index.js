// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", saveLead)
function saveLead() {
    console.log("Button clicked!")
}
