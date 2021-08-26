

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
// loadPost()
function displayData(data) {
    const users = document.getElementById("user_list")
    for (const user of data) {
        const li = document.createElement("li")
        li.innerText = `User name is ${user.name} user Email ${user.email}`
        li.classList = "list-group-item"
        // console.log(user.name);
        users.appendChild(li)
    }
}