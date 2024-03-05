/*class 4
const name="saurav";
let age=20;
let state;
let email="sauravsanu100@gmail.com";
 
console.table({name,age,state,email});
*/



// let score="33";
// //33->33
// //33abs->nan(not a number);
// let no=Number(score);
// console.log(typeof score);


// console.log(typeof score);
// console.log("hitesh"); 

// let loogedin =0;
// let boolean=Boolean(loogedin);
// console.log(boolean);

// console.log(1+2+"2");

// const id=Symbol('123');
// const anotherId=Symbol('123');
// console.log(anotherId);
// console.log(id);

// let myoBJ={
//     name:"saurav",
//     age:22,
// };
// let my={
//     name1:"saurav",
//     rollno:20,
// }
// const name1=my.name1;
// const rool=my.rollno;

// console.log(`hello my name is ${my.name1}  and my age is ${my.rollno}`);
// const string=new String ('hitesh');

// const newstring=string.slice(-6,4);
// console.log(newstring);

// // console.log((Math.floor(Math.random()*6)+1));

// let mydate=new Date();
// // let mydate2=new Date(2003,5,26);
// console.log(mydate.toString())
// // console.log(typeof mydate)

// let mytimestamp=Date.now();
// console.log(Math.floor(mytimestamp/1000));



// const array=[1,2,4,4,6,7,8];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

//array
// const marvel=["ironmam","spiderman"]
// const dc=["superman","batman"]
// const india=["herobhakti","shaktiman"]

// const all=marvel.concat(dc.concat(india));
// console.log(all);

// const all2=[...marvel,...dc,...india];
// console.log(all2);

// const newarray=[1,2,3,[4,5,6,7,8],9,10,[11,12,13,14],15];
// const myarray=newarray.flat(Infinity);
// console.log(myarray);

//object


//object literal
// const mysym=Symbol('123');
// const JsUser={
//     name:"saurav",
//     [mysym]:"123",
//     age:20,
//     location:"jaipur",
//     email:"saurav@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["monday","saturday"]
// }
// const app={
//     name:"priyanshu",
//     age:21
// }
// const regualarUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"anurag",
//             lastname:"singh",
//         }
//     }
// }
// const obj1={
//     1:"a",
//     2:"b"
// }
// const obj2={3:"c",4:"d"}
// const obj4={5:"e",6:"f"}
// // const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4);
// const obj5={...obj1,...obj2,...obj3}
// console.log(obj3);
// console.log(obj5);

// console.log(regualarUser.fullname.userfullname.firstname);

// console.log(JsUser["email"]);
// // Object.freeze(JsUser)
// console.log(JsUser[mysym])
// JsUser.email="saurav100@gmail.com";
// console.log(JsUser)

// JsUser.greetingTwo=function(){
//     console.log(`hello js user,${this.name}`);
// }
// console.log(JsUser.greetingTwo());

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));
// console.log(JsUser.hasOwnProperty('isLoggedIn'));


// const course={
//     coursename:"js in hindi",
//     price:89,
//     courseInstructor:"hitesh"
// }
// const {courseInstructor:instructor}=course//destructuring in object
// console.log(instructor)
// console.log(course["courseInstructor"]);

//JSON
// {
//     "name":"hitesh",
//     "course":"js",
//     "price":"200"
// }


//function
// function sayMyName(){
//     console.log("saurav");
// }
// function addnumber(number1,number2){
//     console.log(number1+number2);
// }
// function addnumber(number1,number2){
//     let result=number1+number2;
//     return result;
// }
// // const reslt=addnumber(2,34);
// console.log("result:",addnumber(2,3));
// sayMyName();


// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,300,400));

// const user={
//     name:"hitesh",
//     price:239
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
// }
// handleObject(user);
// handleObject({
//     name:"sam",
//     price:399
// });

// const myNewArray=[200,300,400,600]

// function returnSecondValue(getArray){
//     return getArray[1];
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,600]))


// if(true){
//     let a=20
//     const b=30
//     c=40
// }
// console.log(a)
// console.log(b)
// console.log(c)

// function one(){
//     const username="hitesh"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two();
// }

// one();


// if(true){
//     const username="hitesh"
//     if(username==="hitesh"){
//         const website="youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);


// function addone(num){
//     return num+1
// }
// const addTwo=function addtwo(num){
//     return num+2
// }
// addone(5);
// addTwo(5);
// console.log("addone",addone(5));
// console.log("addone",addTwo(5));

//arrow function
// const user={
//     username:"hitesh",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username} welcome to the website`)
//         console.log(this);
//     }
// }
// user.welcomeMessage();

// (()=>{
//     console.log(this);
// })();

// ((name)=>{
//     console.log(`db connected ${name}`);

// })('hitesh');

// falsy value
// false,0,-0,BigInt 0n,"",null ,undefined,NaN


// truthy value
// "0",'false'," ",[],{},function(){}


//nullish coalescing operator(??):null and undefined

// let val;
// val=5??10
// val=undefined??100

// val=null??190??20
// console.log(val);

// for(let index=0;index<10;index++){
//     console.log(index);
// }

// const date=new Date();
// console.log(date.toLocaleTimeString());



