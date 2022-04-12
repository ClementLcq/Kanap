//Variables
//Pour simplifier la suite, on crée une constante url avec la valeur de l'url de l'API
const url = "http://localhost:3000/api/products";
// On récupère les éléments qui contiennent les produits et on lui assigne une constante items
const items = document.getElementById('items');

// Requête
//On envoie une requête HTTP vers l'API à l'aide de fetch()
fetch(url)
    // si la requête est bonne, on retourne une réponse au format json
    .then((response) => response.json())
    // et on crée une fonction qui va gérer la réponse au format json
    .then((data) => generateProducts(data))
    // si la requête est mauvaise, on retourne un message d'erreur
    .catch((error) => {
        console.log("Le chargement des produits a rencontré un problème :" + error);
    });


//Fonctions
// On crée une fonction qui ira chercher toutes les données et générer l'affichage dynamique des produits
const generateProducts = (products) => {
    for (let i = 0; i < products.length; i++) {
        // On déclare une constante pour les liens, on définit son href et on la définit comme enfant de l'élément items
        const productLink = document.createElement('a');
        productLink.setAttribute("href", `product.html?id=${products[i]._id}`)
        items.appendChild(productLink)

        // On déclare une constante pour les article et on la définit comme enfant de l'élément productLink
        const productArticle = document.createElement('article');
        productLink.appendChild(productArticle)

        // On déclare une constante pour les images, on lui attribue les liens, les textes alternatifs et on la définit comme enfant de l'élément productArticle
        const productImage = document.createElement('img');
        productImage.setAttribute("src", products[i].imageUrl);
        productImage.setAttribute("alt", products[i].altTxt);
        productArticle.appendChild(productImage)


        //On déclare une constante pour les h3, on lui assigne la bonne class, le texte a récupérer et on la définit comme enfant de l'élément productArticle
        const productName = document.createElement('h3');
        productName.classList.add("productName");
        productName.innerText = products[i].name;
        productArticle.appendChild(productName)


        //On déclare une constante pour les h3, on lui assigne la bonne class, le texte a récupérer et on la définit comme enfant de l'élément productArticle
        const productDescription = document.createElement('p');
        productDescription.classList.add("productDescription");
        productDescription.innerText = products[i].description;
        productArticle.appendChild(productDescription)
    }
}