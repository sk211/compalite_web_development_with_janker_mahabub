// method one on for loop 
// const numbers = [4, 6, 8, 10];
// const output = []
// for (const number of numbers) {
//     const resutl = number * 2
//     output.push(resutl)
// }
// console.log(output);

// const numbers1 = [30, 40, 50, 60, 70]
// const output1 = []

// for (const number of numbers1) {
//     const result = number * 2
//     output1.push(result)
// }
// console.log(output1);

const oldArrays = [10, 20, 30, 40, 50]
const output2 = []
const dubleIt = oldArray => oldArray * 2
for (const oldArray of oldArrays) {
    const result = dubleIt(oldArray)
    output2.push(result)
}
// console.log(output2);
// loop
// element diye function a call korci
// result ekta array er modde push korci 

const numbers = [10, 20, 30, 40, 50, 60]

// const output = numbers.map(dubleIt)
const output = numbers.map(numbers => numbers * 2)
const output1 = numbers.map(x => x * 2)
const squares = numbers.map(x => x * x)
// console.log(output);
console.log(squares);