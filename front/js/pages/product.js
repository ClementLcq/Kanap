const param = new URLSearchParams(window.location.search);
let idProduct = param.get("id")
let service = new Service()
service.getDetailProduct(idProduct).then(dataDetailProduct => {
    if (dataDetailProduct.error) {
        /*Error*/

        console.log(dataDetailProduct.error)
        return false
    }
    let detailProduct = new DetailProduct()
    detailProduct.generateDetailsProduct(dataDetailProduct)
    addToCart()

})