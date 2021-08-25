const add = (num1, num2) => num1 + num2;
const sum = add(12, 12)
console.log(sum);

// arrow function multi paramater 
const multiply = (num1, num2, num3) => num1 * num2 * num3

const result = multiply(23, 12, 24)
console.log(result)

const add1 = (num1, num2) => num1 + num2
const sum1 = add1(22, 90)
console.log(sum1);

const tentime = (num) => num * 10
const output = tentime(17);
console.log(output);
const fiveTime = num => num * 5;
const value = fiveTime(17);
console.log(value);

const getName = () => "sujan majumder";
const name = getName()
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output
}

const total = doMath(12, 5)
console.log(total);