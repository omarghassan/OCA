// 1- Write the code to make this string “Welcome to Orange” outputted in the following forms using string methods:

let message = "Welcome to Orange"

// Output: WELCOME TO ORANGE  
console.log(message.toUpperCase())

// Output: TO
console.log(message.slice(8, 10).toUpperCase())

// Output: Hello from Orange
console.log(message.replace("Welcome to", "Hello from"))

// Output: welcome to orange  
console.log(message.toLocaleLowerCase())

// Output: 17 
console.log(message.length)

// Output: Welcome to “Orange” 
console.log(message.replace('Orange', '"Orange"'))

// Output: Welcome to Orange Jordan
console.log(`${message} Jordan`)

// 2- Write the code that replaces all occurrences of the first letter of a string with '*'  
// Sample Input: cactus  
// Sample Output: ca*tus

let input = "cactus"

function replaceFirstLetter(str) {
    if (str.length === 0) return str;
    const firstLetter = str[0];
    const parts = str.split(firstLetter);
    return firstLetter + parts.slice(1).join('*');
}

let output = replaceFirstLetter(input);
console.log(output);