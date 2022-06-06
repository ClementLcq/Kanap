const getTotalQuantity = () => {
    let cart = new Cart()
        //On va d'abord récupérer et afficher le nombre total de produits
    const totalQuantity = document.querySelector('#totalQuantity')
    totalQuantity.innerHTML = cart.getNumberProduct()


}



/*const totalPrice = document.querySelector('#totalPrice')
totalPrice.innerHTML = cart.getTotalPrice()*/