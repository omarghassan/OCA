// 1- Write the expressions in JavaScript syntax for the following accounting equations (analyze the operation from the input and output):

// ** Cash Flow ratio
let cash = 1000
let liabilities = 500
let cashFlowRatio = cash / liabilities

// ** Net Income
let revenues = 1000
let expenses = 500
let netIncome = revenues - expenses

// ** Total Assets
liabilities = 1000
let equity = 500
let totalAssets = liabilities + equity
console.log(totalAssets)

// ** Net Income (using profit margin and sales)
let profit = 1000
let sales = 500
let netIncomeP = 1000 * 500
console.log(netIncomeP)

// ** Average
let average = (7 + 6 + 2) / 3

// ** Discount
let listPrice = 150
let discount = 30
let discountEquation = listPrice - (listPrice * discount / 100)
console.log(discountEquation)

// ** Age Limit

// ** Exponential
let num1 = 2
let num2 = 3
let exponential = 2 ** 3
console.log(exponential)

// ** Remainder
let number1 = 10
let number2 = 4
let remainder = 10 % 4
console.log(remainder)

// 2- Find the output for these expressions and justify the output according to JavaScript interpretation:

typeof(100) // 100 is a numeric value, so it's type is a number

typeof(73.9) // 73.9 is a numeric value, so it's type is a number

typeof(Nan) // NaN stands for "Not-a-Number", but it is still considered a numeric value in JavaScript, so its type is a number

typeof("Water") // Water is a srting value, so it's type is a string

typeof(9 != 11) // 9 != 11 is a comparison operation that evaluates to true, which is a boolean value, so its type is boolean

typeof("Orang" + "e") // The + operator concatenates two strings, so "Orang" + "e" results in "Orange"

typeof("Orange" - "s") // The - operator is not defined for strings, so attempting to subtract one string from another results in NaN

typeof("4" + "8") // The + operator concatenates two strings, so "4" + "8" results in "48"

typeof("4" - "8") // The - operator converts the strings to numbers and performs the subtraction, so "4" - "8" results in -4

typeof("name" + 3) // The + operator concatenates a string and a number, so "name" + 3 results in "name3"

typeof("name" - 3) // The - operator is not defined for a string and a number, so attempting to subtract a number from a string results in NaN

typeof(82 * "word") // The * operator is not defined for a number and a string, so attempting to multiply a number by a string results in NaN, so it's type is a number

typeof("hello" + 1) // The + operator concatenates a string and a number, so "hello" + 1 results in "hello1", so it's type is string

typeof(1 + true) // The + operator converts true to 1 and performs the addition, so it's type is a number
typeof("hello" + true) // The + operator concatenates a string and a boolean, which it's type is a boolean
typeof(Infinity) // Infinity is a numeric value representing infinity, so its type is "number"
typeof(1 == '1') // The == operator performs type coercion, so 1 (number) is equal to '1' (string) after type conversion, so it's type is boolean
typeof(1 === '1') // The === operator checks for strict equality without type coercion, so 1 (number) is not equal to '1' (string), so it's type is boolean