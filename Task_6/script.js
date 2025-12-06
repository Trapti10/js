const images = ['red', 'blue', 'yellow','green','pink']

const Image1 = document.querySelector(".Image1")
const counting = document.querySelector(".counting")
const dots = document.querySelectorAll(".dot")
const preBtn = document.querySelector(".preBtn")
const nextBtn = document.querySelector(".nextBtn")
const JumpFirst = document.querySelector(".JumpFirst")
const JumpLast = document.querySelector(".JumpLast")

let currentIndex = 0;


nextBtn.addEventListener("click",()=>{
    if(currentIndex < images.length - 1){
        currentIndex++;
        updateImg();
    }
})

preBtn.addEventListener("click",()=>{
    if(currentIndex > 0){
        currentIndex--;
        updateImg();
    }
})

function updateImg(){
    Image1.style.background = images[currentIndex];

    counting.textContent = `${currentIndex + 1} of ${images.length} Images`
   
    dots.forEach((d,index)=>{
        d.classList.toggle("fill", index === currentIndex)
    })

    preBtn.disabled  = currentIndex === 0;
    nextBtn.disabled  = currentIndex === images.length - 1;
}

JumpFirst.addEventListener("click", ()=>{
    currentIndex = 0;
    updateImg();
})
JumpLast.addEventListener("click", ()=>{
    currentIndex = images.length - 1;
    updateImg();
})

updateImg()