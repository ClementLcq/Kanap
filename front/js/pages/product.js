// Enfin on crée une fonction appelant toutes les autres
const getProduct = (oneProduct) => {
    getTitle(oneProduct)
    getImage(oneProduct)
    getName(oneProduct)
    getPrice(oneProduct)
    getDescription(oneProduct)
    getColor(oneProduct)
    addToCart(oneProduct)
}