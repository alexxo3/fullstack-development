// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImages() {
    let imageContainer = document.getElementById("image-container")
    let imgElements = ""
    for (let i = 0; i < imgs.length; i++) {
        imgElements += `<img src="${imgs[i]}" />`
    }
    imageContainer.innerHTML = imgElements
}

renderImages()
