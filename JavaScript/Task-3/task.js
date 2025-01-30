// 1- Check if a variable named "age" is greater than 18 and display a message "You are an adult" if it is.
let age = 24
if (age >= 18)
    console.log("You are an adult")

// 2- Check if a variable named "score" is less than or equal to 50 and display a message "You failed the test" if it is. 
let score = 49.5
if (score <= 50)
    console.log("You are a loser, you FAILED the test")

// 3-  Check if a variable named "name" is equal to "John" and display a message "Hello, John" if it is.
let theName = "John"
if (theName === "John")
    console.log(`Hello, ${theName}`)

// 4- Check if a variable named "day" is not equal to "Saturday" and "Sunday" and display a message "It's a weekday" if it is
let day = "Thursday"
if (day.toLowerCase() !== "saturday" && day.toLowerCase() !== "sunday")
    console.log("It is a weekday, go to your work")

// 5-  Check if a variable named "num" is divisible by 2 and display a message "The number is even" if it is. 
let num = 40
if (num % 2 === 0) {
    console.log("The number is even")
}

// 6- Check if a variable named "char" is a letter and display a message "It's a letter" if it is.
let char = "a"
if (typeof(char) === "string" && char.length === 1)
    console.log("It is a letter")

// 7- Check if a variable named "list" is an array and display a message "It's an array" if it is. 
let list = [1, 2, 3]
if(Array.isArray(list))
    console.log("It is an array")

// 8- Check if a variable named "x" is a positive number and display a message "x is a positive number"

let x = 9
if (x > 0)
    console.log("POSITIVE number")

// 9- Check if a variable named "y" is a negative number and display a message "y is a negative number"

let y = -9
if (y < 0)
    console.log("NEGATIVE number")

// 10- Check if a variable named "z" is a multiple of 3 and display a message "z is a multiple of 3" if it is.

let z = 9
if (z % 3 === 0)
    console.log("z is a multiple of 3")

// 11- Check if a variable named "gpa" is greater than or equal to 3.0 and display a message "Congratulations, you have a good GPA!" if it is.

let gpa = 3.5
if (gpa >= 3) 
    console.log("Congratulations, you have a good GPA!")

// 12- Check if a variable named "password" is at least 8 characters long and display a message "Your password is strong" if it is.

let password = 'myPasswordisVeryStrong@12345'
if (password.length >= 8)
    console.log("Your password is strong")

// 13- -Check if a variable named "age" is between 18 and 65 (inclusive) and display a message "You are of working age" if it is.

let ageOfPerson = 38
if (age >= 18 && age <= 65)
    console.log("You are of working age")

// 14- Check if a variable named "color" is either "red", "green", or "blue" and display a message "color is a primary color" if it is. 

let color = "red"
if (color === "red" || color === "green" || color === "blue")
    console.log(`The Color (${color}) is a primary color`)

// 15- using Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function.

function isVaildNumber(num) {
    if (!isNaN(num))
        console.log(`${num} is a valid number`)
}

isVaildNumber(24)