const removeToCart = (color, idProduct) => {
    const locationButton = document.querySelector(".cart__item[data-id='" + idProduct + "'][data-color='" + color + "']")
        //const deleteButton = document.querySelectorAll(".deleteItem")
    let cart = new Cart()
    cart.getCart()
    locationButton.addEventListener("click", (e) => {
        e.preventDefault()
        cart.remove({
            userProductId: idProduct,
            userProductColor: color
        })
        cart.save()
        alert(`Votre produit va être supprimé du panier`)
        location.reload()
    })

}