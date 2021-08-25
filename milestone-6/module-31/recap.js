// const vs let 
const hubby = "sujan majumder"
let phone = "iphone 16"

phone = "samsung ";
console.log(phone)

const myNotes = `I am a  ${hubby} amar phone is ${phone}`
console.log(myNotes);

// default parameter 

function maxNumber(array = []) {
    const max = Math.max(...array)
    return max
}
const biggest = []
console.log(biggest);

// arrow function 

const square = x => x * x
console.log(square(8));
console.log(square(9));
