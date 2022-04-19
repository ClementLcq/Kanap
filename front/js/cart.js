const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
}

const getCart = () => {
    let cart = localStorage.getItem("cart")
    if (cart == null) {
        return []
    } else {
        return JSON.parse(cart)
    }
}

const addCart = (product) => {
    let cart = getCart()
    let foundProduct = cart.find(p => (p.id === product.id) && (p.color === product.color))
    if (foundProduct != undefined) {
        foundProduct.quantity++;
    } else {
        product.quantity = 1
        cart.push(product)
    }
    saveCart(cart)
}

const removeFromCart = (product) => {
    let cart = getCart()
    cart = cart.filter(p => (p.id != product.id) && (p.color != product.color))
    saveCart(cart)
}

// https://www.youtube.com/watch?v=vMT4NNFYno0&t=531s