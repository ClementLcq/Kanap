const modifyQuantityCart = () => {
    const itemQuantityButton = document.querySelectorAll(".itemQuantity")
    let cart = new Cart()
    cart.getCart()

    for (let i = 0; i < itemQuantityButton.length; i++) {
        itemQuantityButton[i].addEventListener("change", (e) => {
            e.preventDefault()
                //e.stopPropagation()
            let modifyQuantity = e.target.closest(".itemQuantity")

            cart.changeQuantity(modifyQuantity)
            cart.save()
            alert(`Vous aller enlever un cxscxcdsf de votre produit`)
            e.stopPropagation()
            location.reload();

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