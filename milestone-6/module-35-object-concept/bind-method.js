const kibria = {
    id: 101,
    name: "Rj Kibriya",
    major: 'mathematics',
    isRich: false,
    money: 5000,
    treatDey: function (expense) {
        this.money = this.money - expense
        console.log(this);
        return this.money
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: "hero Balam"
}
const heroAlam = {
    id: 103,
    money: 8000,
    name: "hero Alam"
}

// kibria.treatDey(100)

const heroTreatDay = kibria.treatDey.bind(heroBalam)
heroTreatDay(500)
heroTreatDay(400)
// kibria.treatDey(400)
const heroAlamTretday = kibria.treatDey.bind(heroAlam)
heroAlamTretday(2000)
// console.log(heroAlamTretday);
