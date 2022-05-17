class DetailProduct {
    constructor() {}

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