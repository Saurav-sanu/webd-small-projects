// selected all span tags
let nameerror = document.getElementById('input-name-error');
let rollerror = document.getElementById('input-roll-error');
let semerror = document.getElementById('input-sem-error');
let brancherror = document.getElementById('input-branch-error');
let emailerror = document.getElementById('input-email-error');
let passworderror = document.getElementById('input-password-error');

let submiterror = document.getElementById('submit-error');


function validatename()
{
    let name = document.getElementById('sign-input-name').value;
    if(name.length == 0)
    {
        nameerror.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[a-zA-Z]*$/))
    {
        nameerror.innerHTML = "Write full name";   
        return false;
    }

    nameerror.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateroll()
{
    let roll = document.getElementById('sign-input-roll').value;
    if(roll.length == 0)
    {
        rollerror.innerHTML = "Roll no. is required";
        return false;
    }
    if(!roll.match(/^[0-9]{4}[a-zA-Z]{3}[0-9]{4}$/))
    {
        rollerror.innerHTML = "Write full roll";   
        return false;
    }

    rollerror.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatesem()
{
    let sem = document.getElementById('sign-input-sem').value;
    if(sem.length == 0)
    {
        semerror.innerHTML = "Semester no. is required";
        return false;
    }
    if(!sem.match(/^[0-9]{1}$/))
    {
        semerror.innerHTML = "Single digit is needed";   
        return false;
    }

    semerror.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatebranch()
{
    let branch = document.getElementById('sign-input-branch').value;
    if(branch.length == 0)
    {
        brancherror.innerHTML = "Branch is required";
        return false;
    }
    brancherror.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validateemail()
{
    let email = document.getElementById('sign-input-email').value;
    if(email.length == 0)
    {
        emailerror.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9_\.\-]+[@][a-z]+[\.][a-z]{2,3}$/))
    {
        emailerror.innerHTML = "Wrong formate";   
        return false;
    }

    emailerror.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatepassword()
{
    let password = document.getElementById('sign-input-password').value;
    if(password.length == 0)
    {
        passworderror.innerHTML = "Password is required";
        return false;
    }

    if(password.length < 8 )
    {
        passworderror.innerHTML = "Password must be of 8 characters";
        return false;
    }
    passworderror.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

const studentdata = localStorage.getItem("details") ? JSON.parse(localStorage.getItem("details")): [];
function validateform()
{
    if(!validatename() ||!validateroll() || !validatesem() || !validatebranch()  ||!validatepassword() || !validateemail())
    {
        submiterror.innerHTML = 'please fill all the details carefully';
        submiterror.style.display = 'block';
        
        setTimeout(() => {
            submiterror.style.display = 'none';
        }, 3000);
        
        return false;
        
        /*      setTimeout( () =>
        {
            
        }, timeout)
        */
    }

    else
    {
        let dataname = document.getElementById('sign-input-name');
        let dataroll_no = document.getElementById('sign-input-roll');
        let datasemester = document.getElementById('sign-input-sem');
        let databranch = document.getElementById('sign-input-branch');
        let dataemail = document.getElementById('sign-input-email');
        let datapassword = document.getElementById('sign-input-password');
        
        
        let obj = {};
        
        obj.name = dataname.value;
        obj.roll = dataroll_no.value;
        obj.sem = datasemester.value;
        obj.branch = databranch.value;
        obj.email = dataemail.value;
        obj.password = datapassword.value;
        
        studentdata.push(obj);
        localStorage.setItem("details", JSON.stringify(studentdata));
        window.location.assign("index_login.html");
        
        alert("Data is loaded successfully");


    }
};

