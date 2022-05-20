const removeToCart = (product) => {
    const deleteButton = document.querySelectorAll(".deleteItem")

    //On va maintenant écouter le click
    for (let j = 0; j < deleteButton.length; j++) {
        deleteButton.addEventListener("click", (e) => {
            e.preventDefault()
            let deleteID = product.userProductID
            let deleteColor = product.userProductColor
            let cart = new Cart()
            cart.remove(deleteID)
            cart.remove(deleteColor)
            cart.save()
            alert(`Votre produit va être supprimé du panier`)
        })
    }
}
removeToCart()