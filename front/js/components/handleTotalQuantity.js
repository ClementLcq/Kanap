// function to get the total quantity of all items in the cart
const handleTotalQuantity = () => {
    let cart = new Cart()
        //On va d'abord récupérer et afficher le nombre total de produits
    const totalQuantity = document.querySelector('#totalQuantity')
    totalQuantity.innerHTML = cart.getNumberProduct()
}