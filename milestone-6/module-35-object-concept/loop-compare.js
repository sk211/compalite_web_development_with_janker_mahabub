const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isCleande: true
};

// for (const prop in bottle) {
//     console.log(prop, bottle[prop]);
// }
const keys = Object.keys(bottle)

for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advance 
// const entries = Object.entries(bottle)
// console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}