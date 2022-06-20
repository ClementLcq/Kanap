// Service class to get detail of products and datas of cart
class Service {
    constructor() {}

    //Async function with await keyword with fetch to return a promise to call the API and get details of the good product with his id
    async getDetailProduct(idProduct) {
        return await fetch("http://localhost:3000/api/products/" + idProduct)
            .then((response) => response.json())
            .then((data) => {
                return data
            })

        // error management 
        .catch((error) => {
            console.log("Le chargement des produits a rencontré un problème :" + error);
            return { error: "Le chargement des produits a rencontré un problème" };
        })
    }

};