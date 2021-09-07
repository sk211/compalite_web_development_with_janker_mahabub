const displayLocalStoreageCart = () => {
    const cart = getCart()
    for (const name in cart) {
        displyProduct(name)
    }
}
const addItem = () => {
    const inputValue = document.getElementById("inputfiled")
    const name = inputValue.value

    if (!name) {
        return
    }
    // display in the UI 
    displyProduct(name)
    // add to locat storeage 

    addProductTocart(name)

    inputValue.value = '';
}

const displyProduct = (name) => {
    const ul = document.getElementById("products")
    const li = document.createElement("li")
    li.innerText = name
    ul.appendChild(li)
}
const getCart = (name) => {
    const cart = localStorage.getItem("cart")
    let cartOBJ;
    if (cart) {
        cartOBJ = JSON.parse(cart)
    }
    else {
        cartOBJ = {}
    }
    return cartOBJ
}

const addProductTocart = name => {
    const cart = getCart()
    // cart[name] = 1
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1
    }
    // console.log(cart);
    const cartStringFied = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringFied)
}

const placeOrder = () => {
    document.getElementById("products").textContent = '';
    localStorage.removeItem("cart")
}

displayLocalStoreageCart()