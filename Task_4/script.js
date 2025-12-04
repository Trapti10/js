const tasks = document.querySelectorAll(".task");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const noOftaskCompleted = document.querySelector(".noOftaskCompleted")
const markAll = document.querySelector(".markAll")
const unmarkAll = document.querySelector(".unmarkAll")


tasks.forEach(task=>{
    task.addEventListener("click",()=>{
        task.classList.toggle("completed");
        updateProgress()
    })
})

function updateAllTasks(action) {
    tasks.forEach(task => task.classList[action]("completed"));
    updateProgress();
}

function updateProgress() {
    let totalTasks = tasks.length;
    let completed = document.querySelectorAll(".task.completed").length;
 
    noOftaskCompleted.textContent = `${completed} of 5 Completed`

 let percent = (completed/totalTasks) * 100;

 progressBar.style.width = percent + "%";
  progressText.textContent = percent +"% completed";
}

markAll.addEventListener("click",()=>updateAllTasks("add"))
unmarkAll.addEventListener("click",()=>updateAllTasks("remove"))