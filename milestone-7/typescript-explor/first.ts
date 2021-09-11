const myNumber = 5;
const myName = "sujan majumder"

console.log("Hello world rotm typescritp ", myNumber, myName);

let money: number = 99;
let honey: string  = "o my honey"
let vatChicot : boolean


function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());

function Greet(name: string){
    console.log(`Hello ${name.toUpperCase()}`);
    

}

Greet("sujan majumder")

function add(frist:number , second:number ){
    const result = frist + second 
}
add(12, 20)
const age: number = 32
// const name:string = "sujna"
// const money:boolen = true

function newFun(first:number | string , second: number | string):number | string {
//  const  result =  first + second;
 return result
}

const result = newFun(50, 50)
