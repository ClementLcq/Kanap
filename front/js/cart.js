// On crée un class objet qui réunira toutes les fonctions dont nous avons besoin concernant le panier
class Cart {
    // On initialise l'objet à l'aide du constructor afin de récupérer le panier à chaque fois
    constructor() {
        let cart = localStorage.getItem("cart")
        if (cart == null) {
            this.cart = []
        } else {
            this.cart = JSON.parse(cart)
        }
    }

    // On crée une fonction pour enregistrer le panier dans le localstorage (avec cart en paramètre pour lui signifier quel panier enregistrer)
    // Le localstorage ne pouvant pas enregistrer des objets complexes, on sérialise les données qu'on va "parser" par la suite
    save() {
        localStorage.setItem("cart", JSON.stringify(this.cart))
    }

    // On crée une fonction pour ajouter au panier
    add(product) {
        // On regarde ensuite si le produit est déjà dans le panier, si oui on augmente sa quantité, sinon on ajoute le produit
        // On utilise .find qui est une fonction permettant de chercher un élément sur un tableau par rapport à une condition
        // Pour ce site, on regarde si un produit a la même id ET la même couleur
        let foundProduct = this.cart.find(p => (p.userProductId === product.userProductId) && (p.userProductColor === product.userProductColor))

        // Si il existe déjà on crée une variable de nouvelle quantité correspondante à l'addition de la quantité existante et de la valeur entrée
        // Sinon on définit par défaut une quantité correspondante à la valeur entrée   
        if (foundProduct) {
            let newQuantity = parseInt(foundProduct.userProductQuantity) + parseInt(quantity.value)
            foundProduct.userProductQuantity = newQuantity;
        } else {
            product.userProductQuantity = quantity.value
            this.cart.push(product)
        }
        this.save()
    }

    // On crée une fonction pour retirer un produit du panier
    remove(product) {
        // On utilise la fonction .filter qui va filter un tableau suivant une condition
        // Ici il va donc conserver que les produits qui n'ont pas ni le même id, ni la même couleur
        this.cart = this.cart.filter(p => (p.userProductId != product.userProductId) || (p.userProductColor != product.userProductColor))
        this.save()
    }

    // On crée une fonction pour modifier la quantité
    changeQuantity(product, quantity) {
        // On regarde si le produit est dans le panier
        let foundProduct = this.cart.find(p => (p.userProductId === product.userProductId) && (p.userProductColor === product.userProductColor))
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