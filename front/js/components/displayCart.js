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

    generateCart = () => {
        let positionCart = document.querySelector("#cart__items");
        if (this.cart === null || this.cart == 0) { //On regarde si le panier est vide
            //const emptyCart = document.createElement("p");
            //document.querySelector("#cart__items").appendChild(emptyCart);
            const emptyCart = `<p>Votre panier est vide</p>`;
            positionCart.innerHTML = emptyCart;
        } else { //Si le panier est remplit, on met en place le contenu dynamique
            this.cart.forEach((product) => {

                //On insère une balise article
                let cartItem = document.createElement("article");
                document.querySelector("#cart__items").appendChild(cartItem);
                cartItem.className = "cart__item";
                cartItem.setAttribute('data-id', product.userProductId);
                cartItem.setAttribute('data-color', product.userProductColor);


                //On insère l'image
                let cartImage = document.createElement("div");
                cartItem.appendChild(cartImage);
                cartImage.className = "cart__item__img";
                let itemImage = document.createElement("img");
                cartImage.appendChild(itemImage);
                //itemImage.src = this.cart[product].userProductImage;
                //itemImage.alt = this.cart[product].userProductAltImage;
                itemImage.setAttribute("src", product.userProductImage);
                itemImage.setAttribute("alt", product.userProductAltImage);
            })
        }

    }
}