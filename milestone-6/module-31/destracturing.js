const fish = {
    id: 58,
    name: "king hilsha",
    price: 90000,
    phone: "017272727272",
    address: "chadpur",
    dress: "silver"
}
// const phone = fish.phone
// const price = fish.price
const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' }
const { phone, price, id, dress } = fish

// console.log(fish.phone);
// console.log(product.price);
// console.log(fish.id);
// console.log(fish.dress);

const company = {
    name: "GP",
    ceo: {
        id: 1,
        name: "ajmol",
        food: "fuchaka"
    },
    web: {
        work: "web development",
        employee: 22,
        famerowk: "react",
        tech: {
            first: "html",
            last: "css",
            third: "js"
        }
    }
}
// old method
// const work = company.web.work
// const framework = company.web.famerowk
// console.log(work);
// console.log(framework);

const { work, famerowk } = company.web
const { food } = company.ceo

// console.log(work, famerowk, food);
const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }

const { brand } = premikas.cars
console.log(brand);
