// const bank = owner => {
//     balance = 0;
//     return amount => {
//         // blance = blance +amount
//         balance += amount
//         return balance
//     }
// }
const bank = owner => {
    balance = 0;
    return {
        diposite: amount => {

            // blance = blance +amount
            balance += amount
            return balance
        },
        withDraw: amount => {

            // blance = blance +amount
            balance -= amount
            return balance
        }
    }
}

const mofijBank = bank("mofij")

console.log(mofijBank.diposite(100));
console.log(mofijBank.diposite(300));
console.log(mofijBank.diposite(500));
console.log(mofijBank.withDraw(500));
console.log(mofijBank.withDraw(400));
// console.log(mofijBank.balance);