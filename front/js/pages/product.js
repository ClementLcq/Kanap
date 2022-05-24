const param = new URLSearchParams(window.location.search);
let idProduct = param.get("id")
let service = new Service()
const positionError = document.querySelector(".item")
service.getDetailProduct(idProduct).then(dataDetailProduct => {
    if (dataDetailProduct.error || idProduct != dataDetailProduct._id) {
        /*Error*/
        let errorID = `<h4><a href="../html/index.html">Attention, le produit recherché n'existe pas, veuillez retourner sur la page d'accueil</a></h4>`
        positionError.innerHTML = errorID
        console.log(dataDetailProduct.error)
        return false
    }
    let detailProduct = new DetailProduct()
    detailProduct.generateDetailsProduct(dataDetailProduct)
    addToCart(dataDetailProduct)

})