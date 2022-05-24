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
                removeToCart(detailProduct)

            } else {
                getDisplayCart.generateErrorMessage(product)
            }
        })
    });

}