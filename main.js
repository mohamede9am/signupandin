let allUser = JSON.parse(localStorage.getItem('user')) || [];

function addUser() {
    let namee = document.getElementById("user").value;
    let email = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;

    if (namee.length <= 3 || namee === '' || email === '' || pass === '') {
        alert("Please fill in all fields.");
        return;
    }

    let userExists = false;
    for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].email === email) {
            userExists = true;
            break;
        }
    }
    if (userExists) {
        alert("This email already exists.");
        return;
    }
    if (pass.length <= 3) {
        alert("Your password is too short. Please use at least 8 characters.");
        return;
    }
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    let newUser = {
        namee: namee,
        email: email,
        pass: pass,
    };

    allUser.push(newUser);
    localStorage.setItem('user', JSON.stringify(allUser));
    window.location.href = "login.html";
}

let submit = document.getElementById("submit");
submit.onclick = function() {
let allUser = JSON.parse(localStorage.getItem('user')) || [];

//  here herehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehere
//  here herehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehere
//  here herehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehere
//  here herehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehere
//  here herehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehereherehere

    let email = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
// up up up up up up up up up up up up up up up up up up up up up up up up up up .value !

    if (email === '' || pass === '') {
        alert("Please enter an email address and password.");
        return;
    }

    for(let i = 0; i < allUser.length; i++ ){
        if(allUser[i].email === email && allUser[i].pass === pass) {
            window.location.href = "dashboard.html";
            return;
        }
    } 
    alert("Please enter a valid email address and password.")
};