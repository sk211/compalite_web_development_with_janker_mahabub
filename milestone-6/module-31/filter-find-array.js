const numbers = [5, 13, 7, 41, 33, 23, 14, 80]
const bigNumber = numbers.filter(number => number > 20)
const smallNumber = numbers.filter(number => number < 20)
// console.log(bigNumber);
// console.log(smallNumber);

const products = [
    { name: "water bottle", price: 50, color: "yellow" },
    { name: "mobile phone", price: 1000, color: "black" },
    { name: "smart watch", price: 4000, color: "black" },
    {
        name: "stickey note", price: 5000, color: "pink"
    }
]

const expensive = products.filter(product => product.price > 100)
// console.log(expensive);
const balackproduct = products.filter(product => product.color == "black")
// console.log(balackproduct);

// find 
const whiteItem = products.find(product => product.color == "pink")
console.log(whiteItem);