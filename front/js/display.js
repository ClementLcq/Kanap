class DisplayProducts {

    constructor(products) {
        this.products = products
    }

    getProducts() {
        const url = "http://localhost:3000/api/products";
        fetch(url)
            // si la requête est bonne, on retourne une réponse au format json
            .then((response) => response.json())
            // et on crée une fonction qui va gérer la réponse au format json
            .then((data) => {
                console.log(data)
                return data
            })
            // si la requête est mauvaise, on retourne un message d'erreur
            .catch((error) => {
                console.log("Le chargement des produits a rencontré un problème :" + error);
            });

    }
    generateProducts() {

        // On crée une constante parser correspondant à l'interface DOMParser qui permet d'analyser le code XML ou HTML d'un "string" dans le DOM
        const parser = new DOMParser();
        const items = document.getElementById('items');
        for (let i = 0; i < this.products.length; i++) {
            let productsItems = //On insère le HTML dans le DOM
                `<a href="./product.html?id=${this.products[i]._id}"> 
                <article>
                <img src="${this.products[i].imageUrl}" alt="${this.products[i].altTxt}">
                <h3 class="productName">${this.products[i].name}</h3>
                <p class="productDescription">${this.products[i].description}</p>
                </article>
                </a>`;
            const displayItems = parser.parseFromString(productsItems, "text/html");
            items.appendChild(displayItems.body.firstChild);
        }
    }
}