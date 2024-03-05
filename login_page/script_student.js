const data = localStorage.getItem("user");
    const storedData = JSON.parse(data);


document.getElementById("name-student").innerHTML = storedData.name;
document.getElementById("roll-student").innerHTML = storedData.roll;
document.getElementById("sem-student").innerHTML = storedData.sem;
document.getElementById("branch-student").innerHTML = storedData.branch;
document.getElementById("email-student").innerHTML = storedData.email;
document.getElementById("password-student").innerHTML = storedData.password;