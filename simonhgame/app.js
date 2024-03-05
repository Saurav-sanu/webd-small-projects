let gameSeq=[];
let userSeq=[];
let started =false;
let level=0;
let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");
let btn=document.querySelector("button");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;


        levelup();
    }
});  

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randInx=Math.floor(Math.random()*3);
    let randColor=btns[randInx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300)
}

function checkAns(idx){
    // console.log("curr level:",level);
    // let idx=level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>
        press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}


function btnpress(){
    console.log(this);
    let btn =this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}