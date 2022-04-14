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
// On crée une fonction qui regroupe toutes les fonctiones par type de données
const generateProducts = (products) => {
    for (let i = 0; i < products.length; i++) {
        // On déclare une constante pour les liens, on définit son href et on la définit comme enfant de l'élément items
        const productLink2 = generateLink(products[i])
        items.appendChild(productLink2)

        // On déclare une constante pour les article et on la définit comme enfant de l'élément productLink
        const productArticle2 = generateArticle(products[i]);
        productLink2.appendChild(productArticle2)

        // On déclare une constante pour les images, on lui attribue les liens, les textes alternatifs et on la définit comme enfant de l'élément productArticle
        const productImage2 = generateImage(products[i]);
        productArticle2.appendChild(productImage2);

        //On déclare une constante pour les h3, on lui assigne la bonne class, le texte a récupérer et on la définit comme enfant de l'élément productArticle
        const productName2 = generateName(products[i]);
        productArticle2.appendChild(productName2)

        //On déclare une constante pour les h3, on lui assigne la bonne class, le texte a récupérer et on la définit comme enfant de l'élément productArticle
        const productDescription2 = generateDescription(products[i]);
        productArticle2.appendChild(productDescription2)
    }
}

const generateLink = (products) => {
    const productLink = document.createElement('a');
    productLink.setAttribute("href", `product.html?id=${products._id}`)
    return productLink
}

const generateArticle = () => {
    const productArticle = document.createElement('article');
    return productArticle
}

const generateImage = (products) => {
    const productImage = document.createElement("img");
    productImage.setAttribute("src", products.imageUrl);
    productImage.setAttribute("alt", products.altTxt);
    return productImage;
};

const generateName = (products) => {
    const productName = document.createElement('h3');
    productName.classList.add("productName");
    productName.innerText = products.name;
    return productName
}

const generateDescription = (products) => {
    const productDescription = document.createElement('p');
    productDescription.classList.add("productDescription");
    productDescription.innerText = products.description;
    return productDescription
}