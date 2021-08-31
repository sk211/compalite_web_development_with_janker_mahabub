const pen = {
    bran: "econo",
    price: 10,
    writePoem: function (name) {
        console.log(food);
    }
}
const keys = Object.keys(pen) // all key
const values = Object.values() // all value

// for loop 
// for in for object 
// for loop of array

const a = { a: 1 }
const b = { a: 1 }
if (a === b) {
    console.log("they are same ");
}
else {
    console.log("the ar not same ");
}


// bind call apply 
const aBounded = pen.writePoem.bind(a)
aBounded()

// this keyword 