//Localisation of form in the DOM & creation of const for regex
const form = document.querySelector(".cart__order__form")
let regex = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s]{3,}$/;
let regexLocalisation = /^[-'a-zA-Z0-9À-ÖØ-öø-ÿ\s]{3,}$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Creation of array with datas for each field
let formFields = [{ name: "firstName", regexp: regex, valid: false, msgError: "Attention, veuillez renseigner correctement votre prénom. Il doit être écrit en toutes lettres et comporter un minimum de 3 caractères" },
    { name: "lastName", regexp: regex, valid: false, msgError: "Attention, veuillez renseigner correctement votre nom. Il doit être écrit en toutes lettres et comporter un minimum de 3 caractères" },
    { name: "address", regexp: regexLocalisation, valid: false, msgError: "Attention, veuillez renseigner une adresse postale valide" },
    { name: "city", regexp: regexLocalisation, valid: false, msgError: "Attention, veuillez renseigner un nom de ville valide" },
    { name: "email", regexp: emailRegex, valid: false, msgError: "Attention, veuillez renseigner une adresse email valide" }
];

// Then analyze and verif each fields
formFields.forEach(field => {
    form.querySelector("#" + field.name).addEventListener("input", function() {
        let value = field.regexp.test(this.value);
        field.valid = value ? true : false;
        this.nextElementSibling.innerHTML = field.valid ? "" : field.msgError;
    })
});

// function to analyze, valid and submit form
const postForm = () => {
    const orderForm = document.querySelector(".cart__order__form");
    orderForm.addEventListener("submit", (e) => {

        //get datas in the LS
        const cart = new Cart();
        const actualCart = cart.getCart();

        // return alert and false if the cart is empty
        if (actualCart.length == 0) {
            e.preventDefault();
            alert("Attention, il semblerait que votre panier soit vide. Veuillez sélectionner des articles et recommencer.");
            return false;
        }

        // if not, creation of empty array + push method to modify/add the array content in the API
        let orderProducts = [];
        for (let i = 0; i < actualCart.length; i++) {
            orderProducts.push(actualCart[i].userProductId);
        };

        // verification of the fields of the form
        let formValid = true;
        formFields.forEach(field => {
            if (field.valid == false) {
                formValid = false
            };
        });

        // return alert and false if the form is incorrect
        if (formValid == false) {
            e.preventDefault();
            alert("Attention, il semblerait que le formulaire ne soit pas bien renseigné.");
            return false;
        };

        // if not, creation contact object with input values
        const orderUserProduct = {
            contact: {
                firstName: e.target.querySelector("#firstName").value,
                lastName: e.target.querySelector("#lastName").value,
                address: e.target.querySelector("#address").value,
                city: e.target.querySelector("#city").value,
                email: e.target.querySelector("#email").value,
            },
            products: orderProducts,
        };

        // Post method + fetch with id in URL
        const post = {
            method: "POST",
            body: JSON.stringify(orderUserProduct),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch("http://localhost:3000/api/products/order", post)
            .then((res) => res.json())
            .then((data) => {
                // Clear LS and fields form
                localStorage.clear()
                document.querySelector(".cart__order__form").reset();
                document.location.href = "confirmation.html?id=" + data.orderId;

            })
            .catch(function(err) {
                console.log("Erreur fetch" + err);
                alert("Il semblerait qu'il y ait un problème au niveau de notre API. Veuillez retenter ultérieurement.")
            });
    });
}
postForm();