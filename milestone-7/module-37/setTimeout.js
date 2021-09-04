console.log("I am first");
console.log("I am second");
console.log("I am theard");

setTimeout(doSomting, 5000)
console.log("I am forth");
console.log("I am five");
console.log("I am six");


function doSomting() {
    console.log("I am coding javascript ");
}

setTimeout(function () {
    console.log("I am wation for time ");
}, 4000)

setTimeout(() => {
    console.log("set time out With 10 second later");
}, 10000);