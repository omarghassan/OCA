let user = {
    userName: "Omar",
    role: "Ritered",
    age: 37
}

localStorage.setItem("user", JSON.stringify(user))

let storedUser = JSON.parse(localStorage.getItem("user"))

console.log("user Name:", storedUser.userName);
console.log("user Name:", storedUser.age);
console.log("user Name:", storedUser.role);

////
function saveToLocalStorage(){

    const input = document.getElementById('datainput').value;
    localStorage.setItem('myData',input);
    alert("Data is saved")
}


function loadToLocalStorage(){
 const storeData = localStorage.getItem('myData');

 const output = document.getElementById('output');
    if(storeData){
        output.textContent = "storeData = " + storeData;

    } else{
        output.textContent = "No Data Found";

    }
}

function removeFRomLocalStorage(){

    localStorage.removeItem('myData');
    alert("Data is removed");
}