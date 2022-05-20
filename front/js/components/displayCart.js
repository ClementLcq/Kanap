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
        let positionCart = document.querySelector("#cart__items");
        //On insère une balise article
        let cartItem = document.createElement("article");
        document.querySelector("#cart__items").appendChild(cartItem);
        cartItem.className = "cart__item";
        cartItem.setAttribute('data-id', detailProduit._id);
        cartItem.setAttribute('data-color', couleur);


        //On insère l'image
        let cartImage = document.createElement("div");
        cartItem.appendChild(cartImage);
        cartImage.className = "cart__item__img";
        let itemImage = document.createElement("img");
        cartImage.appendChild(itemImage);
        itemImage.setAttribute("src", detailProduit.imageUrl);
        itemImage.setAttribute("alt", detailProduit.altTxt);

        //On crée la div content
        let cartContent = document.createElement("div");
        cartItem.appendChild(cartContent);
        cartContent.className = "cart__item__content";

        //On insère la div du prix
        let titlePrice = document.createElement("div");
        cartContent.appendChild(titlePrice);
        titlePrice.className = "cart__item__content__titlePrice";

        //On insère le nom
        let itemName = document.createElement("h2");
        titlePrice.appendChild(itemName);
        itemName.innerHTML = detailProduit.name;

        //On insère le prix
        let itemPrice = document.createElement("p");
        titlePrice.appendChild(itemPrice);
        itemPrice.innerHTML = detailProduit.price + " €";

        //On insère la couleur
        let itemColor = document.createElement("p");
        itemName.appendChild(itemColor);
        itemColor.innerHTML = couleur;

        //On crée la div des réglages
        let contentSet = document.createElement("div");
        cartContent.appendChild(contentSet);
        contentSet.className = "cart__item__content__settings";

        //On règle et insère les quantités
        let itemQuantities = document.createElement("div");
        contentSet.appendChild(itemQuantities);
        itemQuantities.className = "cart__item__content__settings__quantity";
        let itemQuantity = document.createElement("p");
        itemQuantities.appendChild(itemQuantity);
        itemQuantity.innerHTML = "Quantité : ";
        var productQuantity = document.createElement("input");
        itemQuantities.appendChild(productQuantity);
        productQuantity.value = quantite;
        productQuantity.className = "itemQuantity";
        productQuantity.setAttribute("type", "number");
        productQuantity.setAttribute("min", "1");
        productQuantity.setAttribute("max", "100");
        productQuantity.setAttribute("name", "itemQuantity");

        //Enfin, on insère le bouton supprimer
        let itemDelete = document.createElement("div");
        contentSet.appendChild(itemDelete);
        itemDelete.className = "cart__item__content__settings__delete";
        let buttonDelete = document.createElement("p");
        itemDelete.appendChild(buttonDelete);
        buttonDelete.className = "deleteItem";
        buttonDelete.innerHTML = "Supprimer";

    }

    generateErrorMessage = (product) => {
        let positionCart = document.querySelector("#cart__items");
        const productUnknown = `<p>Le produit ${product.userProductId} de couleur ${product.userProductColor} n'existe plus et a été supprimé de votre panier</p>`;
        positionCart.innerHTML = productUnknown;
    }


}