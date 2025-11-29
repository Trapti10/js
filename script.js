const first = document.querySelector(".first")
const second = document.querySelector(".second")
const third = document.querySelector(".third")
const count1 = document.querySelector(".count1")
const count2 = document.querySelector(".count2")
const count3 = document.querySelector(".count3")
const total = document.querySelector(".total")

let index = 0;
let index2 = 0;
let index3 = 0;

first.addEventListener("click",(e)=>{
    const colors = e.currentTarget.dataset.color;
    console.log(colors)
    if(colors == "red"){

        first.style.background = "blue"
    }
    else{
        first.style.background = "red"
    }
    count1.textContent = index++;
})
second.addEventListener("click",()=>{
    second.style.background = "green";
    count2.textContent = index2++;
})
third.addEventListener("click",()=>{
    third.style.background = "red"
    count3.textContent = index3++;

})


let totalCount = ``
total.textContent = `Total clicks: ${totalCount}`

