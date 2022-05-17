class Service {
    constructor() {}

    getDetailProduct() {
        fetch("http://localhost:3000/api/products/" + idProduct)
            // si la requête est bonne, on retourne une réponse au format json
            .then((response) => response.json())
            // et on crée une fonction qui va gérer la réponse au format json
            .then((data) => {
                console.table(data)
                return data
            })

        // si la requête est mauvaise, on retourne un message d'erreur
        .catch((error) => {
            console.log("Le chargement des produits a rencontré un problème :" + error);
        })
    }

}