const param = new URLSearchParams(window.location.search);
let idProduct = param.get("id")
let service = new Service()
let dataDetailProduct = service.getDetailProduct(idProduct)
let detailProduct = new DetailProduct()

detailProduct.generateDetailsProduct(dataDetailProduct)
addToCart()