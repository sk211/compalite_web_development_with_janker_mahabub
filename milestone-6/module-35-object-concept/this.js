// console.log(this);

const kibria = {
    id: 101,
    name: "Rj Kibriya",
    major: 'mathematics',
    isRich: false,
    money: 5000,
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis
        console.log(this);
        return this.money
    }
}