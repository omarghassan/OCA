// 1- Write a function that makes each word in a string an element of an array.  
function returnArray(str) {
    let result = str.split(" ")
    console.log(result)
}

let strToArray = "Orange Jordan"
returnArray(strToArray)

// 2- Write a function that converts the first seven digits of a mobile phone number to a hidden form.
function hidePhoneNumber(phoneNumber) {
    let phoneNumToStr = phoneNumber.toString()
    let hiddenPart = "*".repeat(7)
    let visiblePart = phoneNumToStr.slice(7)

    let result = hiddenPart + visiblePart
    console.log(result)
}

hidePhoneNumber(7777777777)

//3- Write a function that converts an email address to a hidden form
function hideEmail(email) {
    let [localPart, domain] = email.split('@');
    let hiddenLocalPart = localPart.slice(0, 3) + '…';
    let result = hiddenLocalPart + '@' + domain;

    console.log(result)
}

hideEmail("omar@omar.com")

// 4- Write a function that turns the first letter of every word in a string to the upper case.
let input4 = "coding academy by orange"

function capitalizeFirstLetter(val) {
    console.log(String(val).charAt(0).toUpperCase() + String(val).slice(1));
}

capitalizeFirstLetter(input4)

// 5- Write a function that turns the first letter of every word in a string to the upper case. 
let input5 = "coding academy by orange"
function capitalizeFirstLetterInString(val) {
    let words = String(val).split(' ');
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let result = capitalizedWords.join(' ');
    console.log(result);
}

capitalizeFirstLetterInString(input5)

// 6- Write a function that flips a number
function flipNumber(num) {
    let result = num.toString().split("").reverse().join("")
    console.log(result)
}

flipNumber(12345)

// 7- Write a function that swaps the value of 2 variables in at least three ways.
function swapValue(x, y) {
    let z = x
    x = y
    y = z

    console.log(x, y)
}

function swapValue1(x, y) {
    [y, x] = [x, y]

    console.log(x, y)
}

function swapValue2(x, y) {
    x = x + y
    y = x - y
    x = x - y

    console.log(x, y)
}

swapValue(5, 7)
swapValue1(5, 7)
swapValue2(5, 7)

// 8- Write a function that removes an indexed character from a string.
function removeAtIndex(text, index) {
    let result = text.slice(0, index) + text.slice(index + 1)
    console.log(result)
}

removeAtIndex("Orange", 3)

// 9- Write a function that merges two strings after removing the first character of each one. 
function joinStrings(str1, str2) {
    let modifiedstr1 = str1.slice(1)
    let modifiedstr2 = str2.slice(1)

    result = modifiedstr1 + modifiedstr2

    console.log(result)
}

joinStrings("lora", "inge")

//10- Write a function that ensures a specific character appears in a string's first or last position.
function checkChar(char, str) {
    let result = str.startsWith(char) || str.endsWith(char)
    console.log(result)
}

checkChar("o", "orange")

// 11- Write a function that takes a string and returns every word in the string as an array element.
function returnInArray(str) {
    let result = str.split(" ")
    console.log(result)
}
let strToReturn = "Coding Academy By Orange"
returnInArray(strToReturn)

// 12- Write a function that takes a string and reorders the characters alphabetically
function sortAlphabetically(str) {
    let result = str.split("").sort().join()
    console.log(result)
}

sortAlphabetically("omar")