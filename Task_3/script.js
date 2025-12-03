const input = document.querySelector(".input")
const copyBtn = document.querySelector(".copyBtn")
const typedText = document.querySelector(".typedText")
const textInUpperCase = document.querySelector(".textInUpperCase")
const textInLowerCase = document.querySelector(".textInLowerCase")
const charCount = document.querySelector(".charCount")
const clearBtn = document.querySelector(".clearBtn")
const copyText = document.querySelector(".copyText")

window.addEventListener("DOMContentLoaded",()=>{

    // Live Input Display 
    input.addEventListener("input", ()=>{
        const text = input.value;
        typedText.textContent = text;
        
        textInUpperCase.textContent = text.toUpperCase();
        
        textInLowerCase.textContent = text.toLowerCase()
        count()
        console.log(text.length)
    })

    // Charactor Count
    function count(){
        const textValue = input.value;
        charCount.textContent = `Total charactors : ${textValue.length}`;
    }
    
    // Copy text
    copyBtn.addEventListener("click", async()=>{

        const textToCopy = textInUpperCase.textContent;
        if(textToCopy.length == 0){
            return;
        }
        await navigator.clipboard.writeText(textToCopy);
        copyText.textContent =  "Copied!";
        setTimeout(() => {
            copyText.textContent =  "";
        }, 2000);
        
    })
})

// Clear All the fields
clearBtn.addEventListener("click", ()=>{
    input.value = "";
    textInLowerCase.textContent = ""
    typedText.textContent = ""
    textInUpperCase.textContent = ""
    charCount.textContent = `Total charactors : 0`;
})