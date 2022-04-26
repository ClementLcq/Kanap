// Variables d'initialisation
// BLABLA
const param = new URLSearchParams(window.location.search);
let idProduct = param.get("id")
console.log(idProduct)
    // La console récupère/affiche bien l'id du produit

// Requête pour récupérer les données du produit correspondant au bon ID sélectionné
//On envoie une requête HTTP vers l'API à l'aide de fetch() et on ajoute bien l'idProduct à l'url de base
fetch("http://localhost:3000/api/products/" + idProduct)
    // si la requête est bonne, on retourne une réponse au format json
    .then((response) => response.json())
    // et on crée une fonction qui va gérer la réponse au format json
    .then((data) => getProduct(data))
    // si la requête est mauvaise, on retourne un message d'erreur
    .catch((error) => {
        console.log("Le chargement des produits a rencontré un problème :" + error);
    })


// Nous avons maintenant l’id du produit à afficher et la requête API permettant de récupérer les différentes informations du produit en question.
// On va donc créer des fonctions nous permettant de récupérer chaque paramètre de cet id unique et de les afficher sur la page/insérer dans le DOM.
// Comme sur la page index, on va d'abord créer une fonction par type de données puis une les regroupant, cela permettant une maintenabilité plus facile et efficace

// On crée une fonction pour modifier le title de la page par celui correspond au produit sélectionné
const getTitle = (oneProduct) => {
    document.title = oneProduct.name
}

// Comme dans index.js, on crée plusieurs fonctions pour récupérér chaque paramètre
const getImage = (oneProduct) => {
    const itemImage = document.createElement("img");
    document.querySelector(".item__img").appendChild(itemImage);
    itemImage.setAttribute("src", oneProduct.imageUrl);
    itemImage.setAttribute("alt", oneProduct.altTxt);
    return itemImage;
};

const getName = (oneProduct) => {
    const itemName = document.getElementById("title")
    itemName.innerHTML = oneProduct.name;
    return itemName
}

const getPrice = (oneProduct) => {
    const itemPrice = document.getElementById("price")
    itemPrice.innerHTML = oneProduct.price
    return itemPrice
}

const getDescription = (oneProduct) => {
    const itemDescription = document.getElementById("description")
    itemDescription.innerHTML = oneProduct.description
    return itemDescription
}

const getColor = (oneProduct) => {
    for (let colors of oneProduct.colors) {
        console.log(colors)
        const itemColors = document.createElement("option")
        document.getElementById("colors").appendChild(itemColors)
        itemColors.value = colors
        itemColors.innerHTML = colors
    }
}

// Enfin on crée une fonction appelant toutes les autres
const getProduct = (oneProduct) => {
    getTitle(oneProduct)
    getImage(oneProduct)
    getName(oneProduct)
    getPrice(oneProduct)
    getDescription(oneProduct)
    getColor(oneProduct)
    addToCart(oneProduct)
}


//-----------AJOUTER AU PANIER--------------
// On crée une fonction d'ajout au panier en écoutant le click sur le bouton correspondant

const addToCart = () => {
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
            let userProductQuantity = quantity.value;


            // Création d'un objet produit

            let userProductArray = {
                userProductId: userProductId,
                userProductColor: userProductColor,
                userProductQuantity: userProductQuantity,
            };
            let cart = new Cart()
            cart.add(userProductArray)
            cart.save()
            alert(`Votre produit a bien été ajouter au panier. Vous pouvez continuer vos achats ou vous rendre sur la page Panier pour finaliser votre commande`)


        } else {
            alert("Il semblerait que vous n'avez pas renseigné la couleur ou la quantité du produit")
        }

    })
}