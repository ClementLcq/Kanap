const removeToCart = (product) => {
    const deleteButton = document.querySelectorAll(".deleteItem")

    //On va maintenant écouter le click
    for (let j = 0; j < deleteButton.length; j++) {
        deleteButton[j].addEventListener("click", (e) => {
            e.preventDefault()
            let cart = new Cart()
            cart.getCart()
            let deleteId = product[j].userProductId
            let deleteColor = product[j].userProductColor
            cart.remove(deleteId)
            cart.remove(deleteColor)
            cart.save()
            alert(`Votre produit va être supprimé du panier`)

        })
    }
}