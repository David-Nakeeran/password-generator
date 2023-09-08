'use strict';

const btn = document.querySelector('.btn');
let pwd1 = document.querySelector('#password1');
let pwd2 = document.querySelector('#password2');
let pwdLength = document.querySelector("#pwd-length");
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols')


// Password length global variable
let passwordLength;



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
});

// Listens for change of Select option value - alter password length
pwdLength.addEventListener('change', () => {
        passwordLength = pwdLength.value;
});


// Generates passwords based on conditional checks. 
function generatePasswords() {
        if(numbers.checked && symbols.checked) {
            generatesArr(characters);
        } else if(symbols.checked && !numbers.checked) {
            const filteredArr = removeNumbers(characters);
            generatesArr(filteredArr);
        } else if(numbers.checked && !symbols.checked) {
            const filteredArr = removeSpecialChars(characters);
            generatesArr(filteredArr);
        } else {
            const filteredArr = filterCharacters(characters);
            generatesArr(filteredArr);
        }   
};



// 2) Copy textContent of div to clipboard
function copyToClipboard() {
    const copy = document.querySelectorAll('.password');

    for(let i = 0; i < copy.length; i++) {
        copy[i].addEventListener('click', () =>{
            navigator.clipboard.writeText(copy[i].textContent).then(() => {
                alert('Copied to Clipboard');
            });
            
        })   
    };       
};
copyToClipboard();


// Filters array - removing special characters and numbers
function filterCharacters(arr) {
    let removed = removeNumbers(arr);
    return removed = removeSpecialChars(removed);
};

// Removes numbers from array
function removeNumbers(arr) {
    const noNum = arr.filter((item) => {
        return isNaN(item);
    });
    return noNum;
};

// Removes special characters from array
function removeSpecialChars(arr) {
    const str = arr.toString();
    const strFiltered = str.replace(/([^\w ]|_)/g, '');
    return strFiltered.split("");
};



// Generates an arr from arguments passed
function generatesArr(filteredArr) {
    for(let i = 0; i < passwordLength; i++) {
        let indexOne = Math.trunc(Math.random() * filteredArr.length);
        console.log(indexOne);
        let indexTwo = Math.trunc(Math.random() * filteredArr.length);
        pwd1.textContent += filteredArr[indexOne];
        pwd2.textContent += filteredArr[indexTwo]; 
    }
};