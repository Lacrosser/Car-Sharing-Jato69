const UTENTIMAPPING = "http://localhost:9069/api/utenti";
const UTENTE = "Utente dei servizi"
const TIPO = "B"


const REGUSER = /^[a-zA-Z\d]{1,12}$/;
const REGPASS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


/* -------------------------------------------------------------------------- */
/*                                  Variabili                                 */
/* -------------------------------------------------------------------------- */


let username = document.querySelector("#username");
let pass1 = document.querySelector("#password");
let pass2 = document.querySelector("#password2");
let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let email = document.querySelector("#email");
let dataNascita = document.querySelector("#dataNascita");


let btnReg = document.querySelector("#registrati")
let errorUser = document.querySelector("#errorUser");
let errorPass = document.querySelector("#errorPass");

/* -------------------------------------------------------------------------- */
/*                         AVVIO PAGINA/EVENT LISTENER                        */
/* -------------------------------------------------------------------------- */

window.addEventListener("load", checkLogin());

btnReg.addEventListener("click", registrazione);



/* -------------------------------------------------------------------------- */
/*                                  Funzioni                                  */
/* -------------------------------------------------------------------------- */

function checkPassword() {

    if (pass1.value == pass2.value) {

        return true;
    } else {
        
         errorPass.textContent = "Le due password non coincidono"
        return false;
    }


}

function creaUtente(userId, password, firma, tipo, nome, cognome, nascita, email) {
    this.userId = userId;
    this.password = password;
    this.firma = firma;
    this.tipo = tipo;
    this.nome = nome;
    this.cognome = cognome;
    this.nascita = nascita;
    this.email = email;

}


function registrazione() {
    if (checherReg) {
        let utente = new creaUtente(username.value, pass1.value, UTENTE, TIPO, nome.value, cognome.value, dataNascita.value, email.value)

        fetch(UTENTIMAPPING, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(utente)


            })
            .then(data => {
                data.json();
            })
        console.log("Utente aggiunto")


    }



}

function checkLogin() {
    if (sessionStorage.getItem("username") != null || localStorage.getItem("username") != null) {
        window.location.assign('/');
    }
}


/* -------------------------------------------------------------------------- */
/*                                 CHECKREGEX                                 */
/* -------------------------------------------------------------------------- */

function checherReg() {

    ripristinoCampi();

    if (checkPassword) {
        if (controllaUser && controllaPassword) {
            return true;
        } else {
            return false
        }

    } else return false;

}




function controllaUser() {
    if (!username.value.match(REGUSER)) {

        errorUser.textContent = "Per favore controlla il tuo Username:";

        for (let i = 0; i < 2; i++) {

            switch (i) {
                case 0:
                    var li = document.createElement("li")
                    li.textContent = "Username: massimo 16 caratteri";
                    errorUser.appendChild(li);

                    break;
                case 1:
                    var li = document.createElement("li")
                    li.textContent = "Username: Non sono accettati spazi o caratteri speciali";
                    errorUser.appendChild(li);
                    break;

                default:
                    break;
            }

        }
        event.preventDefault();
        return false;
    } else {
        return true;
    }

}

function controllaPassword() {
    if (!pass1.value.match(REGPASS)) {
        //almeno una maiuscola
        //almeno una minuscola
        //almeno un carattere speciale @$!%*?&
        //lunghezza minima 8 caratteri
        errorPass.textContent = "Per favore controlla la tua Password:";
        for (let i = 0; i < 6; i++) {

            switch (i) {
                case 0:
                    var li = document.createElement("li")
                    li.textContent = "Password: deve avere almeno una maiuscola";
                    errorPass.appendChild(li);

                    break;
                case 1:
                    var li = document.createElement("li")
                    li.textContent = "Password:Deve avere almeno una minuscola";
                    errorPass.appendChild(li);
                    break;
                case 2:
                    var li = document.createElement("li")
                    li.textContent = "Password:Deve avere almeno un carattere speciale @$!%*?&";
                    errorPass.appendChild(li);

                    break;
                case 3:
                    var li = document.createElement("li")
                    li.textContent = "Password: Deve contenere almeno un numero";
                    errorPass.appendChild(li);

                    break;
                case 4:
                    var li = document.createElement("li")
                    li.textContent = "Password: Lunghezza minima 8 caratteri";
                    errorPass.appendChild(li);

                    break;
                case 5:
                    var li = document.createElement("li")
                    li.textContent = "Password: Deve contenere almeno un numero";
                    errorPass.appendChild(li);

                    break;

                default:
                    break;
            }

        }
        event.preventDefault();
        return false;
    } else {
        return true;
    }

}

function ripristinoCampi() {
    var li = document.querySelectorAll("ul#errorPass li");
    var lu = document.querySelectorAll("ul#errorUser li");
    errorPass.textContent = "";
    errorUser.textContent = "";
    errorLegoCity.textContent = "";
    li.forEach(element => {

        element.remove();

    });
    lu.forEach(luele => {
        luele.remove();
    });
}