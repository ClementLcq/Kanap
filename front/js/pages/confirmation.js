//On va se servir de l'URL dans laquelle a été ajoutée l'id de la commande pour le récupérer
let str = new URL(window.location.href);
let productId = str.searchParams.get("id");

//Ensuite on affiche tout simplement l'id de la commande dans le DOM correspondant
const userOrderId = document.querySelector('#orderId');
userOrderId.textContent = productId;

//Enfin, on supprime les données du panier afin de ne pas créer de conflit lors d'une future commande