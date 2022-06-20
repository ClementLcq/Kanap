// Class to initialize several different functions for the shopping cart 
class Cart {
    // Constructor to get the cart in the LS in JSON 
    constructor() {
        let cart = localStorage.getItem("cart")
        if (cart == null) {
            this.cart = []
        } else {
            this.cart = JSON.parse(cart)
        }
    }

    // function to get the actual cart in LS
    getCart() {
        return this.cart;
    };

    // function to save the modify cart in the LS
    save() {
        localStorage.setItem("cart", JSON.stringify(this.cart))
    }

    // function to add products in the cart then save
    add(product) {
        let foundProduct = this.cart.find(p => (p.userProductId === product.userProductId) && (p.userProductColor === product.userProductColor));

        if (foundProduct) {
            foundProduct.userProductQuantity += parseInt(product.userProductQuantity);
        } else {
            this.cart.push(product);
        }
        this.save();
    };

    // function to remove a product of the cart then save
    remove(product) {
        this.cart = this.cart.filter(p => (p.userProductId != product.userProductId) || (p.userProductColor != product.userProductColor));
        this.save();
    };

    // function to change the quantity of an item in the cart then save
    changeQuantity(idProduct, color, newQuantity) {
        let foundProduct = this.cart.find(p => (p.userProductId === idProduct) && (p.userProductColor === color));
        if (foundProduct) {
            foundProduct.userProductQuantity = newQuantity;
            this.save();
        };
    };

    // function to get the number of products in the cart
    getNumberProduct() {
        let number = 0
        for (let product of this.cart) {
            number += product.userProductQuantity;
        }
        return number;
    };
};