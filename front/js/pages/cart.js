let service = new Service()
let cart = service.getDatasCart()
let getDisplayCart = new DisplayCart()
getDisplayCart.generateCart(cart)
console.log(cart)

service.getDetailProduct(idProduct).then(dataDetailProduct => {
    if (dataDetailProduct.error) {
        /*Error*/
        let errorID = `<h4><a href="../html/index.html">Attention, le produit recherché n'existe pas, veuillez retourner sur la page d'accueil</a></h4>`
        positionError.innerHTML = errorID
        console.log(dataDetailProduct.error)
        return false
    }
    let detailProduct = new DetailProduct()
    detailProduct.generateDetailsProduct(dataDetailProduct)
    addToCart(dataDetailProduct)

})








/*let getDisplayCart = new DisplayCart()
getDisplayCart.generateCart()
console.log(getDisplayCart)*/