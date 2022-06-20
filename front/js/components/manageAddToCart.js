// Function to add item to cart
const manageAddToCart = () => {
    const addBouton = document.querySelector("#addToCart");
    const quantity = document.querySelector("#quantity");
    const color = document.querySelector("#colors");

    // Listen to the click

    addBouton.addEventListener("click", () => {
        // Verification if the fields are good
        if (color.value !== "" && quantity.value > 0 && quantity.value <= 100) {
            let userProductId = idProduct;
            let userProductColor = color.value;
            let userProductQuantity = parseInt(quantity.value);

            // Creation of product object
            let userProductDatas = {
                userProductId: userProductId,
                userProductColor: userProductColor,
                userProductQuantity: userProductQuantity,

            };
            // Use of Cart class to add products in cart and save
            let cart = new Cart()
            cart.add(userProductDatas)
            cart.save()
            alert(`Votre produit a bien été ajouter au panier. Vous pouvez continuer vos achats ou vous rendre sur la page Panier pour finaliser votre commande`)


        } else {
            alert("Il vous choisir une couleur et une quantité comprise entre 1 et 100")
        }

    })
}