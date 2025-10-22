let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array
    myLeads.push(inputEl.value)
    // instead of the hard-coded "www.awesomeleads.com" value
    console.log(myLeads)
})
