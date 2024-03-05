// Get references to elements
const loginButton = document.getElementById("login-button");
const actionButton = document.getElementById("action-button");

// Add a login event listener
loginButton.addEventListener("click", () => {
    alert("You are logged in!");
});

// Add an action event listener
actionButton.addEventListener("click", () => {
    alert("You performed an action!");
});
