// Add:
    // When adding use foreach to add user by user
    // The table will be dynamic, when adding and deleting the row will be removed

// Delete button will delete
// Edit Button will update(put)

document.addEventListener("DOMContentLoaded", () => {
    // 
    // 
    // 
})

document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm")
    const userTable = document.getElementById("userTable").querySelector("tbody")

    function addUser(user) {

        try {
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            const newUser = response.json()

            const newRow = document.createElement('tr');
            newRow.innerHTML = 
                `<td>${newUser.userName}</td>
                <td>${newUser.age}</td>
                <td>${newUser.address}</td>
                <td>${newUser.email}</td>`

            userTable.appendChild(newRow)

        } catch (error) {
            console.log(error)
        }
    }

    function getUsers() {
        try {
            fetch("http://localhost:3000/users")
                .then(response => response.json())
                .then(users => {
                    userTable.innerHTML = ""

                    users.forEach (user => {
                        const newRow = document.createElement("tr")
                        newRow.innerHTML = 
                        `<td>${user.userName}</td>
                        <td>${user.age}</td>
                        <td>${user.address}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>`
        
                        userTable.appendChild(newRow)
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }

    function deleteUser(id) {
        try {
            fetch("http://localhost:3000/users/" + id, {
                method: "DELETE"
            })
        } catch (error) {
            console.log(error)
        }
    }

    function updateUser(user) {
        try {
            fetch("http://localhost:3000/users/" + id, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
        } catch (error) {
            console.log(error)
        }
    }

    userForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const user = {
            userName: document.getElementById('userName').value,
            age: document.getElementById('age').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value
        };

        addUser(user)
        updateUser(user)

        userForm.reset()
    })

    getUsers()
    deleteUser(id)
})


// const userData = document.getElementById("userName").value

// document.addEventListener('DOMContentLoaded', () => {
//     const userForm = document.getElementById('userForm');
//     const userTableBody = document.getElementById('userTable').querySelector('tbody');

//     userForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const userName = document.getElementById('userName').value;
//         const age = document.getElementById('age').value;
//         const address = document.getElementById('address').value;
//         const email = document.getElementById('email').value;

//         // Add user to table
//         const newRow = document.createElement('tr');

//         newRow.innerHTML = `
//             <td>${userName}</td>
//             <td>${age}</td>
//             <td>${address}</td>
//             <td>${email}</td>
//         `;

//         userTableBody.appendChild(newRow);

//         // Clear form inputs
//         userForm.reset();
//     });
// });