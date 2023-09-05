'use strict';

const btn = document.querySelector('.btn');
let pwd1 = document.querySelector('#password1');
let pwd2 = document.querySelector('#password2');

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Click event on generate password div
btn.addEventListener('click', () => {
    
    // Checks if both password div's have any content, if so clears them and calls generate password function
    if(pwd1.textContent && pwd2.textContent) {
        pwd1.textContent = "";
        pwd2.textContent = "";
        generatePasswords();
    } else {
        generatePasswords();
    };

    
})


// A function that generates a random string of characters from characters array. 
function generatePasswords() {
    for(let i = 0; i < 15; i++) {
        let indexOne = Math.trunc(Math.random() * characters.length);
        console.log(indexOne);
        let indexTwo = Math.trunc(Math.random() * characters.length);
        pwd1.textContent += characters[indexOne];
        pwd2.textContent += characters[indexTwo];
        
    }
};

