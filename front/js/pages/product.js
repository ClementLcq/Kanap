// Enfin on crée une fonction appelant toutes les autres
const param = new URLSearchParams(window.location.search);
let idProduct = param.get("id")
let detailProduct = new DetailProduct(idProduct)
detailProduct.getDetailProduct()
addToCart()