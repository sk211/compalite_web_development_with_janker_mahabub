const numbers = [98, 34, 23, 12]

const student = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "Dhaka masten"]


}

const about = `My name is ${student.name} my age is ${student.age}. my Favrites movies is ${student.movies[1]}
my favrites number is ${numbers[2]}`
console.log(about);

// 2.arrow function 

const getFiftyFive = () => 55

const newGet = getFiftyFive()

console.log(newGet);

const addSistyFive = num3 => num3 + 55

const getAddsis = addSistyFive(22)
console.log(getAddsis);

const isEven = x => x % 2 == 0

const getEven = isEven(50)
console.log(getEven);

// spread oparetor 

const newNumbers = [...numbers]

console.log(newNumbers);

// create a new array for an older object add element 
const currentNumber = [...numbers, 55, 66, 77]
console.log(currentNumber);