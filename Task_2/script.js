const Bio = document.querySelector(".bio");
const Skills = document.querySelector(".skills");
const Hobbies = document.querySelector(".hobbies");
const showBtn1 = document.querySelector(".showBtn1")
const showBtn2 = document.querySelector(".showBtn2")
const showBtn3 = document.querySelector(".showBtn3")
const showAll = document.querySelector(".showAll")
const hideAll = document.querySelector(".hideAll")
const sectionVisible = document.querySelector(".sectionVisible")

window.addEventListener("DOMContentLoaded", () => {

// Show/Hide the content on clicking the btns
    showBtn1.addEventListener("click", () => {
        Bio.classList.toggle("hidden");
        showBtn1.textContent = Bio.classList.contains("hidden")?"Show Bio":"Hide Bio";
        sectionCount();
    });
    showBtn2.addEventListener("click", () => {
        Skills.classList.toggle("hidden");
        showBtn2.textContent = Skills.classList.contains("hidden")?"Show Skills":"Hide Skills";
        sectionCount();
    })
    showBtn3.addEventListener("click", () => {
        
        Hobbies.classList.toggle("hidden");
        showBtn3.textContent = Hobbies.classList.contains("hidden")?"Show Hobbies":"Hide Hobbies";
        sectionCount();
    })
    
//  show all sections 
showAll.addEventListener("click", ()=>{
    Bio.classList.remove("hidden");
    Skills.classList.remove("hidden");
    Hobbies.classList.remove("hidden");
    showBtn1.textContent = "Hide Bio";
    showBtn2.textContent = "Hide Skills";
    showBtn3.textContent = "Hide Hobbies";
    sectionCount();
})

//  hide all sections 
    hideAll.addEventListener("click", ()=>{
        Bio.classList.add("hidden");
        Skills.classList.add("hidden");
        Hobbies.classList.add("hidden");
        showBtn1.textContent = "Show Bio";
        showBtn2.textContent = "Show Skills";
        showBtn3.textContent = "Show Hobbies";
        sectionCount();
    })

// Count how many sections are visible
    function sectionCount(){
        const allSection = document.querySelectorAll(".bio:not(.hidden), .skills:not(.hidden), .hobbies:not(.hidden)").length;

      sectionVisible.textContent = `Section Visible : ${allSection}`;
    }

})