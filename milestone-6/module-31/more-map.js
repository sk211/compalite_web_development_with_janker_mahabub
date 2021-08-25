const friends = ["sujan", "bijoy", "sujit", "anik", "akbor", "ayon"]

const fLengths = friends.map(friend => friend.length)

// console.log(fLengths)

const products = [
    { name: "water bottle", price: 50, color: "yellow" },
    { name: "mobile phone", price: 1000, color: "black" },
    { name: "smart watch", price: 4000, color: "black" },
    {
        name: "stickey note", price: 5000, color: "pink"
    }
]


// method 1
// output = []
// for (const product of products) {
//     const result = product.name
//     output.push(result)
// }
// console.log(output)

// method 2 with map 
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// console.log(productPrice);
products.map(product => console.log(products));