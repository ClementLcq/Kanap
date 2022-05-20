let service = new Service()
let cart = new Cart()
let userCart = cart.getCart()
console.log(userCart)
let getDisplayCart = new DisplayCart()

if (userCart.length === 0) {
    //mettre sur la page que le panier est vide
    getDisplayCart.generateEmptyCart()
} else {
    //aller chercher les infos
    userCart.forEach((product) => {
        service.getDetailProduct(product.userProductId).then(detailProduct => {
            //détails du produit récupérer
            console.log(detailProduct)

            //creer l'objet produit qui a toutes les infos nécessaires pour l'affichage
            //dans l'objet produit : id, couleur, quantité
            //dans l'objet detailProduct : ensembles des infos sur le produit

            //appeler le displayCart pour afficher le produit
            if (Object.keys(detailProduct).length != 0) {
                getDisplayCart.generateDetailProductInCart(product.userProductColor, product.userProductQuantity, detailProduct)

            } else {
                getDisplayCart.generateErrorMessage(product)
                cart.remove(product)
            }
        })
    });
}
/*
getDisplayCart.generateCart(cart)
console.log(cart)

service.getDetailProduct(idProduct).then(dataDetailProduct => {
    if (dataDetailProduct.error) {
        
        let errorID = `<h4><a href="../html/index.html">Attention, le produit recherché n'existe pas, veuillez retourner sur la page d'accueil</a></h4>`
        positionError.innerHTML = errorID
        console.log(dataDetailProduct.error)
        return false
    }
    let detailProduct = new DetailProduct()
    detailProduct.generateDetailsProduct(dataDetailProduct)
    addToCart(dataDetailProduct)

})*/








/*let getDisplayCart = new DisplayCart()
getDisplayCart.generateCart()
console.log(getDisplayCart)*/