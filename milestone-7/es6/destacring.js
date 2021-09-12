// array destrucuring 
const numbers = [42, 65]
// const x = numbers[0]
// const y = numbers[1]

// const [x, y] = [42, 65]

const [x, y] = numbers

console.log(x, y);

const student = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "Dhaka masten"]
}
const [firstmovie, secondmovie] = student.movies

// object destructuring 

// const { name, age } = { name: "alu", age: 14 }
const { name, age, saleary } = { name: "alu", age: 14, saleary: 34000 }
console.log(saleary);

const employee = {
    ide: "vs code ",
    designation: "developer",
    machine: "mac",
    languages: ['html', 'css', 'js'],
    specification: {
        heigth: 66,
        wight: 67,
        address: "kumarKhali",
        drink: "water"
    }
}

const { machine, ide } = employee
const { address, drink } = employee?.specification
console.log(drink);