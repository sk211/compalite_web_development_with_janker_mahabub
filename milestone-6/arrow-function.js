
// function method 1 
function add(num1, num2) {
    return num1 + num2
}
const sum1 = add(12, 15);

console.log(sum1);

// function method 2  /function expression 

const add2 = function add2(num1, num2) {
    return num1 + num2
}

const sum2 = add2(30, 30)
console.log(sum2);

// function method -3  anonimas function 

const add3 = function (num1, num2) {
    return num1 + num2
}
const sum3 = add3(50, 50)
console.log(sum3);

// arrow function 
const add4 = (num1, num2) => num1 + num2
const sum4 = add4(32, 32)
console.log(sum4);

