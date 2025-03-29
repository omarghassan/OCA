
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Exercise 1:  Add a label to each of the input fields: username,
//  password, confirm password

// Username Label

let insertLabel = document.createElement("label");
insertLabel.id = "label";
insertLabel.className = "label";

let userLabel = document.createTextNode("UserName");
insertLabel.appendChild(userLabel);

let formInput = document.getElementById("form");
let firstInput = formInput.getElementsByTagName("input")[0];

formInput.insertBefore(insertLabel, firstInput);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Password Label

let insertLabel1 = document.createElement("label");
insertLabel1.id = "label";
insertLabel1.className = "label";

let password = document.createTextNode("Password");
insertLabel1.appendChild(password);

let secondInput = formInput.getElementsByTagName("input")[1]; 
formInput.insertBefore(insertLabel1, secondInput);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Confirm Password Label

let insertLabel2 = document.createElement("label");
insertLabel2.id = "label";
insertLabel2.className = "label";

let confirmPassword = document.createTextNode("Confirm Password");
insertLabel2.appendChild(confirmPassword);

let thirdInput = formInput.getElementsByTagName("input")[2]; 
formInput.insertBefore(insertLabel2, thirdInput);


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Exercise 2: Add a required validation to each input that shows 
// an error message next to the entry if it does not have any text entered. 

function chechEmpty() {
    let form = document.getElementById("form");

    let inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
        let errorMsg = input.nextElementSibling;
    
        if (input.value === '') {
            errorMsg.innerHTML = "Required";
        } else {
            errorMsg.innerHTML = "";
        }
    });
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Exercise 3: Add a further validation to check if the user input
//  in the password and confirm password inputs match. Show an error
//  message if they do not. 

function chechPassword() {
    let passwordCheck = document.getElementById("password").value
    let confirmPasswordCheck = document.getElementById("confirmPassword").value
    let passwordCheckMsg = document.getElementById("passwordCheck")

    if (passwordCheck !== confirmPasswordCheck) {
        passwordCheckMsg.innerHTML = "Passwords don't match";
    } else {
        passwordCheckMsg.innerHTML = "";
    }

}