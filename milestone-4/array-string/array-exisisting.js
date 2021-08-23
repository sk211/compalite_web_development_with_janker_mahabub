function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "place provide an array string"
    }
    let mega = friends[0]
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ["kutub", "lion", "shamol", "sujan"]
// const myBigFriend = megaFriend(friends)
if (friends.indexOf('lion') != -1) {
    // console.log("lion exists");
}
// console.log(myBigFriend);
if (friends.includes('lion')) {
    // console.log("Lion in exist");
}
const first = [1, 2, 3, 4, 5]
const second = [4, 5, 6, 7, 8]
const combined = first.concat(second)
console.log(combined);
