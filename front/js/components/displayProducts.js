// Class to display products
class DisplayProducts {

    constructor() {}

    // function to get datas products with call to API
    getProducts() {
        const url = "http://localhost:3000/api/products";
        fetch(url)
            // if good, return response in json
            .then((response) => response.json())
            // and create function to manage the response and return the display function
            .then((data) => {
                console.log(data)
                return this.generateProducts(data)
            })
            // if bad request, error msg
            .catch((error) => {
                console.log("Le chargement des produits a rencontré un problème :" + error);
            });

    }

    // function to generate and display products in the DOM
    generateProducts(products) {

        // Creation of const parser with DOMParser interface to analyze XML/HTML string in the DOM
        const parser = new DOMParser();
        const items = document.getElementById('items');
        for (let i = 0; i < products.length; i++) {
            let productsItems = //We insert the HTML in the DOM
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