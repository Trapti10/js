const likeBtn = document.querySelector(".likeBtn")
const dislikeBtn = document.querySelector(".dislikeBtn")
const displayText = document.querySelector(".displayText")
const resetBtn = document.querySelector(".reset")
const likeCountDisplay = document.getElementById("likeCount")
const dislikeCountDisplay = document.getElementById("dislikeCount")
const score = document.getElementById("score")

let likes =0;
let dislikes =0;
let userClick = null;

function updateText(){

    dislikeCountDisplay.textContent = dislikes;
    likeCountDisplay.textContent = likes;
    score.textContent = `Score : ${likes-dislikes}`
    
    
    if(userClick === 'like'){
        displayText.textContent = "You voted : 👍";
        
    }
    else if(userClick === 'dislike'){
        displayText.textContent = "You voted : 👎";
    }
    else{
        displayText.textContent = "You haven't voted yet.";
    }
}

likeBtn.addEventListener("click", ()=>{
    if(userClick === null){
        likes++;
        userClick = 'like'
    }
    else if(userClick === 'dislike'){
        likes++;
        dislikes--;
        userClick = 'like'
    }
    else{
        likes--;
        userClick = null
    }
    updateText()
})
dislikeBtn.addEventListener("click", ()=>{
    
    if(userClick === null){
        dislikes++;
        userClick = 'dislike'
    }
    else if(userClick === 'dislike'){
        dislikes--;
        userClick = null;
    }
    else{
        likes--;
        dislikes++;
        userClick = 'dislike'
    }
    updateText()
    
})
updateText()

resetBtn.addEventListener("click" ,()=>{
    likeCountDisplay.textContent = 0;
    dislikeCountDisplay.textContent = 0;
    score.textContent = `Score : 0`
    displayText.textContent = "You haven't voted yet.";
    
})
