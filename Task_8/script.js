const selectMessage = document.getElementById("selectMessage")
const show = document.querySelector(".show")
const messageBox = document.querySelector(".messageBox")
const counter = document.querySelector(".counter")
const clearBtn = document.querySelector(".clearBtn")

let counts = 0;
show.addEventListener("click",()=>{
    let value = selectMessage.value;
    
    if(value === "") return;

    else if (value === "error"){
        messageBox.style.background = "red";
        messageBox.textContent = "✗ Something went wrong";
      
    }
    else if (value === "success"){
        messageBox.style.background = "green";
        messageBox.textContent = "✓ Operation successful!"; 
       
    }
    else if (value === "warning"){
        messageBox.style.background = "orange";
        messageBox.textContent = "⚠ Please review your input";
       
    }
    else if (value === "info") {
        messageBox.style.background = "blue";
        messageBox.textContent = "i Here's some information";
    }

    messageBox.style.display = "block"
    counts++;
    counter.textContent= `Message shown: ${counts}`;
    clearBtn.style.display = "block";

})
  
        clearBtn.addEventListener("click",()=>{
              counts = 0;
            counter.textContent = "Message shown: 0"
            messageBox.style.display = "none"
            selectMessage.value = "";
        })