const modifyQuantityCart = (idProduct, color) => {
    const itemQuantityButton = document.querySelector(".cart__item[data-id='" + idProduct + "'][data-color='" + color + "']")



    itemQuantityButton.addEventListener("change", (e) => {
        e.preventDefault()
        let cart = new Cart()
        cart.getCart()
        cart.changeQuantity({
            userProductId: idProduct,
            userProductColor: color
        })

        /*e.preventDefault()
            //e.stopPropagation()
        let cart = new Cart()
        cart.getCart()
        let modifyQuantity = e.target.closest(".itemQuantity")

        cart.changeQuantity(modifyQuantity)*/
        cart.save()
        alert(`Vous aller enlever un cxscxcdsf de votre produit`)
        e.stopPropagation()

    })

    /*locationButton.addEventListener("change", (event) => {
        event.preventDefault()
        cart.changeQuantity({
            userProductId: idProduct,
            userProductColor: color
        })
        cart.save()
        alert(`Votre produit va être supprimé du panier`)
        location.reload()
    })*/

}