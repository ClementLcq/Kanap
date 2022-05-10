class DetailProduct {
    constructor() {}

    getDetailProduct = () => {
        fetch("http://localhost:3000/api/products/" + idProduct)
            // si la requête est bonne, on retourne une réponse au format json
            .then((response) => response.json())
            // et on crée une fonction qui va gérer la réponse au format json
            .then((data) => {
                console.log(data)
                this.generateDetailsProduct(data)
            })
            // si la requête est mauvaise, on retourne un message d'erreur
            .catch((error) => {
                console.log("Le chargement des produits a rencontré un problème :" + error);
            })
    }

    generateDetailsProduct = (oneProduct) => {
        this.getTitle(oneProduct)
        this.getImage(oneProduct)
        this.getName(oneProduct)
        this.getPrice(oneProduct)
        this.getDescription(oneProduct)
        this.getColor(oneProduct)
    }

    getTitle = (oneProduct) => {
        document.title = oneProduct.name
    }

    getImage = (oneProduct) => {
        const itemImage = document.createElement("img");
        document.querySelector(".item__img").appendChild(itemImage);
        itemImage.setAttribute("src", oneProduct.imageUrl);
        itemImage.setAttribute("alt", oneProduct.altTxt);
        return itemImage;
    };

    getName = (oneProduct) => {
        const itemName = document.getElementById("title")
        itemName.innerHTML = oneProduct.name;
        return itemName
    }

    getPrice = (oneProduct) => {
        const itemPrice = document.getElementById("price")
        itemPrice.innerHTML = oneProduct.price
        return itemPrice
    }

    getDescription = (oneProduct) => {
        const itemDescription = document.getElementById("description")
        itemDescription.innerHTML = oneProduct.description
        return itemDescription
    }

    getColor = (oneProduct) => {
        for (let colors of oneProduct.colors) {
            const itemColors = document.createElement("option")
            document.getElementById("colors").appendChild(itemColors)
            itemColors.value = colors
            itemColors.innerHTML = colors
        }
    }
}