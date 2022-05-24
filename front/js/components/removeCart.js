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

//On va maintenant écouter le click
/*for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[j].addEventListener("click", (e) => {
        e.preventDefault()
            //e.stopPropagation()
        let deleteId = e.target.closest(".cart__item").getAttribute("data-id")
        let deleteColor = e.target.closest(".cart__item").getAttribute("data-color")
        cart.remove({
            userProductId: deleteId,
            userProductColor: deleteColor
        })
        cart.save()
        alert(`Votre produit va être supprimé du panier`)
        location.reload()

    })
}*/