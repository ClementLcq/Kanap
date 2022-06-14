//Get the order id with the searchParams propertie of URL interface
let str = new URL(window.location.href);
let productId = str.searchParams.get("id");

//Display the retrieved id in the good place with the DOM
const userOrderId = document.querySelector('#orderId');
userOrderId.textContent = productId;