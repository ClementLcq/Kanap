// function to get the total price of all items in the cart
const handleTotalPrice = () => {
    const totalPrice = document.querySelector('#totalPrice')
    let service = new Service()
    let actualCart = new Cart()
    let cart = actualCart.getCart()
    let total = 0
    if (cart.length == 0) {
        totalPrice.innerHTML = 0
    } else {
        for (let cartProduct of cart) {
            service.getDetailProduct(cartProduct.userProductId).then(detailProduct => {
                total += cartProduct.userProductQuantity * detailProduct.price
                totalPrice.innerHTML = total
            })
        }
    }
}