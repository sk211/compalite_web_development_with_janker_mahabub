const loadData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results))
}
loadData()
// const displaySingleUser = users => {
//     console.log(users);
//     // const continer = document.getElementById("container");
//     for (const user of users) {
//         console.log(user.gender)
//         const div = document.createElement("div")
//         console.log(div);

//         div.innerHTML = `<h1>${users.gender}</h1>`;

//         // continer.appendChild(div)
//     }
// }

const displaySingleUser = users => {
    const continer = document.getElementById("container")
    console.log(users);
    users.forEach(user => {
        const div = document.createElement("div")
        div.innerHTML = `<h1>${user.gender
            }</h1 >
            <img src="${user.picture.thumbnail}"> `
        continer.appendChild(div)

    })
}