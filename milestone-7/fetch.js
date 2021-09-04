console.log(111111);
console.log(222222);
console.log(333333);
console.log(444444);

setTimeout(() => console.log("ami chogole 3 number bacca"), 5000);

for (let i = 0; i < 100; i++) {
    console.log(i);
}

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))