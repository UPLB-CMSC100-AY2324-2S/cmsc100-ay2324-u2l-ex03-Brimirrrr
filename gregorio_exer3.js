//This function is used to check if string has capital letters in it
function checkCapitalization(string) {
    const capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let checked = 0
    for (let i = 0; i < capital.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (capital[i] === string[j]) {
                checked = checked + 1
            }
        }
    }
    return checked
}

//Check if string has a number
function checkNumber(string) {
const number = '0123456789'
    let checked = 0
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (number[i] === string[j]) {
                checked = checked + 1
            }
        }
    }
    return checked
}

function checkSmall(string) {
    const bruh = string
    const small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let checked = 0
    for (let k = 0; k < small.length; k++) {
        for (let l = 0; l < bruh.length; l++) {
            if (small[k] === bruh[l]) {
                checked = checked + 1
            }
        }
    }
    return checked
}


//This function checks if the given strings are capitalized or not
function checkString(string1, string2) {
    const smallCount1 = checkSmall(string1)
    const smallCount2 = checkSmall(string2)
    const capitalizedCount1 = checkCapitalization(string1)
    const capitalizedCount2 = checkCapitalization(string2)
    const numCount1 = checkNumber(string1)
    const numCount2 = checkNumber(string2)
  

    if(string1 != string2){ //checks if both string are not equal
        return console.log('Wrong password')
    } 

    if(string1.length < 8 && string2.length < 8){
        return console.log('insufficient number of characters')
    }

    if(smallCount1 >= 1 && smallCount2 >= 1 && capitalizedCount1 >= 1 && capitalizedCount2 >= 1 && numCount1 >= 1 && numCount2 >= 1){
        return true
    } else {
        return console.log('invalid password')
    }
    
}

function reversePassword(password) {
    return password.split('').reverse().join('');
}

function storePassword(name, string1, string2){
    const string = checkString(string1, string2)

    if(string == true){
        const reversedPassword = reversePassword(string1)
        const person = { name: name, newpassword: reversedPassword };
        return console.log(person) //yes
    }
}

storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "pass1234", "pass1234") // prompts “Invalid Password!”
storePassword("John", "pass1234", "pass1234567") //prompts “Wrong Password!”
storePassword("John", "pass1", "pass1") //prompts “Insufficient Number of Strings!”




