// 1- Use a for loop to print numbers from 1 to 10 using for. 
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2- Use a while loop to print numbers from 1 to 10 using while.
let i = 1
while (i <= 10) {
    console.log(i)
    i++
}

// 3- Use a for loop to iterate through an array and print each element.  
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 4- Use a for loop to print even numbers from 0 to 10.
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 5- Use a for loop to print the sum of numbers from 1 to 10.
let sum = 0
for (let i = 0; i <= 10; i++) {
    sum += i
}
console.log(sum)

// 6- Use a for loop to find the largest number in an array.
let largestArray = [1, 2, 3, 4, 5]
function findGreatest(arr) {
    let largest = 0
    for (let i = 0; i < arr.length; i++) {
        largest = Math.max(...arr)
    }
    console.log(largest)
}
findGreatest(largestArray)

// 7- Use a for loop to find the largest number in an array.
let smallestArray = [1, 2, 3, 4, 5]
function findSmallest(arr) {
    let largest = 0
    for (let i = 0; i < arr.length; i++) {
        largest = Math.min(...arr)
    }
    console.log(largest)
}
findSmallest(smallestArray)

// 11- Use a for loop to find the average of numbers in an array 
let averageArray = [1, 2, 3, 4, 5]
function averageOfArray(arr) {
    let average = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] 
    }
    average = sum / arr.length
    console.log(average)
}

averageOfArray(averageArray)

// 12- Use a for loop to find the factorial of a number. 
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

factorial(5)

// 13-  Use a for loop to print the Fibonacci sequence up to a given number.
function fibonacci(num) {
    let a = 0, b = 1, next;
    if (num > 0) {
        console.log(b)
    }
    for (let i = 2; i <= num; i++) {
        next = a + b
        if (next > num) {
            break
        }
        a = b
        b = next
        console.log(next)
    }
}

fibonacci(10)

// 14-  Use a for loop to print the prime numbers up to a given number.
function printPrime(num) {
    if (num <= 1) {
        return
    }
    for (let i = 2; i <= num; i++) {
        let isPrime = true
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(i)
        }
    }
}

printPrime(20)

// 15- Use a for loop to print a multiplication table for a given number.
function printMultiplicationTable(num) {
    for (let i = 0; i <= 12; i++) {
        let result = num * i
        console.log(`${num} * ${i} = ${result}`)
    }
}

printMultiplicationTable(5)

// 16-  Use a for loop to print the elements of a 2D array.
let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function print2DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}

print2DArray(array2D)

// 17- Use a for loop to print the elements of an array in reverse order. 

let array = [1, 2, 3, 4, 5]

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
}

// 18- Use a for loop to print the elements of an array in a specific range.
function printRange(arr, start, end) {
    for (let i = start; i <= end; i++) {
        console.log(arr[i])
    }
}

printRange(array, 2, 4)

// 19-  Use a for loop to print the elements of an array with a specific step.
function stepArray(arr, step) {
    for (let i = 0; i < arr.length; i+= step) {
        console.log(arr[i])
    }
}

stepArray(array, 2)

// 20- Use a for loop to check if a number is in an array.
function checkInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            console.log(`Number ${num} is in the array`)
        }
    }
}

checkInArray(array, 3)

// 21-  Use a for loop to find the frequency of a number in an array.
let anotherArray = [1, 1, 2, 3, 4, 5, 1, 5]

function countArray(arr, num) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            count++
        }
    }
    console.log(`The Frequency of the number (${num}) in the array is: ${count}`)
}

countArray(anotherArray, 1)