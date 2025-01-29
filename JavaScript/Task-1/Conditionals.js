// 1- 
// If someone is applying to the academy’s website, create the conditional to cover these situations:  
// ● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”  
// ● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”  
// ● If the candidate is younger than 18, print out: “You may join the kids' program.”  
// ● If the candidate is older than 60, print out: “You may join the seniors’ program.” 
// ● Calculate the age using the year of birth dynamically.  

function academyApply (birthYear) {

    let age = 2025 - birthYear

    if (age < 18) {
        console.log("You may join the kids program")
    } else if (age >= 18 && age <= 30) {
        console.log("You are eligible. Start Your Application")
    } else if (age > 30 && age < 60) {
        console.log("You are not eligible. You may join other programs")
    } else if (age > 60) {
        console.log("You may join the Seniors program")
    }
}
academyApply(1950)

// 2- Write a function that takes a string and switches the letters' case from upper to lower and vice versa
function switchCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    console.log(result);
}
switchCase("oMaR")

// 3- Write a function that takes a string, capitalizes each word's first letter, and removes all spaces 
function capitalize(str) {
    let string = str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');

        console.log(string)
}
capitalize("orange coding academy")

// 4- Write a function that removes a specific element in an array. 
let arrayToRemoveFrom = ["Coding", "Academy", "By", "Orange"]
function removeFromArray(num) {
    arrayToRemoveFrom.splice(num, 1)
    console.log(arrayToRemoveFrom)
}
removeFromArray(2)

// 5- Write a function that checks if a number is odd or even. 
function oddOrEven(num) {
    if (num % 2 === 0)
        console.log(`Number ${num} is even`)
    else if (num % 2 != 0)
        console.log(`Number ${num} is odd`)
}
oddOrEven(4)

// 6- Write a function that checks whether an input variable is a number. 
function checkIfNumber(num) {
    if (typeof(num) === "number")
        console.log("It is a number")
    else if (typeof(num) != "number")
        console.log("Not a number")
}
checkIfNumber("3")

// 7- Write a function that finds the largest of two numbers. 
function compareNumbers(num1, num2) {
    if (num1 > num2)
        console.log(`${num1} is the largest`)
    else if (num2 > num1)
        console.log(`${num2} is the largest`)
}
compareNumbers(7,4)

// 8- Write a function that checks if a triangle is equilateral, scalene, or isosceles
function checkTriangleType(a, b, c) {
    if (a === b && b === c) {
        console.log("The triangle is Equilateral")
    } else if (a === b || b === c || a === c) {
        console.log("The triangle is Isosceles")
    } else if (a !== b && b !== c && a !== c) {
        console.log("The triangle is Scalene")
    }
}
checkTriangleType(4, 4, 4)
checkTriangleType(5, 4, 4)
checkTriangleType(4, 5, 7)

// 9- Write a function that finds if a number is present in a given range.  
function isNumberInRange(number, min, max) {
    let result =  number >= min && number <= max;
    console.log(result)
}
isNumberInRange(9, 7, 12)

// 10- Write a function that checks whether a year is a leap year.  
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}
isLeapYear(2025)