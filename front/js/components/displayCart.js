class DisplayCart {
    constructor() {
        // On enrengistre dans une variable ce que l'on récupère
        // Et on regarde si le panier est vide ou non, on retourne un tableau vide si le panier n'existe pas et on retourne le JSON.parse du panier si il existe
        let cart = localStorage.getItem("cart")
        if (cart == null) {
            this.cart = []
        } else {
            this.cart = JSON.parse(cart)
        }
    }

    //On met en place le contenu dynamique

    displayCart = () => {
        let positionCart = document.querySelector("#cart__items");
        if (this.cart === null || this.cart == 0) { //On regarde si le panier est vide
            const emptyCart = `<p>Votre panier est vide</p>`;
            positionCart.innerHTML = emptyCart;
        } else { //Si le panier est remplit, on met en place le contenu dynamique
            for (let product in this.cart) {
                //On insère une balise article
                let cartItem = document.createElement("article");
                document.querySelector("#cart__items").appendChild(cartItem);
                cartItem.className = "cart__item";
                cartItem.setAttribute('data-id', this.cart[product].userProductId);
                //On insère l'image

            }
        }


    }
}