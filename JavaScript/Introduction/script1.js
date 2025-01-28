let firstName = "Omar"
let middleName = 'Ghassan'
let lastName = "Abu Deyak"

fullname = `${firstName} ${middleName} ${lastName}`
console.log(fullname)

console.log(fullname.charAt(3))
let welcome = "Hello today is Tuesday"
console.log(welcome.indexOf("Tuesday"))
console.log(welcome.lastIndexOf("day"))

console.log(welcome.slice(6, 15))
console.log(welcome.toUpperCase())
console.log(welcome.toLowerCase())

console.log(welcome.includes("Welocme"))
console.log(welcome.includes("Hello"))

console.log(welcome.split(""))
console.log(welcome.split(" "))
console.log(welcome.split("e"))

console.log(welcome.replace("Tuesday", "Wednesday"))

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

let num1 = 5
let num2 = 5.0
let num3 = "5"

console.log(num1 == num2)
console.log(num1 == num3)
console.log(num1 === num3)

console.log(Math.PI)
console.log(Math.trunc(Math.PI))
console.log(Math.round(Math.PI))
console.log(Math.round(4.4))
console.log(Math.round(4.6))

console.log(Math.ceil(4.4))
console.log(Math.floor(4.6))

console.log(Math.min(15, 12, 17, 7, 0, 5, 4))
console.log(Math.max(15, 12, 17, 27, 0, 5, 4))

console.log(Math.pow(4, 2))
console.log(Math.sqrt(81))
console.log(Math.abs(-81))
console.log(Math.random() * 100)
console.log(Math.abs(-81))
