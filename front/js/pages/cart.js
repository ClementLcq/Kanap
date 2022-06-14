// get Service class / Cart class / DisplayCart class
let service = new Service();
let cart = new Cart();
let userCart = cart.getCart();
let getDisplayCart = new DisplayCart();

if (userCart.length === 0) {
    // call to the empty cart function
    getDisplayCart.generateEmptyCart();
} else {
    // forEach method to callback every elements of the array
    userCart.forEach((product) => {
        // function to get the details of products we need
        service.getDetailProduct(product.userProductId).then(detailProduct => {
            // verify if properties of object are in and functions to display / remove / modify quantity / get total quantity and get total price
            if (Object.keys(detailProduct).length != 0) {
                getDisplayCart.generateDetailProductInCart(product.userProductColor, product.userProductQuantity, detailProduct)
                removeToCart(product.userProductColor, product.userProductId)
                modifyQuantityCart(product.userProductId, product.userProductColor)
                getTotalQuantity()
                getTotalPrice()
            } else {
                getDisplayCart.generateErrorMessage(product)
            }
        })
    })

}