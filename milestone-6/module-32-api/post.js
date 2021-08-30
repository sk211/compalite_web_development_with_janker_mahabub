function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/pusts")
        .then(post => post.json())
        .then(data => displayPost(data))
}
loadPosts()
function displayPost(posts) {
    const postContainer = document.getElementById("user_section")
    const clList = ['d-flex', 'justify-content-center', 'flex-wrap', 'container']
    postContainer.classList.add(...clList)
    for (const post of posts) {
        const div = document.createElement("div");
        const list = ['card', 'w-25', 'p-2', 'm-1', 'shadow']
        div.classList.add(...list)
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div)
        // console.log(post.title);
    }
}