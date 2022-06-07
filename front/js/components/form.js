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

//On crée maintenant une fonction pour valider le formulaire
let goodForm = () => {
    //On va vérifier nos booléans
    if (validFirstName && validLastName && validAddress && validCity && validEmail) {
        return true;
    } else {
        alert("Attention, il semble y avoir un problème dans vos coordonnées. Veuillez les renseigner correctement afin de pouvoir passer commande");
        return false;
    }
}


// Constitution d'un objet contact + d'un tableau de produits
//On commence par créer un objet qui va récupérer les données du client

const clientOrder = {
    contact: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        email: email
    },
    orderedProducts: []
};

//On va maintenant cibler le bouton pour commander et on va l'écouter au click
//puis on va se servir de la methode POST qui permet de créer ou modifier une ressource au sein de l'API

const orderButton = document.querySelector("#order")
orderButton.addEventListener("click", (e) => {
    e.preventDefault();
    //On vérifie si le formulaire est bon et on crée une constante post qui contient la méthode POST et qu'on appelera dans le fetch()
    if (goodForm()) {
        const post = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order),
        };
        console.log(post)
            // On appelle donc maintenant l'API (au niveau du router.post : order) pour lui envoyer l'objet créé
        fetch("http://localhost:3000/api/products/order", post)
            .then((res) => res.json())
            .then(data => {
                console.table(data);
                localStorage.setItem("orderId", data.orderId);
                document.location.href = `confirmation.html`;
            });
    };
});