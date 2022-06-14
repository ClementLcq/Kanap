// Use URLSearchParams class and window location search then get the id of actual product with it
const param = new URLSearchParams(window.location.search);
let idProduct = param.get("id")
let service = new Service()
const positionError = document.querySelector(".item")
    // function to get the datas product details
service.getDetailProduct(idProduct).then(dataDetailProduct => {
    // verify errors with id or datas
    if (dataDetailProduct.error || idProduct != dataDetailProduct._id) {
        let errorID = `<h4><a href="../html/index.html">Attention, le produit recherché n'existe pas, veuillez retourner sur la page d'accueil</a></h4>`
        positionError.innerHTML = errorID
        console.log(dataDetailProduct.error)
        return false
    }
    // if not, call to the DetailProduct class to generate and display details product's
    let detailProduct = new DetailProduct()
    detailProduct.generateDetailsProduct(dataDetailProduct)
    addToCart(dataDetailProduct)

})