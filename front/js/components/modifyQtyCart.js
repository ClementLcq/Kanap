const modifyQuantityCart = () => {
    const locationButton = document.querySelectorAll(".itemQuantity")
        //const deleteButton = document.querySelectorAll(".deleteItem")
    let cart = new Cart()
    cart.getCart()

    for (let i = 0; i < locationButton.length; i++) {
        locationButton[i].addEventListener("change", (e) => {
            e.preventDefault()
                //e.stopPropagation()
            let modifyQuantity = e.target.closest(".itemQuantity")

            cart.changeQuantity(modifyQuantity)
            cart.save()
            alert(`Vous aller enlever un cxscxcdsf de votre produit`)

        })
    }
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