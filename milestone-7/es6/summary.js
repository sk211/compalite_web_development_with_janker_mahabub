/*
// fundamantal
    1.1 variable (let const) three type vairable
    1.2 condition (< > , ====,!==, <= >= ) && || if-else else if

    1.3 array: declar,length, index, push , pop, indexof includes
    1.4 for loop whiel loop
    1.5 function return parameter
    1.6 object property , includeing array, object

-===========


ES6

    1.tempalate stinr ${}
    2.spread(...)
    3.copy an array the add  new elemet to an array
    2.1 use filter to remove an element from  an array
   3 arrow function
   3.1 no paramater ()
   3.2 single  paramatesr()
   3.2 multiple paramatesr()
   3.4 multiline line function
   4. destructuring : object destructrin and arrya distructurin
   5. object shorthand
   6.function paramater default value
   7.optionnal chaining(?)

browser api
1.local storeage session stoage

2.location api
3.history api
4.featch
==================

1. Array ar modde map, forEach ,filter, find
2.ternary oparator
3.logical and logical or && ||
4.JSON(stringify, parse)
*/

// const x = 50;
// const y = 40;

// const object = {
//     x: x,
//     y: y
// }

// // shortcut 

// const obj = { x, y }

// // object declaration shortcut possess 


// const nobab = {
//     name: name,
//     arae: area
// }
// const nobaba2 = { name, area }

// const person = { name: 'Babe' }
// console.log(person.name);
// console.log(person["name"]);
// console.log(person[name]);

const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };

const ratName = adventurer?.rat?.name;
console.log(ratName);