function welcomeMessage(name, greetHandler) {
    // console.log(name);
    greetHandler(name)
}
// const name = ["Tom Hanks", 'akbor']
// const myobject = { name: "tomChinku", age: 34 }
function getMorning(name) {
    console.log("good morning", name);
}
function getAfterNoon(name) {
    console.log("afternoon", name);
}
welcomeMessage("sujan majumder", getMorning)
welcomeMessage("Shakib majumder", getAfterNoon)