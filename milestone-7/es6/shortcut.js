// truty value
// 1."sujan" 
// 2.5 any number 
// 3.true 
// 4.[]
// 5.{}

// false  value 
// 1.'' empty string 
// 2. 0 
// 3.false 
// 4. null 
// 5. undefined 


// check the truth value  

let myVar = 5;
if (myVar) {
    myVar = myVar * 100
} else {
    myVar = myVar * 5
}
// check the false value  
let myMoney = 50;
if (!myMoney) {
    myMoney = myMoney * 100
} else {
    myMoney = myMoney * 5
}

const money = 800;
const place = 'feni'
let food
if (money > 100) {
    food = "biriyani"
} else {
    food = "cha biscupt"
}

// tarnari oparetor 

let food1 = money > 100 ? "biriyari" : "cha biscut "
// console.log(food1);

let food2 = (money > 100 && place == "feni") ? "ami fenite biriyani khabo" : "ami Dhaka cha biscot khabo"
// console.log(food2);

// number to string sortcut 
const num1 = 52;
console.log(typeof (num1));
const numStr = num1 + ''
console.log(typeof (numStr));

// string to number 

const input = " 500"
const inputNum = +input
console.log(typeof (inputNum));

const isActive = false;
const showUser = () => console.log("display user")
const hideUser = () => console.log("hide user")

// isActive ? showUser() : hideUser
// যদি প্রথম টা সত্যি হয় তাহলে পরের টা accecute hbe 
isActive && showUser()
// যদি প্রথম বা ২য় টা যে কোন একটা সত্যি হয় তাহলে পরের টা accecute hbe
isActive || showUser()


// toggle boolen 
isActive = !isActive