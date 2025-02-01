let array = [1, 2, 3, 4, 5]

// 1- Create an array of numbers and use the forEach() method to print each element to the console.
array.forEach(function (arr) {
    console.log(arr)
})

// 2- Use the map() method to square each element in an array of numbers and return a new array. 
console.log(array.map(x => x * x))

// 3- Use the filter() method to create a new array containing only even numbers from an original array. 
console.log(array.filter(function (num) {
    return num % 2 === 0
}))

// 4- Use the reduce() method to sum up all elements in an array of numbers.
console.log(array.reduce(function (num, sum) {
    return sum += num
}))

// 5- Use the sort() method to sort an array of strings alphabetically.
let fruits = ["manga", "cherry", "banana", "peach", "grapes"]
console.log(fruits.sort())

// 6- Use the reverse() method to reverse the order of elements in an array.
console.log(fruits.reverse())

// 7- Use the concat() method to combine two arrays into a single array.
let arr1 = [1, 2, 3], arr2 = [4, 5, 6]
console.log(arr1.concat(arr2))

// 8- Use the slice() method to extract a portion of an array.
let theArray = [1, 2, 3, 4, 5, 6, 7]
console.log(theArray.slice(2, 4))

// 9- Use the splice() method to add and remove elements from an array.
theArray.splice(4, 0, 9, 10, 11)
console.log(theArray)

theArray.splice(0, 9)
console.log(theArray)

// 10- Use the indexOf() method to find the index of a specific element in an array.
console.log(array.indexOf(4))

// 11- Use the join() method to convert an array to a string.
console.log(array.join())

// 12- Use the split() method to convert a string to an array.
let theString = "1, 2, 3, 4, 5"
console.log(theString.split(","))

// 13- Use the length property to find the number of elements in an array.
console.log(array.length)

// 14- Use the for...of loop to iterate through an array.
for (item of array) {
    console.log(item)
}

// 15- Use the for...in loop to iterate through an array.
for (item in array) {
    console.log(item)
}

// 16- Use the Array.isArray() method to check if an object is an array.
console.log(Array.isArray(array))

// 17- Use the Array.from() method to convert an array-like object to an array.
let transformToArray = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
}

console.log(Array.from(transformToArray))

// 18- Use the Array.of() method to create an array with a set of elements.
console.log(Array.of(1, 2, 3))

// 19- Use the Array.prototype.fill() method to fill an array with a specific value.
console.log(array.fill(0, 0, 3))

// 20- Use the Array.prototype.copyWithin() method to copy a sequence of elements within an array
anotherArray = [1, 2, 3, 4, 5]
console.log(anotherArray.copyWithin(4, 0, 3))