// function add(number, number2 = 0) {
//     // option 1 
//     // number2 = number2 || 0
//     //  option =2    
//     // if (number2 == undefined) {
//     //     number2 = 0
//     // }
//     console.log(number, number2);
//     const total = number + number2;
//     return total
// }
// const result = add(15, 50)
// console.log(result);

function fullname(first, last = "majumder") {
    const name = first + " " + last
    return name
}

const myFatherName = fullname("Manik")
const myName = fullname("sujan")
console.log(myName);
console.log(myFatherName);
