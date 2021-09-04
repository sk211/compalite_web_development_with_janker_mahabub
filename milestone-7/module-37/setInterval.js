console.log("first");
console.log("second");
// setInterval(() => {
//     console.log(
//         "tik tik tik tik tik"
//     );
// }, 5000)

let seconds = 0;

const timeId = setInterval(() => {
    seconds++
    console.log(seconds);
    if (seconds > 15) {
        clearInterval(timeId)
    }
}, 1000)
console.log("third");

