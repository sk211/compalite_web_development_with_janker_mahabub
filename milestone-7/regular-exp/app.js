let fruits = ['bannana', "orange", 'apple', "Mango"]

// array  কে কি করে  String বানানো যায় 
// const toSting = fruits.toString()
// console.log(toSting);

// array কে কিভাবে join করা য়ায় 

// const toJoin = fruits.join(" ")
// console.log(toJoin);

// array থেকে ডিলিট করা যায় 
// var x = fruits.pop()

// console.log(fruits);
// console.log(x);

//  add item withe push 

// fruits.push("fineapple")
// console.log(fruits);

// shifting elemements to 1st element 

// const x = fruits.shift()
// console.log(x);
// console.log(fruits);


// const unSit = fruits.unshift("Goyava")
// console.log(fruits);

// change element 

// fruits[0] = "Mango 2"
// console.log(fruits);

// const x = fruits[fruits.length] = "sujan"
// console.log(fruits);

// delete fruits[0]
// console.log(fruits);

// fruits.splice(2, 1, "akbor", "tanvir")
// console.log(fruits);
var scores = [30, 112, 50, 2, 8, 14];

function myFunc() {
    const resutl = scores.sort(function (x, y) { return x - y })
    console.log(resutl);
}
myFunc()

const myFunc1 = () => {
    const resutl = scores.sort(function (x, y) { return y - x })
    console.log(resutl);
}
myFunc1()