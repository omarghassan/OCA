// 1- Create an object with properties name, age, and gender and print its values to the console.
let person = {
    personName: "Omar",
    age: "24",
    gender: "Male"
}

console.log(person.personName, person.age, person.gender)

// 2- Create an object and add a new property to it using dot notation.
let person1 = {
    personName: "Omar",
    age: "24"
}
person1.gender = "Male"
for (let info in person1) {
    console.log(person1[info])
}

// 3- Create an object and add a new property to it using dot notation.
let person2 = {
    personName: "Omar",
    age: "24"
}
person2["gender"] = "Male"
for (let info in person2) {
    console.log(person2[info])
}

// 4- Access the value of a property in an object using dot notation.
console.log(person.personName)

// 5- Access the value of a property in an object using bracket notation.
console.log(person["personName"])

// 6- Use a for-in loop to iterate through the properties of an object.  
for (let info in person) {
    console.log(person[info])
}

// 7- Use the Object.keys() method to get an array of an object's properties.
console.log(Object.keys(person))

// 8- Use the Object.vaues() method to get an array of an object's properties.
console.log(Object.values(person))

// 9- Use the Object.entries() method to get an array of key-value pairs for an object.
console.log(Object.entries(person))

// 10- Use the Object.assign() method to merge two objects.
let anotherPerson = {
    personName: "Ahmad",
    age: 27
}

let anotherPersonGender = {
    gender: "Male"
}

console.log(Object.assign(anotherPerson, anotherPersonGender))

// 11- Use the Object.freeze() method to prevent changes to an object.
Object.freeze(anotherPerson)

// 12- Use the Object.seal() method to prevent changes to an object's properties but allows changes to its values.
Object.seal(anotherPerson)