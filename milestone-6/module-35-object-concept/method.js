const student = {
    id: 101,
    name: "Rj Kibriya",
    major: 'mathematics',
    isRich: false,
    money: 5000,
    subjects: ['english', "economics", 'calculus'],
    bestFriend: {
        name: "anik",
        major: "mathematics"
    },
    takeExam: function () {
        console.log(this.name, "taking an exam");
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis
        return this.money
    }
}
student.takeExam();
const remaining = student.treatDey(1000, 100);
console.log(remaining);
const remaining1 = student.treatDey(1000, 200);
console.log(remaining1);