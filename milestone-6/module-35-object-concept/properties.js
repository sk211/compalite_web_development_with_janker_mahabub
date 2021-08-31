const bottle = {
    color: "yellow",
    hold: "watter",
    price: 50,
    isCleaned: true
}
const keys = Object.keys(bottle);
// console.log(keys);

const value = Object.values(bottle)
// console.log(value);

const pairs = Object.entries(bottle)
// console.log(pairs[0]);
bottle.price = 200
Object.seal(bottle)
// delete objet propaty 
delete bottle.isCleaned;
console.log(bottle);