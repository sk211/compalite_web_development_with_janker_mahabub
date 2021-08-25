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

class StudentCare extends Support {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    buildARution() {
        console.log(this.name, "Biled a rutin");
    }
}
class Naptune extends Support {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor
    }
    relaseApp() {
        console.log(this.name, "relise the app");
    }
}
const sujan = new Support("sujan majumder", "debipur")
const tanvier = new StudentCare("aliya vatta majumder", "mumbai", "9ta")
const appDev = new Naptune("suken app developer", "satkhira", "VS code editor")
console.log(appDev);
