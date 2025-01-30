// 1- Create a function that will display the smallest value in the array
let theArr = [4, 5, 6, 7, 10, 24]
function findSmallest(arr) {
    let lowest = Math.min(...arr)
    console.log(lowest)
}

findSmallest(theArr)

// 2- Function that will return your string in Alphabetical order 
function sortAlphabetically(str) {
    let result = str.split("").sort().join()
    console.log(result)
}

sortAlphabetically("omar")

// 3- Write a function that gets the factorial of the given number
function factorial(num) {
    let result = 1
    if (num < 0) {
        return
    }
    for (let i = num; i > 0; i--) {
        result *= i
    }

    console.log(result)
}

factorial(8)

// 4- A Write a function that lets you know if a number is Even or Odd . 
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(`Number ${num} is Even`)
    } else if (num % 2 != 0) {
        console.log(`Number ${num} is Odd`)
    }
}

evenOrOdd(71)

// 5-  Remove all Odd number(s) in an array and return a new array that contains Even numbers only. 
let array = [1, 2, 3, 15, 8, 6, 21]
function evenNum(arr) {
    let evenArr= []
    for (let i = 0; i <= array.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        }
    }

    console.log(evenArr)
}

evenNum(array)

// 6- Create a function that takes in an array as an argument, checks the data type of each element, and removes any elements that are strings. The function shouldreturn the modified array.
let arr = ["Ayham", 3, 5, "Alaa", 13, "coding"]
function numbersOnly(arr) {
    let result = arr.filter(element => typeof element !== "string")

    console.log(result)
}

numbersOnly(arr)

// 7- Return the sum of a number going back to it's root.
function addUp(num) {
    let sum = 0
    for (let i = num; i >= 0; i--) {
        sum += i
    }
    console.log(sum)
}

addUp(6)

// 8- Create a function that will accept an array and do the following: 
// ● Get the lowest element 
// ● Get the highest element 
// ● Get the length of array 
// ● Get the Average of all element; 
// ● Store these criteria in a new array 
let arr1 = [5, 6, 7, 1, 5]
function arrInfo(arr) {
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)
    let arrLength = arr.length
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arrLength

    let result = ["Lowest: " + lowest, "Highest: " + highest, "Array Lenght: " + arrLength, "Average: " + average]
    console.log(result)
}

arrInfo(arr1)

// 9- Convert the given number to a Roman Numeral
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ]

    let roman = "";
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            roman += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    console.log(roman)
}

convertToRoman(1989)

// 10- Return how many words was given 
function countWords(str) {
    let result = str.split(" ").length

    console.log(`NUmber of Words: ${result}`)
}

countWords("Hello From Oraange")

// 11- Create function to Multiply all elements in an array by it's length 
let arrayyyy = [2, 4, 7]
function multiplyByLength(arr) {
    let arrLength = arr.length

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arrLength
    }

    console.log(arr)
}

multiplyByLength(arrayyyy)

// 12- Create a function that will check if str1 ends with the characters in str2

function checkEnd(str, str2) {
    let result = str.endsWith(str2)

    console.log(result)
}

checkEnd("Hello From Orange", "ALLOHA")

// 13- Create a function that will repeat each string character two times
function doubleLetters(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(2)
    }

    console.log(result)
}

doubleLetters("Hello")

// 14-  Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for. 
let theArr2 = ['Ali', 'Mazen', 'Ayham', 'Murad']
function findIndex(arr, toSearch) {
    let result = arr.indexOf(toSearch)

    console.log(result)
}

findIndex(theArr2, "Ayham")

// 15- Create function to Return the absolute sum of all the array elements 
let theArray = [-1, -3, -4, -2, -7, -10]
function getTheAbsolute(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += Math.abs(arr[i])
    }

    console.log(result)
}

getTheAbsolute(theArray)