const sampleText = document.querySelector(".sampleText");
const sizeDisplay = document.getElementById("sizeDisplay")
const smallerBtn = document.getElementById("smallerBtn")
const largerBtn = document.getElementById("largerBtn")
const fontSlider = document.getElementById("fontSlider")
const resetBtn = document.getElementById("resetBtn")
const presetBtn = document.querySelectorAll(".presetBtn")

// Initialized size 
let currentSize = 16;

// will update the font size on clicking on different btns
 function updateSize(size) {
    currentSize = size;
    sampleText.style.fontSize = currentSize + "px";
    sizeDisplay.textContent = `Current size: ${currentSize}px`;
    fontSlider.value = currentSize;

    smallerBtn.disabled = currentSize <= 10;
    largerBtn.disabled = currentSize >= 40;
}

// decrease font size by 2
smallerBtn.addEventListener("click", () => {
    updateSize(currentSize - 2)
})

// increase font size by 2
largerBtn.addEventListener("click", () => {
    updateSize(currentSize + 2)
})

// chnage font size to small, medium and large 
presetBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const size = btn.getAttribute("data-size");
        updateSize(size)
    });

// changes font size on sliding the slider
fontSlider.addEventListener("click",()=>{
    const sliderValue = fontSlider.value 
    updateSize(sliderValue);
})

// reset font size to deafault font size(16)
resetBtn.addEventListener("click", () => {
    updateSize(16);
    })
});

updateSize(16);