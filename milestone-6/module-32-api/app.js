// javascript object Notation


const user = {
    id: 11,
    name: "sujan",
    job: "programmer"
}
// console.log(user);

// javaScript object Notation 

// JSION 
const stringified = JSON.stringify(user)
console.log(stringified)

const shop = {
    name: "sujan store",
    address: "Debipur",
    price: 15000,
    products: ['laptop', 'mobile', 'tab'],
    owner: {
        name: "alia Bhatt",
        profession: "Programmer"
    },
    isExpensive: false
}
const shopStringfied = JSON.stringify(shop)
console.log("jsion Stringfy", shopStringfied);
// console.log(shop);
const convarted = JSON.parse(shopStringfied)
console.log("Jsion Parse", convarted);