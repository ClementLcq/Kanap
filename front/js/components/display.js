class DisplayProducts {

    constructor() {}

    getProducts() {
        const url = "http://localhost:3000/api/products";
        fetch(url)
            // si la requête est bonne, on retourne une réponse au format json
            .then((response) => response.json())
            // et on crée une fonction qui va gérer la réponse au format json et retourner la réponse de la fonction qui génère l'affichage dynamique des produits
            .then((data) => {
                console.log(data)
                return this.generateProducts(data)
            })
            // si la requête est mauvaise, on retourne un message d'erreur
            .catch((error) => {
                console.log("Le chargement des produits a rencontré un problème :" + error);
            });

    }
    generateProducts(products) {

        // On crée une constante parser correspondant à l'interface DOMParser qui permet d'analyser le code XML ou HTML d'un "string" dans le DOM
        const parser = new DOMParser();
        const items = document.getElementById('items');
        for (let i = 0; i < products.length; i++) {
            let productsItems = //On insère le HTML dans le DOM
                `<a href="./product.html?id=${products[i]._id}"> 
                <article>
                <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
                <h3 class="productName">${products[i].name}</h3>
                <p class="productDescription">${products[i].description}</p>
                </article>
                </a>`;
            const displayItems = parser.parseFromString(productsItems, "text/html");
            items.appendChild(displayItems.body.firstChild);
        }
    }
}