// function to modify the quantity of item(s) in the cart with the item quantity button then update the total quantity and the total price
const manageModifyQuantityCart = (idProduct, color) => {
    const itemQuantityButton = document.querySelector(".cart__item[data-id='" + idProduct + "'][data-color='" + color + "']")

    itemQuantityButton.addEventListener("change", (e) => {
        e.preventDefault()
        let cart = new Cart()
        let modifyQuantity = parseInt(e.target.closest(".itemQuantity").value)
        cart.changeQuantity(idProduct, color, modifyQuantity)
        handleTotalQuantity()
        handleTotalPrice()
        e.stopPropagation()


    })

}