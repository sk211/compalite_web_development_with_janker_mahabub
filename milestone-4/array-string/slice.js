const anthem = "amar sonar bangla ami tumai valobasi amar sonar bangla"

// splice devide the string in a array 
const word = anthem.split(' ')
// console.log(word);

// divide the stirn in a charecter 
const wordA = anthem.split('a')
// console.log(wordA);
// slice starting 5 index befor ending index 13
const smallSlice = anthem.slice(5, 13)
// console.log(smallSlice);
// slice starting 11 charecter  ending 8

const anotherPart = anthem.substr(11, 8)
// console.log(anotherPart);
// slice starting 11 index befor ending index 15

const substing = anthem.substring(11, 15)
// console.log(substing);

// concet 
const first = "sujan";
const last = "majumder";
// option 1 
const fullname = first + last
console.log(fullname);

// option -2 
const full2 = first.concat(" ").concat(last).concat(" ").concat("apon")
console.log(full2);

const alpabet = ['a', 'b', 'c', 'd']
const alljoin = alpabet.join('');
console.log(alljoin);

const name = ['akbor', 'bablu', 'chandu', 'dulal']
// const allname = name.join(' ');
// const allname = name.join(',');
// const allname = name.join(', ');
const allname = name.join('- ');
console.log(allname);