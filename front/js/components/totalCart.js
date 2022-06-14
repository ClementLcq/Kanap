// function to get the total quantity of all items in the cart
const getTotalQuantity = () => {
    let cart = new Cart()
        //On va d'abord récupérer et afficher le nombre total de produits
    const totalQuantity = document.querySelector('#totalQuantity')
    totalQuantity.innerHTML = cart.getNumberProduct()
}

// function to get the total price of all items in the cart
const getTotalPrice = () => {
    const totalPrice = document.querySelector('#totalPrice')
    let service = new Service()
    let cart = service.getDatasCart()
    let total = 0
    for (let cartProduct of cart) {
        service.getDetailProduct(cartProduct.userProductId).then(detailProduct => {
            total += cartProduct.userProductQuantity * detailProduct.price
            totalPrice.innerHTML = total

        })
    }
}