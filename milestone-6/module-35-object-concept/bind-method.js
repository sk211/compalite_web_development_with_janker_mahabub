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