class Support {
    name;
    role = "support web dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
    statSession() {
        console.log(this.name, "start a support session");
    }
}
const sujan = new Support("sujan majumder", "debipur")
const tanvier = new Support("tanvier majumder", "Basic Feni")
// console.log(sujan);
// console.log(tanvier);
sujan.statSession();
tanvier.statSession();