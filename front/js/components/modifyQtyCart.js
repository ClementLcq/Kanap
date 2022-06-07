const modifyQuantityCart = (idProduct, color) => {
    const itemQuantityButton = document.querySelector(".cart__item[data-id='" + idProduct + "'][data-color='" + color + "']")

    itemQuantityButton.addEventListener("change", (e) => {
        e.preventDefault()
        let cart = new Cart()
        let modifyQuantity = parseInt(e.target.closest(".itemQuantity").value)
        cart.changeQuantity(idProduct, color, modifyQuantity)
        getTotalQuantity()
        getTotalPrice()
        e.stopPropagation()


    })

}