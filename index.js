const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

function generatePass() {
    // let i = 0
    // while (i < 15) {
    //     newpassword += Math.floor(Math.random() * characters.length)
    //     i++
    // }
    
    let newpassword = ""
    let newpassword2 = ""
    
    for (let i = 0; i < 15; i++) {
        let randomPassword = Math.floor(Math.random() * characters.length)
        newpassword += characters[randomPassword]
    }
    
    for (let i = 0; i < 15; i++) {
        let randomPassword = Math.floor(Math.random() * characters.length)
        newpassword2 += characters[randomPassword]
    }
    
    passOne.textContent = newpassword
    passTwo.textContent = newpassword2
}


// function copyPass() {
//     let passwordOne = passOne.textContent
//     let passwordTwo = passTwo.textContent

//     navigator.clipboard.writeText(passwordOne)
//     navigator.clipboard.writeText(passwordTwo)
// }

