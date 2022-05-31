const modifyQuantityCart = (idProduct, color, quantity) => {
    const itemQuantityButton = document.querySelector(".cart__item")



    itemQuantityButton.addEventListener("change", (e) => {
        e.preventDefault()
        let cart = new Cart()
        cart.getCart()
        cart.changeQuantity({
            userProductId: idProduct,
            userProductColor: color,
            userProductQuantity: quantity
        })
        let modifyQuantity = e.target.closest(".itemQuantity")

        cart.changeQuantity(modifyQuantity)
            /* e.preventDefault()
                 //e.stopPropagation()
             let cart = new Cart()
             cart.getCart()
             let modifyQuantity = e.target.closest(".itemQuantity")

             cart.changeQuantity(modifyQuantity)*/
        cart.save()
        alert(`Attention, vous allez modifier la quantité de votre produit`)
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