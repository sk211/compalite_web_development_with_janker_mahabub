// How to declar a variable using let vs const 
const fatherName = "Maink lal"
let session = 'sumar'
session = "winter"


// 2.conditions  
// 6 basic conditions: > <  === ,!== <= >=
//     multiple conditions: && ||

if (fatherName === "Maink lal" || session == "winter") {
    console.log("this is true");
} else if (fatherName = "Manik lal") {
    console.log("my father name is manik lal is true ");
}
else {

}

// 3.array declare 
// indexe 
// length 
const numbers = [89, 35, 12, 30]

for (let i = numbers; i < numbers.length; i++) {
    // console.log(i);
}

numbers.forEach(element => {
    // console.log(element);
})
numbers.forEach(element => {
    // console.log(element);
})
// console.log(numbers.length);

const names = ["sujan", "akbor", "tanvir", "rakib", "Rajib"]

// console.log(names.length);

for (let i = 0; i < names.length; i++) {
    const name = names[i]
    // console.log(name);
}

names.forEach(element => {
    // console.log(element);
})

names.map(ele => {
    // console.log(ele);
})

function multiply(num1, num2) {
    const result = num1 * num2
    return result
}

const rel = multiply(12, 12)
console.log(rel);



// object 

const student = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "Dhaka mastean"]
}

console.log("stuend age is ", student.age);
console.log("stuend age is ", student["age"]);