const addToCart = (product) => {
    // On définit des constantes correspondants aux champs à renseigner
    const addBouton = document.querySelector("#addToCart")
    const quantity = document.querySelector("#quantity")
    const color = document.querySelector("#colors")


    // On va maintenant écouter le click

    addBouton.addEventListener("click", () => {
        // On va vérifier que les champs sont bien renseignés pour les stocker dans des variables
        if (color.value !== "" && quantity.value > 0 && quantity.value <= 100) {
            let userProductId = idProduct;
            let userProductColor = color.value;
            let userProductQuantity = parseInt(quantity.value);
            let userProductImage = product.imageUrl


            // Création d'un objet produit

            let userProductDatas = {
                userProductId: userProductId,
                userProductColor: userProductColor,
                userProductQuantity: userProductQuantity,
                userProductImage: userProductImage,
            };
            let cart = new Cart()
            cart.add(userProductDatas)
            cart.save()
            alert(`Votre produit a bien été ajouter au panier. Vous pouvez continuer vos achats ou vous rendre sur la page Panier pour finaliser votre commande`)


        } else {
            alert("Il semblerait que vous n'avez pas renseigné la couleur ou la quantité du produit")
        }

    })
}