let c = (...args) => console.log(...args)
let cc = (a,b) => console.log(a,' = ',b)
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let messageEl = document.getElementById('message-el')
let passwordCopiedMessageEl = document.getElementById('password-copied-message-el')
let set = characters

// c(set)
let buttonEl = document.getElementById('button-el')
let passwords = []
let password1El = document.getElementById('password1-el')
let password2El = document.getElementById('password2-el')
let lengthEl = document.getElementById('length-el')
lengthEl.value = 3
passwordLength = lengthEl.value
let btnAdd = document.getElementById('btn-add')
let btnMinus = document.getElementById('btn-minus')


function generate() {
    
    // c('generate()')
    
   
    let randNum
    passwordCopiedMessageEl.textContent = 'click a password to copy'
    // cc('passwordLength',passwordLength)
    for (let i = 0; i < 2;i ++) {
        let password = ''
        for (let j= 0; j < passwordLength; j++) {
            randNum = Math.floor(Math.random() * set.length)
            password += set[randNum]
            
        }
       
        if (i == 0) 
            password1El.value = password
        else
            password2El.value = password
    }
}

function addLength() {
    // c('addLength()')
    passwordLength = lengthEl.value
    if (passwordLength >= 3) { 
        
        if (passwordLength < 20) {
            passwordLength++
            // c(passwordLength)
            lengthEl.value = passwordLength
            generate()
        }
        
    }
}
function subtractLength() {
    // c('subtractLength')
    passwordLength = lengthEl.value
    if (passwordLength > 3 ) {
        passwordLength--
        lengthEl.value = passwordLength
        generate()
    }
}

function setCharacters() {
    set = characters
    generate()
    messageEl.textContent = 'characters chosen'
}

function setNumbers() {
    set = numbers
    generate()
    messageEl.textContent = 'numbers chosen'

}

function setLetters() {
    set = letters
    generate()
    messageEl.textContent = 'letters chosen'

}

function setsymbols() {
    set = symbols
    generate()
    messageEl.textContent = 'symbols chosen'

}

function copyPassWord1() {
    let copyText = document.getElementById('password1-el').value

    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', copyText);
        e.preventDefault();
     }, true);
    document.execCommand('copy')
    console.log('copied text : ', copyText);
    passwordCopiedMessageEl.innerText = '('+copyText + ')' + ' password one copied'
    
    
} 

function copyPassWord2() {
    let copyText = document.getElementById('password2-el').value

    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', copyText);
        e.preventDefault();
     }, true);
    document.execCommand('copy')
    passwordCopiedMessageEl.textContent = '('+copyText + ')' + ' password two copied'
    
    
} 







