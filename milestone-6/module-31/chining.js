// declar variable based on the name of an object property 
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 69
}
const { x, b } = myObject
// console.log(myObject.b?.p);

// destructuring array 
const [q, p] = [45, 37]
console.log(p, q);

const [best, faltu] = ['momotaj', 'porosi']
// console.log(faltu, best);
const { sky, color, money } = { sky: "blue", soil: "matti", color: "red", money: 50 }