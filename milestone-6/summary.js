// const and late 
// not possible 
const priyoPerson = "koolsum begum"
// priyoPerson = "motaz begom"

// possible 
let priyoPerson1 = "koolsum begum"
priyoPerson1 = "momotaz begom"

// default paramante 

function claculate(x = 2, y = 5, z = '') {

}
function getName(first, last = "majumder") {
    const full = first + last
    return full
}
const resutl = getName("sujan")
console.log(resutl);

// template string 
const myPeople = `my peoploe are ${priyoPerson1} 
sonar bangla amai tumai valobasi amar sonar bangla ami tumai valobasi ${getName("sujan ")} cirodin tumar akash tumar batas ami tumai valobasi amr sonar bangla ami tumai valoabai amar sonar bangl pagoner din ses hbe akdin jornar sathe gan hbe akdin ai prithibi cere colo jai jorna sathe gan hbe aktdin `
console.log(myPeople);


// arrow function 

const getName2 = (first, last) => first + last

const fiveTimes = x => x * 5;

// large arrow function 

const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z
    const result = (firstPart + secondPart) * thirdPart
    return result
}

// spreed paramater 

const numbers = [2, 3, 4, 5, 6, 7]
const max = Math.max(...numbers)
console.log(max);