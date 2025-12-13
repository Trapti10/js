const colorText = document.querySelector(".colorText")
const lastColor = document.querySelector(".lastColor")
const Save = document.querySelector(".Save")
const colorBtns = document.querySelector(".colorBtns")
const chooseRandom = document.querySelector(".chooseRandom")
const applyFav = document.querySelector(".applyFav")

// array of colors
const colors = ['#7878d7', '#59caf7', '#4dd8b3', '#daf557', '#f374be', '#f5cf53']


let currentIndex = -1;
let lastIndex = -1;
let favoriteIndex = -1;

// creates a div and append to the coorBtns so that all the btns will be visible
colors.forEach((colorName, index) => {
    let setcolor = document.createElement("button");
    setcolor.innerText = colorName;
    setcolor.addEventListener("click", () => {
        updateColor(index);
    })
    colorBtns.appendChild(setcolor)
})

// selects all btns
const buttons = colorBtns.children;

// changes the background color and text on clicking the btns 
function updateColor(index) {
    if (currentIndex !== -1) {
        lastIndex = currentIndex;
        lastColor.innerText = "Last color: " + colors[currentIndex];
    }

    currentIndex = index;

    colorText.innerText = "Current color: " + colors[currentIndex];

    [...buttons].forEach(btn => {
        btn.classList.remove("active");
    })
    buttons[index].classList.add("active");
    document.body.style.backgroundColor = colors[index];

}

// selects rondom colors from the array
chooseRandom.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    updateColor(randomIndex)

})

// saves the color in localhost storage on clicking save as favorite btn
Save.addEventListener("click", () => {
    localStorage.setItem('favoriteColor', currentIndex)
    applyFav.style.display = 'block';

    alert("Saved")
})

// Apply the color on body saved in localstorage
applyFav.addEventListener('click', () => {
    const favColorIndex = localStorage.getItem("favoriteColor")
    if (favColorIndex !== null) {
        updateColor(Number(favColorIndex));
    }
    alert("Applied")
})
if (localStorage.getItem("favoriteColor") !== null) {
    applyFav.style.display = "block";
}



