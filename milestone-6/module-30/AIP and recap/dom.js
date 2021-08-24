document.getElementById("addborder").addEventListener("click", function () {
    const container = document.getElementById("friend-container")
    container.style.border = "2px solid green";
    container.style.fontSize = "20px"
})

// function addBackground() {
//     const friends = document.getElementsByClassName("friend")
//     console.log(friends);
//     for (const friend of friends) {
//         console.log(friend);
//     }
// }

function addBackground() {
    const friends = document.getElementsByClassName('friend')
    for (const friend of friends) {
        // console.log(friend);
        friend.style.backgroundColor = "lightblue"
    }
}

document.getElementById("adFriend").addEventListener("click", function () {
    const container = document.getElementById("friend-container")
    // console.log(container);
    const firendDiv = document.createElement("div")
    console.log(firendDiv);
    firendDiv.classList.add("friend")
    firendDiv.innerHTML = `
                 <h3 class="friend-name">New friend</h3>
                <p>Lorem ipsum dolor sit amet.</p>
    `
    container.appendChild(firendDiv)
})