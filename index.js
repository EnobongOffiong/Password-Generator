let passwordLength = document.querySelector(".change-password-length")
let length = passwordLength.min
let password1 = document.querySelector(".one")
let password2 = document.querySelector(".two")
let password3 = document.querySelector(".three")
let password4 = document.querySelector(".four")


let passwordArray =[]

passwordLength.addEventListener('input', function() {
     length = passwordLength.value
     
   });

const characters = [
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z',
    '*','&','$','#','!','?','<','>','+'
    ]

function generatePassword(){
    
    for(j=0; j<4; j++){
        let password = ""
    for(i = 0; i< length; i++){
        password += characters[Math.floor(Math.random() * characters.length)]
        
    }
    passwordArray[j] = password
    }
    
    password1.textContent = passwordArray[0]
    password2.textContent = passwordArray[1]
    password3.textContent = passwordArray[2]
    password4.textContent = passwordArray[3]
    
    
    
}




