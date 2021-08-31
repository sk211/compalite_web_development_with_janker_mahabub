const first = { a: 1, b: 2 }
const second = { a: 1, b: 2 }
const third = first
if (first === third) {
    // console.log(" 2 is equal");
} else {
    // console.log("2 is not equal");
}
// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));
if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log("objects are equal");
}
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2)) {
        return false
    }
    for (const prop in obj1) {
        if (obj2[prop] !== obj2[prop]) {
            return false
        }
    }
    return true
}
const equal = compareObjects(first, second)
console.log(equal);