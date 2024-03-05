let i = 0;
let images = [];
let slideTime = 5000; // 5 seconds

images[0] = "url('images/asset\ 5.jpeg')";
images[1] = "url('images/asset\ 6.jpeg')";
images[2] = "url('images/asset\ 7.jpeg')";
images[3] = "url('images/asset\ 8.jpeg')";
images[3] = "url('images/asset\ 9.jpeg')";
function changePicture() {
    let block = document.getElementsByClassName("header")[0];

    block.style.backgroundImage = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

// selecting all span tags
let usererror = document.getElementById("nameerror");
let passworderror = document.getElementById("passworderror");
let buttonerror = document.getElementById("btnerror");

function validatename() {
  let name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    usererror.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[a-zA-Z]*$/)) {
    usererror.innerHTML = "Write full name";
    return false;
  }

  usererror.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validatepassword() {
  let password = document.getElementById("password-name").value;
  if (password.length == 0) {
    passworderror.innerHTML = "Password is required";
    return false;
  }

  if (password.length < 8) {
    passworderror.innerHTML = "Password must be of 8 characters";
    return false;
  }
  passworderror.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateform() {
  if (!validatename() || !validatepassword()) {
    // Display an error message
    buttonerror.innerHTML = "Please fill all the details carefully";
    buttonerror.style.display = "block";

    // Hide the error message after 3 seconds
    setTimeout(() => {
      buttonerror.style.display = "none";
    }, 3000);

    return false;
  } else {
    const data = localStorage.getItem("details");
    const storedData = JSON.parse(data);

    const inputName = document.getElementById("contact-name").value;
    const inputPassword = document.getElementById("password-name").value;

    let foundObject = null;

    for (let i = 0; i < storedData.length; i++) {
      if (
        storedData[i].name === inputName &&
        storedData[i].password === inputPassword
      ) {
        foundObject = storedData[i];
        break;
      }
    }

    if (foundObject) {
      // Do something with foundObject
      localStorage.setItem("user", JSON.stringify(foundObject));

      
      window.location.href = "https://nsut-clone.netlify.app/";
      // window.location.assign("C:/Users/Dell/Desktop/Web Tech lab/NSUT Clone/index.html")

      window.alert("Welcome to the website " + foundObject.name + ". Your Roll Number is " + foundObject.roll);
      // console.log("Hello");

    } else {
      // Handle the case where no matching user is found
      alert("No matching user found");
    }
  }
}