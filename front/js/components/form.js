//On crée une constante pour récupérer les données du panier dans le LS
const LOCALSTORAGE = JSON.parse(localStorage.getItem("cart"));
//On commence par localiser le form dans le DOM
const form = document.querySelector(".cart__order__form")
    // Puis on crée les variables qui nous seront nécessaires (comportant les classes de caractères / méta-caractères dont nous avons besoin) 
    // et on les déclaire de manière littérales pour des raisons de performances
    //Autre possibilité : appeler le constructeur RegExp
let regex = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s]{3,}$/;
let regexLocal = /^[-'a-zA-Z0-9À-ÖØ-öø-ÿ\s]{3,}$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let validFirstName = false;
let validLastName = false;
let validAddress = false;
let validCity = false;
let validEmail = false;

// FONCTIONS DE VALIDATIONS
// On va maintenant créer les fonctions qui nous permettront de valider les input
// On va utiliser la méthode test() qui va chercher les correspondances entre une chaine de cara et une expression singulière
// elle va renvoyer un boolean true si au moins une correspondance trouvée, sinon false
// ATTENTION : ne pas utiliser de fonction flêchées car ne possède pas ses propres valeurs pour this

//On commence par écouter l'input ciblé
// Pour le prénom

form.firstName.addEventListener('input', function() {
    let firstNameTest = regex.test(this.value);
    if (firstNameTest) {
        validFirstName = true;
        this.nextElementSibling.innerHTML = "";
    } else {
        validFirstName = false;
        this.nextElementSibling.innerHTML = "Attention, veuillez renseigner correctement votre prénom. Il doit être écrit en toutes lettres et comporter un minimum de 3 caractères"
    }
});
// Pour le nom de famille
form.lastName.addEventListener('input', function() {
    let lastNameTest = regex.test(this.value);
    if (lastNameTest) {
        validLastName = true;
        this.nextElementSibling.innerHTML = "";
    } else {
        validLastName = false;
        this.nextElementSibling.innerHTML = "Attention, veuillez renseigner correctement votre nom. Il doit être écrit en toutes lettres et comporter un minimum de 3 caractères"
    }
});
// Pour l'adresse
form.address.addEventListener('input', function() {
    let adressTest = regexLocal.test(this.value)
    if (adressTest) {
        validAddress = true;
        this.nextElementSibling.innerHTML = "";
    } else {
        validAddress = false;
        this.nextElementSibling.innerHTML = "Attention, veuillez renseigner une adresse postale valide"
    }
});
// Pour la ville
form.city.addEventListener('input', function() {
    let cityTest = regexLocal.test(this.value)
    if (cityTest) {
        validCity = true;
        this.nextElementSibling.innerHTML = "";
    } else {
        validCity = false;
        this.nextElementSibling.innerHTML = "Attention, veillez renseigner un nom de ville valide"
    }
});
// Et enfin pour l'email
form.email.addEventListener('input', function() {
    let emailTest = emailRegex.test(this.value)
    if (emailTest) {
        validEmail = true;
        this.nextElementSibling.innerHTML = "";
    } else {
        validEmail = false;
        this.nextElementSibling.innerHTML = "Attention, veuillez renseigner une adresse email valide"
    }
});

//On crée maintenant une fonction qui va écouter le click du bouton de commande, 
//vérifier le panier, 
//vérifier les informations du form, 
//et créer un objet contact qui sera envoyé dans le LS à l'aide la méthode POST
const postForm = () => {
    const orderButton = document.querySelector("#order");

    //On écoute donc le boutton commander au click

    orderButton.addEventListener("click", (e) => {
        e.preventDefault();
        //On vérifie qu'il y a bien des produits dans le panier, si oui on crée un tableau vide et on utilise la méthode PUSH pour modifier le contenu du tableau dans l'API et y insérer les Ids
        if (LOCALSTORAGE !== null) {
            let orderProducts = [];
            for (let i = 0; i < LOCALSTORAGE.length; i++) {
                orderProducts.push(LOCALSTORAGE[i].userProductId);
            }

            // On construit donc l'objet contact en vérifiant d'abord la validité des inputs

            if (validFirstName && validLastName && validAddress && validCity && validEmail) {
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
                    })
                    .catch(function(err) {
                        console.log("Erreur fetch" + err);
                    });
            } else {
                alert("Attention, il semblerait que le formulaire ne soit pas renseigné.");
            }
        } else {
            alert("Attention, il semblerait que votre panier soit vide. Veuillez sélectionner des articles et recommencer.");
        }
    });
}
postForm();