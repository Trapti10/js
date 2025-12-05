const redBtn = document.querySelector(".redBtn")
const blueBtn = document.querySelector(".blueBtn")
const greenBtn = document.querySelector(".greenBtn")
const yellowBtn = document.querySelector(".yellowBtn")

const redClicks = document.querySelector(".redClicks")
const blueClicks = document.querySelector(".blueClicks")
const greenClicks = document.querySelector(".greenClicks")
const yellowClicks = document.querySelector(".yellowClicks")

const leaderBtn = document.querySelector(".leaderBtn")
const resetBtn = document.querySelector(".resetBtn")


//counts start from 0
let red = 0;
let blue = 0;
let green = 0;
let yellow = 0;

redBtn.addEventListener("click", () => {
    red++;
    redClicks.textContent = `${red} clicks`
    leader()
})
blueBtn.addEventListener("click", () => {
    blue++;
    blueClicks.textContent = `${blue} clicks`
    leader()
})
greenBtn.addEventListener("click", () => {
    green++;
    greenClicks.textContent = `${green} clicks`
    leader()
})
yellowBtn.addEventListener("click", () => {
    yellow++;
    yellowClicks.textContent = `${yellow} clicks`
    leader()
})

// Updates the Leader
function leader() {
    const max = Math.max(red, blue, green, yellow)

    if (max === 0) {
        leaderBtn.textContent = "Leader: No clicks yet !";
        removeHighlight();
        return;
    }


    let leaders = [];

    if (red === max) leaders.push('Red')
    if (blue === max) leaders.push('Blue')
    if (green === max) leaders.push('Green')
    if (yellow === max) leaders.push('Yellow')

    if (leaders.length > 1) {
        leaderBtn.textContent = "Leader:Tie!";
        removeHighlight();
        leaders.forEach(color => {
            Highlight(color);
        })
        return;
    }
    leaderBtn.textContent = `Leader : ${leaders[0]} with ${max} clicks`;
    removeHighlight();
    Highlight(leaders[0]);
}
leader()

// Highlights the leader btn
function Highlight(color) {
    if (color === "Red") redBtn.classList.add("leader");
    if (color === "Blue") blueBtn.classList.add("leader");
    if (color === "Green") greenBtn.classList.add("leader");
    if (color === "Yellow") yellowBtn.classList.add("leader");
}

// Removes Highlight from the btns
function removeHighlight() {
    redBtn.classList.remove("leader");
    blueBtn.classList.remove("leader");
    greenBtn.classList.remove("leader");
    yellowBtn.classList.remove("leader");
}

// Reset all the fields
resetBtn.addEventListener("click", () => {
    blueClicks.textContent = '0 clicks'
    redClicks.textContent = '0 clicks'
    yellowClicks.textContent = '0 clicks'
    greenClicks.textContent = '0 clicks'

    leaderBtn.textContent = 'Leader: No clicks yet!'

    removeHighlight();
})