class DisplayCart {
    constructor() {
        // On enrengistre dans une variable ce que l'on récupère
        // Et on regarde si le panier est vide ou non, on retourne un tableau vide si le panier n'existe pas et on retourne le JSON.parse du panier si il existe
        /*let cart = localStorage.getItem("cart")
        if (cart == null) {
            this.cart = []
        } else {
            this.cart = JSON.parse(cart)
        }*/
    }

    generateEmptyCart = () => {
            let positionCart = document.querySelector("#cart__items");
            const emptyCart = `<p>Votre panier est vide</p>`;
            positionCart.innerHTML = emptyCart;

        }
        //On met en place le contenu dynamique
    generateDetailProductInCart = (couleur, quantite, detailProduit) => {
        const parser = new DOMParser();
        let positionCart = document.querySelector("#cart__items");
        let detailProductItems = //On insère le HTML dans le DOM
            `<article id ="${detailProduit._id}" class="cart__item" data-id="${detailProduit._id}" data-color="${couleur}">
            <div class="cart__item__img">
              <img src="${detailProduit.imageUrl}" alt="${detailProduit.altTxt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${detailProduit.name}</h2>
                <p>${couleur}</p>
                <p>${detailProduit.price} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantite}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem" >Supprimer</p>
                </div>
              </div>
            </div>
          </article>`;
        const displayDetailProductItems = parser.parseFromString(detailProductItems, "text/html");
        positionCart.appendChild(displayDetailProductItems.body.firstChild);
    }

    generateErrorMessage = (product) => {
        let positionCart = document.querySelector("#cart__items");
        const productUnknown = `<p>Le produit ${product.userProductId} de couleur ${product.userProductColor} n'existe plus et a été supprimé de votre panier</p>`;
        positionCart.innerHTML = productUnknown;
    }

    removeProductFromDom = (idProduct, cart) => {
        const productToDelete = document.getElementById(idProduct);
        productToDelete.remove()
        if (cart.length === 0) {
            this.generateEmptyCart()
        }
    }


}