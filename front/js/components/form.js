//On commence par localiser le form dans le DOM
const form = document.querySelector(".cart__order__form")
    // Puis on crée les variables qui nous seront nécessaires (comportant les classes de caractères / méta-caractères dont nous avons besoin) 
    // et on les déclaire de manière littérales pour des raisons de performances
    //Autre possibilité : appeler le constructeur RegExp
let regex = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s]{3,}$/;
let regexLocalisation = /^[-'a-zA-Z0-9À-ÖØ-öø-ÿ\s]{3,}$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
/*let validFirstName = false;
let validLastName = false;
let validAddress = false;
let validCity = false;
let validEmail = false; */

/* essai mentorat */
let formFields = [{ name: "firstName", regexp: regex, valid: false, msgError: "Attention, veuillez renseigner correctement votre prénom. Il doit être écrit en toutes lettres et comporter un minimum de 3 caractères" },
    { name: "lastName", regexp: regex, valid: false, msgError: "Attention, veuillez renseigner correctement votre nom. Il doit être écrit en toutes lettres et comporter un minimum de 3 caractères" },
    { name: "address", regexp: regexLocalisation, valid: false, msgError: "Attention, veuillez renseigner une adresse postale valide" },
    { name: "city", regexp: regexLocalisation, valid: false, msgError: "Attention, veuillez renseigner un nom de ville valide" },
    { name: "email", regexp: emailRegex, valid: false, msgError: "Attention, veuillez renseigner une adresse email valide" }
];

formFields.forEach(field => {
    form.get[field.name].addEventListener("input", function() {
        let value = field.regexp.test(this.value);
        field.valid = value ? true : false;
        this.nextElementSibling.innerHTML = valid ? "" : field.msgError;
    })
})


//On crée maintenant une fonction qui va écouter le click du bouton de commande, 
//vérifier le panier, 
//vérifier les informations du form, 
//et créer un objet contact qui sera envoyé dans le LS à l'aide la méthode POST
const postForm = () => {
    const orderButton = document.querySelector("#order");

    //On écoute donc le boutton commander au click

    orderButton.addEventListener("click", (e) => {
        e.preventDefault();
        //On récupère les données du panier dans le LS
        const cart = new Cart()
        const actualCart = cart.getCart()
            //On vérifie qu'il y a bien des produits dans le panier, si oui on crée un tableau vide et on utilise la méthode PUSH pour modifier le contenu du tableau dans l'API et y insérer les Ids
        if (actualCart !== null) {
            let orderProducts = [];
            for (let i = 0; i < actualCart.length; i++) {
                orderProducts.push(actualCart[i].userProductId);
            }

            // On construit donc l'objet contact en vérifiant d'abord la validité des inputs

            if (firstName && lastName && address && city && email) {
                const orderUserProduct = {
                    contact: {
                        firstName: firstName,
                        lastName: lastName,
                        address: address,
                        city: city,
                        email: email,
                    },
                    products: orderProducts,
                };

                // Enfin on se sert de la méthode POST et ensuite on fetch pour communiquer avec l'API en demandant bien d'insérer l'Id de la commande dans l'URL

                const post = {
                    method: "POST",
                    body: JSON.stringify(orderUserProduct),
                    headers: {
                        'Accept': "application/json",
                        "Content-Type": "application/json",
                    },
                };
                fetch("http://localhost:3000/api/products/order", post)
                    .then((res) => res.json())
                    .then((data) => {
                        // Ici on fait bien attention à envoyer l'id de la commande dans l'URL
                        document.location.href = "confirmation.html?id=" + data.orderId;
                        // Ensuite on vide le LS et les champs du formulaire
                        localStorage.clear()
                        document.getElementsByClassName("cart__order__form").reset();
                    })
                    .catch(function(err) {
                        console.log("Erreur fetch" + err);
                        alert("Il semblerait qu'il y ait un problème au niveau de notre API. Veuillez retenter s'il vous plait.")
                    });
            } else {
                alert("Attention, il semblerait que le formulaire ne soit pas bien renseigné.");
            }
        } else {
            alert("Attention, il semblerait que votre panier soit vide. Veuillez sélectionner des articles et recommencer.");
        }
    });
}
postForm();