// maps are iterable but object are not iterable
// const map=new Map();
// map.set("in",'india')
// map.set("a",'america')
// map.set("ag",'argetina')
// map.set("d",'darjeling')
// map.set("dg",'dogy')

// // console.log(map);

// //loop in map
// for(const [key,value] of map){
//     console.log(key,'->',value);
// }


// const myObject={
//     'js':"javascript",
//     'cpp':"c++",
//     'rb':"ruby"
// }

// for(const key in myObject){
//     console.log(key,":", myObject[key]);
// }

//inmportant
// const myCoding=[
//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"python",
//         languageFileName:"py"
//     },
//     {
//         languageName:"cpp",
//         languageFileName:"c++"
//     },
// ]

// // myCoding.forEach( (item)=>{
// //     console.log(item.languageName)
// // })

// const coding=["js","ruby","java","pythong","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values);




// let myName="hitesh    "
// console.log(myName.length);

// let myHeroes=["thor","spiderman"]

// let heroPower={
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower:function(){
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.hitesh=function(){
//     console.log("hitesh is present in all object")
// }
// Array.prototype.heyHitesh=function(){
//     console.log(`hitesh says hello`);
// }
// // heroPower.hitesh();
// // myHeroes.hitesh();
// // heroPower.heyHitesh();
// // myHeroes.heyHitesh();

// const User={
//     name:"chai",
//     email:"chai@gmail.com"
// }

// const Teacher={
//     makeVideo:true
// }

// const TeachingSupport={
//     isAvailable:false
// }
// const TASupport={
//     makeAssignment:'JS assignment',
//     fulltime:true,
//     __proto__:TeachingSupport
// }
// Teacher.__proto__=User

// //modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)

// let anotherUserName="chaiaurcode   "

// String.prototype.trueLength=function(){
//     console.log(`${this}`);
//     console.log(`true length is : ${this.trim().length}`);

// }
// anotherUserName.trueLength()

// "hitesh".trueLength()
// "icetea".trueLength()



// function setUserName(username){
//     //complex db call
//     this.username=username
//     console.log("called")
// }

// function createUser(username,email,password){
//     setUserName.call(this,username)

//     this.email=email
//     this.password=password
// }

// const chai =new createUser("chai","chai@gamil","124")
// console.log(chai)


//classes

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai=new User("chai","chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


// //behidn the scene
// function User(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUserName=function(){
//     return`${this.username.toUpperCase()}`
// }
// const tea=new User("tea","tea@gamil.com","123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUserName());


//inheritance

// class User{
//     constructor(username){
//         this.username=username
//     }

//     logme(){
//         console.log(`username is ${this.username}`);
//     }
// }
// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)

//         this.email=email
//         this.password=password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }

// const chai=new Teacher("chai","chai@gmail.com","123")
// chai.addCourse();

// const masalachai=new User("masalachai")

// // masalachai.addCourse()

// masalachai.logme();


/* static */

// class User{
//     constructor(username){
//         this.username=username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }

//     createId(){
//         return `123`
//     }
// }

// const hitesh=new User("hitesh")
// // console.log(hitesh.createId());

// class Teacher extends User{
//     constructor(username,email){
//         super(username)
//         this.email=email
//     }
// }

// const iphone=new Teacher("iphone","iphone@gmail.com")
// console.log(iphone.logMe());


//math 

// const desc=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desc)

// const chai={
//     name:'ginger chai',
//     price:250,
//     isAvailable:false,

//     orderChai:function(){
//         console.log("chai nhi bni");
//     }
// }


// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// Object.defineProperty(chai,'name',{
//     // writable:false,
//     enumerable:true
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// for(let[keys,value] of Object.entries(chai)){
//     if(typeof value!== 'function'){
//         console.log(`${keys} : ${value}`);

//     }
// }




//getter and setter

//using class

// class user{
//     constructor(email,password){
//         this.email=email,
//         this.password=password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email=value
//     }
//     get password(){
//         return `${this._password}hitesh`
//     }
//     set password(value){
//         this._password=value
//     }
// }

// const hitesh=new user("hitesh@gmail.com","abc")
// console.log(hitesh.password);
// console.log(hitesh.email);


// // USIGN FUNCTION-modeern syntax
// function User(email,password){
//     this._email=email,
//     this._password=password

//     Object.defineProperty(this,'email',{
//         get:function(){
//             return this._email.toUpperCase()
//         },
//         set:function(value){
//             this._email=value
//         }
//     })
//     Object.defineProperty(this,'password',{
//         get:function(){
//             return this._password.toUpperCase()
//         },
//         set:function(value){
//             this._password=value
//         }
//     })
// }

// const chai=new User("chai@gmail.com","chai")

// console.log(chai.email);
// console.log(chai.password);


//using object
const User={
    _email:"h@gail.com",
    _password:"abc",

    getemail(){
        return this._email.toUpperCase()
    },
    setemail(value){
        this._email=value
    },
    getpassword(){
        return this._password.toUpperCase()
    },
    setpassword(value){
        this._password=value
    }
}

const tea=Object.create(User)
console.log(tea._email)