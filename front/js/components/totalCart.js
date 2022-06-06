const getTotalQuantity = () => {
    let cart = new Cart()
        //On va d'abord récupérer et afficher le nombre total de produits
    const totalQuantity = document.querySelector('#totalQuantity')
    totalQuantity.innerHTML = cart.getNumberProduct()
}

const getTotalPrice = () => {
    //On appelle l'API à l'aide de la class Service
    /*let service = new Service()
    service.getDatasProducts()
        //On appelle le Localstorage à l'aide la class Cart
    let cart = new Cart()
    cart.getCart()

    let total = 0
    const totalPrice = document.querySelector('#totalPrice');
    let quantity = document.getElementById('totalQuantity');
    console.log(quantity)
    total += quantity * product.price

    totalPrice.innerHTML = total*/
    const totalPrice = document.querySelector('#totalPrice')
    totalPrice.innerHTML = cart.getTotalPrice()
}



/*const totalPrice = document.querySelector('#totalPrice')
totalPrice.innerHTML = cart.getTotalPrice()*/