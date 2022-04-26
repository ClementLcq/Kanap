class Cart {
    constructor() {
        let cart = localStorage.getItem("cart")
        if (cart == null) {
            this.cart = []
        } else {
            this.cart = JSON.parse(cart)
        }
    }
    save() {
        localStorage.setItem("cart", JSON.stringify(this.cart))
    }

    add(product) {
        let foundProduct = this.cart.find(p => (p.userProductId === product.userProductId) && (p.userProductColor === product.userProductColor))

        if (foundProduct) {
            foundProduct.userProductQuantity++;
        } else {
            product.userProductQuantity = 1
            this.cart.push(product)
        }
        this.save()
    }

    remove(product) {
        this.cart = this.cart.filter(p => (p.id != product.id) || (p.color != product.color))
        this.save()
    }

    changeQuantity(product, quantity) {
        let foundProduct = this.cart.find(p => (p.id === product.id) && (p.color === product.color))
        if (foundProduct != undefined) {
            foundProduct.quantity += quantity
                // On crée une condition si la valeur est en dessous de 0 car cela n'a pas de sens de vendre -x produits
                // Si c'est le cas, on rappelle la fonction crée avant de suppression d'un produit du panier
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct)
            } else {
                this.save()
            }
        }
    }

    getNumberProduct() {
        let number = 0
        for (let product of this.cart) {
            number += product.quantity
        }
        return number
    }

    getTotalPrice() {
        let total = 0
        for (let product of this.cart) {
            total += product.quantity * product.price
        }
        return total
    }

}