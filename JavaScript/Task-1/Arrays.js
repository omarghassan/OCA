// Write the code to get this array outputted in the following forms:  
let array = ["Coding", "Academy", "By", "Orange"]  

// [“Coding”, “Academy”, “By”, “Orange”, “Jordan”]  
array.push("Jordan")

// [“Coding”, “Academy”]  
console.log(array.slice(0, 2))

// [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”]  
array.unshift("Welcome", "To")

// [“Academy”, “By”, “Orange”]  
console.log(array.slice(1, 4))

// “Coding Academy By Orange”  
console.log(array.join(" "))

// [“Coding”, “Academy”, “By”, “Orange”]  
console.log(array)

// [“Coding”, “Orange”]  
console.log(array[0], array[array.length - 1])

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Using these two arrays write the JavaScript code that performs these operations on them:  
let fruits = ["banana", "apple", "orange", "watermelon"]; 
let vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

// a. Remove the last item from the vegetable array.  
vegetables.pop()
console.log(vegetables)

// b. Remove the first item from the fruit array.  
fruits.shift()
console.log(fruits)
// c. Find the index of "orange."  
console.log(fruits[1])

// d. Add that number to the end of the fruit array.  
fruits.push("1")
console.log(fruits)

// e. Find the length of the vegetable array.  
console.log(vegetables.length)

// f. Add that number to the end of the vegetable array.  
vegetables.push("3")
console.log(vegetables)

// g. Put the two arrays together into one array. Fruit first. Call the new Array "food".  
let food = fruits.concat(vegetables)
console.log(food)

// h. Remove 2 elements from your new array starting at index 4.  
food.splice(4, 2)
console.log(food)

// i. Reverse your array.
food.reverse()
console.log(food)

// j. Turn the array into a string.  
console.log(food.join(" "))
