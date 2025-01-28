let age = 14;

if (age < 10) {
    console.log("Sorry, You are not allowed to enter")
} else if (age === 18) {
    console.log("Welcome, you are allowed to enter")
} else {
    console.log("Welcome, you are allowed to enter")
}

let message = (age < 10) ? "Sorry, You are not allowed to enter" : 
"Welcome, you are allowed to enter"

/////////////////////////////////////////////////////

let rank

if (rank === 90 || rank === 100) {
    rank = "A"
} else if (rank === 80) {
    rank = "B"
} else if (rank === 70) {
    rank = "C"
} else if (rank === 60) {
    rank = "D"
} else if (rank < 50) {
    rank = "F"
}