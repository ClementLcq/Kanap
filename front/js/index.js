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
// On commence par créer une fonction par type de données à récupérer.
// Cela nous permettra par la suite de toutes les appeler dans une autre fonction. 
// Ce procédé simplifie la maintenabilité permettant de vérifier plus simplement chaque fonction une à une

// On crée donc une fonction permettant de générer les liens auquels on attribue une url suivant son id
const generateLink = (products) => {
    const productLink = document.createElement('a');
    productLink.setAttribute("href", `product.html?id=${products._id}`)
    return productLink
}


// On crée une fonction permettant de générer un élément article
const generateArticle = () => {
    const productArticle = document.createElement('article');
    return productArticle
}

// On crée une fonction permettant de générer un élément image. On lui attribue le chemin pour trouver la bonne image ainsi que son texte alternatif
const generateImage = (products) => {
    const productImage = document.createElement("img");
    productImage.setAttribute("src", products.imageUrl);
    productImage.setAttribute("alt", products.altTxt);
    return productImage;
};

// on crée une fonction permettant de générer un élément de type h3. On lui attribue la bonne class ainsi que le texte correspondant
const generateName = (products) => {
    const productName = document.createElement('h3');
    productName.classList.add("productName");
    productName.innerText = products.name;
    return productName
}

// On crée une fonction permettant de générer un élément de type p. On lui attribue la bonne class ainsi que le texte correspondant
const generateDescription = (products) => {
    const productDescription = document.createElement('p');
    productDescription.classList.add("productDescription");
    productDescription.innerText = products.description;
    return productDescription
}

// Enfin, on crée donc une fonction qui regroupe toutes les fonctiones par type de données
const generateProducts = (products) => {
    for (let i = 0; i < products.length; i++) {
        // On déclare une constante pour les liens qui équivaut à la fonction qui les génère. On la place comme enfant de la constante items
        const productLink2 = generateLink(products[i])
        items.appendChild(productLink2)

        // On déclare une constante pour les article qui équivaut à la fonction qui les génère et on la définit comme enfant de l'élément productLink2
        const productArticle2 = generateArticle(products[i]);
        productLink2.appendChild(productArticle2)

        // On déclare une constante pour les images qui équivaut à la fonction qui les génère et on la définit comme enfant de l'élément productArticle2
        const productImage2 = generateImage(products[i]);
        productArticle2.appendChild(productImage2);

        // On déclare une constante pour les éléments de type h3 qui équivaut à la fonction qui les génère et on la définit comme enfant de l'élément productArticle2
        const productName2 = generateName(products[i]);
        productArticle2.appendChild(productName2)

        // On déclare une constante pour les éléments de type p qui équivaut à la fonction qui les génère et on la définit comme enfant de l'élément productArticle2
        const productDescription2 = generateDescription(products[i]);
        productArticle2.appendChild(productDescription2)
    }
}