// using object literal 
// const student = {
//     name: 'sakib al Hasan',
//     job: "cricketer"
// }
// const person = new Object()
// console.log(person);

// // 3 
// const human = Object.create(null)
// console.log(human);
// const human = Object.create(student)
// console.log(human.job);

// method -3 
// class People {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
// }

// const bangla = new People("sujan majumder", 26)
// console.log(bangla);

// function 

function Hero(name, age) {
    this.name = name;
    this.age = age

}

const newPerson = new Hero("salmash", 25)
console.log(newPerson);