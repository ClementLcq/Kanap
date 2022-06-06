class Service {
    constructor() {}
        //on fait un appel async pour pouvoir retourner le fetch par la suite
    async getDetailProduct(idProduct) {
        return await fetch("http://localhost:3000/api/products/" + idProduct)
            // si la requête est bonne, on retourne une réponse au format json
            .then((response) => response.json())
            // et on crée une fonction qui va gérer la réponse au format json
            .then((data) => {
                /*if (idProduct != data._id) {
                    //remplacer par un gros H3 présentant l'erreur
                    return { error: "id produit mauvais" }
                }
                console.log(data)*/
                return data
            })

        // si la requête est mauvaise, on retourne un message d'erreur
        .catch((error) => {
            console.log("Le chargement des produits a rencontré un problème :" + error);
            return { error: "Le chargement des produits a rencontré un problème" };
        })
    }

    getDatasCart() {

        let cart = localStorage.getItem("cart")
        if (cart == null) {
            this.cart = []
        } else {
            this.cart = JSON.parse(cart)
        }

        return this.cart
    }

    getDatasProducts() {
        const url = "http://localhost:3000/api/products";
        fetch(url)
            // si la requête est bonne, on retourne une réponse au format json
            .then((response) => response.json())
            // et on crée une fonction qui va gérer la réponse au format json et retourner la réponse de la fonction qui génère l'affichage dynamique des produits
            .then((data) => {
                console.log(data)
                return data
            })
            // si la requête est mauvaise, on retourne un message d'erreur
            .catch((error) => {
                console.log("Le chargement des produits a rencontré un problème :" + error);
            });
    }

}