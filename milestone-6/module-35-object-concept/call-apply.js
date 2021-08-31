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

// call 
// kibria.treatDey.call(heroAlam, 500, 100)
// kibria.treatDey.call(heroAlam, 300, 50)


// apply 
kibria.treatDey.apply(heroAlam, [500, 100])




