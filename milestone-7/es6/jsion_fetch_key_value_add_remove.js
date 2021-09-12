// 1. JSON stringfy 
// 2.JSON parse 
const student = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "Dhaka masten"]
}

const studentJson = JSON.stringify(student)
// console.log(studentJson);

const studentObject = JSON.parse(studentJson)
// console.table(studentObject);

// 2. fetch 
// fetch(ulr)
//     .then(res => res.json())
//     .then(data => console.log(data))

// object key and value 
const objKey = Object.keys(student)
const value = Object.values(student)
// console.log(objKey);
// console.log(value);


// for 
const numbers = [23, 43, 12, 43, 55]

numbers.forEach(num => console.log(num))

const resutl = numbers.map(num => num * 2)

// console.table(resutl)

// for of on array like object

// loop on an object using for in 

// add or remove for an array 

const products = [
    { name: "laptop", price: 9000, brand: 'lenevo', color: "gray" },
    { name: "phone", price: 24000, brand: 'iphone', color: "golden" },
    { name: "camra", price: 19000, brand: 'canon', color: "black" },
    { name: "watch", price: 300, brand: 'apple', color: "white" },
    { name: "Dabang", price: 300, brand: 'apple', color: "white" }
]

const newProduct = { name: "webcamp", price: 700, brand: "lal", color: "red" }

const newProducts = [...products, newProduct]

// console.table(newProducts);

const remaining = products.filter(p => p.name !== 'phone')
console.table(remaining);