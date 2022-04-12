//Variables
//Pour simplifier la suite, on crée une constante url avec la valeur de l'url de l'API
const url = "http://localhost:3000/api/products";
// On récupère les éléments qui contiennent les produits et on lui assigne une constante items
const items = document.getElementById('items');

//Requête
//On envoie une requête HTTP vers l'API à l'aide de fetch()
fetch(url)
    // si la requête est bonne, on retourne une réponse au format json
    .then((response) => response.json())
    .then((data) => generateProducts(data))
    // si la requête est mauvaise, on retourne un message d'erreur
    .catch((error) => {
        console.log("Le chargement des produits a rencontré un problème :" + error);
    })

//Fonctions
// On va créer une fonction par type de données

//On crée une fonction pour récupérer les liens
const createLinks = (products) => {
    for (let i = 0; i < products.length; i++) {
        const productLink = document.createElement("a")
        productLink.setAttribute("href", `product.html?id=${products[i]._id}`)
        items.appendChild(productLink)
    }
}

// Placer les autres fonctions ici, on appelera toutes ses fonctions dans createArticle

// On crée une fonction pour les images
const createImages = () => {
    const articles = items.querySelectorAll("article")
    for (let i = 0; i < articles.length; i++) {
        const productImage = document.createElement("img")
        productImage.setAttribute("src", articles[i].imageUrl)
        productImage.setAttribute("alt", articles[i].altTxt)
        articles[i].appendChild(productImage)
    }
}

// on crée une fonction pour le H3, on lui attribue la bonne classe et on la définit comme enfant de la fonction article
const createName = () => {
    const articles = items.querySelectorAll("article")
    for (let i = 0; i < articles.length; i++) {
        const productName = document.createElement("h3")
        productName.classList.add("productName")
        productName.textContent = articles[i].name
        articles[i].appendChild(productName)
    }
}

// On crée une fonction pour créer les articles qui ira chercher les autres fonctions des différentes data, elle est un enfant de links
const createArticles = () => {
    const links = items.querySelectorAll("a")
    for (let i = 0; i < links.length; i++) {
        const productArticle = document.createElement("article")
        links[i].appendChild(productArticle)
    }
    createImages()
    createName()
}

// On crée une fonction qui ira chercher toutes les données
const generateProducts = (products) => {
    createLinks(products)
    createArticles()
}