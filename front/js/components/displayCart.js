// Class to display cart
class DisplayCart {
    constructor() {}

    // function to generate an empty cart
    generateEmptyCart = () => {
        let positionCart = document.querySelector("#cart__items");
        const emptyCart = `<p>Votre panier est vide</p>`;
        positionCart.innerHTML = emptyCart;

    }

    // function to generate and display the products in cart
    generateDetailProductInCart = (color, quantity, detailProduct) => {
        const parser = new DOMParser();
        let positionCart = document.querySelector("#cart__items");
        let detailProductItems = //We insert the HTML in the DOM
            `<article id ="${detailProduct._id}" class="cart__item" data-id="${detailProduct._id}" data-color="${color}">
            <div class="cart__item__img">
              <img src="${detailProduct.imageUrl}" alt="${detailProduct.altTxt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${detailProduct.name}</h2>
                <p>${color}</p>
                <p>${detailProduct.price} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
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

    // function to generate an error msg if product is unknown
    generateErrorMessage = (product) => {
        let positionCart = document.querySelector("#cart__items");
        const productUnknown = `<p>Le produit ${product.userProductId} de couleur ${product.userProductColor} n'existe plus et a été supprimé de votre panier</p>`;
        positionCart.innerHTML = productUnknown;
    }

    // function to remove a product from the DOM and get emptycart function if empty
    removeProductFromDom = (idProduct, cart) => {
        const productToDelete = document.getElementById(idProduct);
        productToDelete.remove()
        if (cart.length === 0) {
            this.generateEmptyCart()
        }
    }


}