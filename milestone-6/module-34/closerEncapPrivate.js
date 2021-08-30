function stopeWatch() {
    let counter = 0;
    return function () {
        counter++
        return counter;
    }
}
let clock1 = stopeWatch();
console.log(clock1());
console.log(clock1());