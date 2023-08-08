const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passOneEl = document.getElementById("passOne")
// let passTwoEl = document.getElementById("passTwo")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword() {
    let passwordLength = document.getElementById("inputNum").value
    if (passwordLength < 41 && passwordLength > 9) {
        let randomPassword = ""
        for (let i = 0; i < passwordLength; i++){
            randomPassword += getRandomCharacter()
        }
        return randomPassword
    }
}

function generateBtn() {
    passOneEl.textContent = generatePassword()
    // passTwoEl.textContent = generatePassword()
}

function copyToClipOne() {
    navigator.clipboard.writeText(passOneEl.textContent)
}

// function copyToClipTwo() {
//     navigator.clipboard.writeText(passTwoEl.textContent)
// }
