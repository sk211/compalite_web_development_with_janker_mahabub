const products = [
    { name: "laptop", price: 9000, brand: 'lenevo', color: "gray" },
    { name: "phone", price: 24000, brand: 'iphone', color: "golden" },
    { name: "camra", price: 19000, brand: 'canon', color: "black" },
    { name: "watch", price: 300, brand: 'apple', color: "white" },
    { name: "Dabang", price: 300, brand: 'apple', color: "white" }
]

const brands = products.map(product => product.brand)
// console.log(brands);
const prices = products.map(product => product.price)
// console.log(prices);
const color = products.map(product => product.color)
// console.log(color);

// single line forEach
// products.forEach(product => console.log(product))

// multiline forEach 
products.forEach(product => {
    const resutl = `This product name is ${product.name} the product price is ${product.price}`
    // console.log(resutl);
})
products.forEach(product => {
    // console.log(product)
})

// filter 

const cheap = products.filter(product => product.price <= 5000)
// console.log("filter", cheap);

const specificName = products.filter(product => product.name.includes("n"));
// console.log(specificName);


// 4 find 
const specal = products.find(product => product.name.includes("n"))
console.log(specal);