function test(){
    var name=document.querySelector("#username").value;
    var ema=document.querySelector("#email").value;
    var pass=document.querySelector("#password").value;

    var user=localStorage.setItem("name",name);
    var em=localStorage.setItem("email",ema);
    var pas=localStorage.setItem("password",pass);


    
    var user=localStorage.getItem("name",name);
    var em=localStorage.getItem("email",ema);
    var pas=localStorage.getItem("password",pass);
};