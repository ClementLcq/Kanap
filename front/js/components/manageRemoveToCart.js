// function to remove an item in the cart and update the DOM, the total quantity and the total price
const manageRemoveToCart = (color, idProduct) => {
    const deleteButton = document.querySelector(".cart__item[data-id='" + idProduct + "'][data-color='" + color + "'] .deleteItem");

    deleteButton.addEventListener("click", (e) => {
        e.preventDefault()
        let cart = new Cart()
        cart.remove({
            userProductId: idProduct,
            userProductColor: color
        })
        let displayCart = new DisplayCart()
        displayCart.removeProductFromDom(idProduct, cart.getCart())

        alert(`Votre produit va être supprimé du panier`)
        handleTotalQuantity()
        handleTotalPrice()

    })
}