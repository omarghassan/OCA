// 1- Write a script to print out all even numbers between 1 and 50, twice. Use 1 for loop and 1 while loop.  
for (let i = 0; i <= 50; i+= 2) {
    console.log(i)
}

let i = 0;
while (i <= 50) {
    console.log(i);
    i += 2;
}

// 2- Try solving the previous exercise using a single for loop.   
for (let i = 0; i <= 50; i+= 2) {
    console.log(i)
}

// 3- Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the odd ones.  
for (let i = 0; i <= 50; i+= 2) {
    console.log(i)
}

for (let i = 1; i <= 50; i+= 2) {
    console.log(i)
}

// 4- Fizz-Buzz! Write a script that does the following:  
// ● Counts from 1 to 100 and prints out something for each number:  
    // ○ If the number is divisible by 3, print "Fizz"  
    // ○ If the number is divisible by 5, print "Buzz"  
    // ○ If the number is divisible by both 3 and 5, print "FizzBuzz"  
    // ○ If the number does not meet any of the above conditions, just print the number Output:  
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// 5- Rewrite the script with a function so that each iteration will trigger a function call. 
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz")
    } else if (num % 3 === 0) {
        console.log("Fuzz")
    } else if (num % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(num)
    }
}

fizzBuzz(5)

// 6- Create a recursive solution. A FizzBuzz function calls itself to continue the series. 

function fizzBuzzRecursive(num) {
    if (num > 100) {
        return;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz")
    } else if (num % 3 === 0) {
        console.log("Fuzz")
    } else if (num % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(num)
    }
    fizzBuzzRecursive(num + 1)
}

fizzBuzzRecursive(1)

// 7- Write a function that takes a number and converts it to certain banknotes

function convertToBanknotes(amount, bankNotes) {
    let result = [];
    for (let i = 0; i < bankNotes.length; i++) {
        while (amount >= bankNotes[i]) {
            amount -= bankNotes[i];
            result.push(bankNotes[i]);
        }
    }
    console.log(result);
}

convertToBanknotes(38, [100, 50, 25, 10, 5, 1])

// 8- Write a function that counts the existence of a specific character within a string, despite the case.

function countLetter(str, ltr) {
    let count = 0;
    let lowerStr = str.toLowerCase();
    let lowerLtr = ltr.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerLtr) {
            count++
        }
    }
    console.log(count)
}

countLetter("Coding Academy By Orange", "")

// 9- Write for loops that accomplish the following tasks:  
// a. Print the numbers 0 - 20, one number per line.  
for (let i = 0; i <= 20; i++) {
    console.log(i)
}

// b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.  
for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.  
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

// 10-  Initialize two variables to hold the string 'CodingAcademy' and the array [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks:  
// e. Print each element of the array to a new line. 
let arr = [7, 500, 'KH404', 'black', 36] 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// f. Print each string character in reverse order to a new line.  
let str = "CodingAcademy"
for (let i = str.length - 1; i >= 0; i--) {
   console.log(str[i])
}

// 11- Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays: Define an empty evens array to hold the even numbers and an odds array for the odd numbers. In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.

let arr1 = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124]
let evenNumbers = []
let oddNumbers = []

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        evenNumbers.push(arr1[i])
    } else if (arr1[i] % 2 != 0) {
        oddNumbers.push(arr1[i])
    }
}

console.log(evenNumbers)
console.log(oddNumbers)

// 12- Write the code to create meals using elements from these arrays, ensuring the rules below.  
// The number of meals is determined as an input.  
// • The meals must include one item from each category.  
// • No two meals should be identical.  

let protein = ['chicken', 'tofu', 'beef', 'fish', 'beans'] 
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'] 
let vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'] 
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']  
let desert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'] 

function createMeals(numMeals) {

    let meals = new Set();

    while (meals.size < numMeals) {
        let meal = [
            protein[Math.floor(Math.random() * protein.length)],
            grain[Math.floor(Math.random() * grain.length)],
            vegetable[Math.floor(Math.random() * vegetable.length)],
            beverage[Math.floor(Math.random() * beverage.length)],
            desert[Math.floor(Math.random() * desert.length)]
        ];

        meals.add(meal.join(', '));
    }

    console.log(Array.from(meals)) ;
}

createMeals(5)