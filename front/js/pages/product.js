// Enfin on crée une fonction appelant toutes les autres
const param = new URLSearchParams(window.location.search);
let idProduct = param.get("id")
let detailProduct = new DetailProduct(idProduct)
detailProduct.getDetailProduct()

//-----------AJOUTER AU PANIER--------------
// On crée une fonction d'ajout au panier en écoutant le click sur le bouton correspondant

const addToCart = () => {
    // On définit des constantes correspondants aux champs à renseigner
    const name = document.querySelector("#title").innerHTML
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


            // Création d'un objet produit

            let userProductDatas = {
                userProductId: userProductId,
                userProductColor: userProductColor,
                userProductQuantity: userProductQuantity,
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