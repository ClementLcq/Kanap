const saveBasket = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}

const getBasket = () => {
    let basket = localStorage.getItem("basket")
    if (basket == null) {
        return []
    } else {
        return JSON.parse(basket)
    }
}

const addBasket = (product) => {
    let basket = getBasket()
    let foundProduct = basket.find(p => (p.id === product.id) && (p.color === product.color))
    if (foundProduct != undefined) {
        foundProduct.quantity++;
    } else {
        product.quantity = 1
        basket.push(product)
    }
    saveBasket(basket)
}

const removeFromBasket = (product) => {
    let basket = getBasket()
    basket = basket.filter(p => (p.id != product.id) && (p.color != product.color))
    saveBasket(basket)
}