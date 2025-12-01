const first = document.querySelector(".first")
const second = document.querySelector(".second")
const third = document.querySelector(".third")
const count1 = document.querySelector(".count1")
const count2 = document.querySelector(".count2")
const count3 = document.querySelector(".count3")
const total = document.querySelector(".total")
const resetBtn = document.querySelector(".resetAll")

let index =0;
let index2= 0;
let index3= 0;


function updateTotal(){
    total.textContent = `Total clicks : ${index+index2+index3}`;
}
first.addEventListener("click", (e) => {
    const colors = e.currentTarget.dataset.color;
    console.log(colors)
    if (colors == "red") {

        first.style.background = "blue"
        e.currentTarget.dataset.color = "blue";
    }
    else if (colors == "blue") {
        first.style.background = "green"
        e.currentTarget.dataset.color= "green"
        
    }
    else {
        first.style.background = "red"
        e.currentTarget.dataset.color= "red"
    }
    count1.textContent = ++index;
    updateTotal()
})
second.addEventListener("click", (e) => {
    const  colors2 = e.currentTarget.dataset.color;
   if (colors2 == "red") {

        second.style.background = "blue"
        e.currentTarget.dataset.color = "blue";
    }
    else if (colors2 == "blue") {
        second.style.background = "green"
        e.currentTarget.dataset.color= "green"
        colors2 = ""
    }
    else {
        second.style.background = "red"
        e.currentTarget.dataset.color= "red"
    }
    count2.textContent = ++index2;
    updateTotal()
})

third.addEventListener("click", (e) => {
    const colors3 = e.currentTarget.dataset.color;
    if (colors3 == "red") {
    
        third.style.background = "blue"
        e.currentTarget.dataset.color = "blue";
    }
    else if (colors3 == "blue") {
        third.style.background = "green"
        e.currentTarget.dataset.color= "green"
    }
    else {
        third.style.background = "red"
        e.currentTarget.dataset.color= "red"
    }
    count3.textContent = ++index3;
    updateTotal()

})

resetBtn.onclick = ()=>{
    first.style.background = "red";
    second.style.background = "blue";
    third.style.background = "green";
    count1.textContent =0;
    count2.textContent =0;
    count3.textContent =0;
    total.textContent = `Total click : 0`;
}
