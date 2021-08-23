const number = [66, 22, 13, 1, 3, 4, 5, 3, 2, 33, 11, 22, 43, 14, 50]
const sortNumber = number.sort(function (a, b) {
    return a - b;
})
// console.log(sortNumber);

// const friendName = ["sujan", "akbor", "tanvir", "robal", "imran", 'babul', 'cappu']
// const sortFriendname = friendName.sort()
// const reverseFriendname = sortFriendname.reverse()
// console.log(reverseFriendname);

function addNumber(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const numberSum = addNumber(12, 30, 22, 23, 4, 5, 6, 7);
console.log(numberSum);

function fulname(firstName, lastname) {
    let fullname = ''
    for (const part of arguments) {
        fullname = fullname + part + ' '
    }
    return fullname
}
const name = fulname("omuk", "sonket", "tomok", "sonket", "sujna", "sonket");
console.log(name);