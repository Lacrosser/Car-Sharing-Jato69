const UTENTIMAPPING = "http://localhost:9069/api/utenti";
const UTENTE = "Utente dei servizi"
const TIPO = "B"


/* -------------------------------------------------------------------------- */
/*                                  Variabili                                 */
/* -------------------------------------------------------------------------- */


let username = document.querySelector("#username").value;
let pass1 = document.querySelector("#password").value;
let pass2 = document.querySelector("#password2").value;
let nome = document.querySelector("#nome").value;
let cognome = document.querySelector("#cognome").value;
let email = document.querySelector("#email").value;
let dataNascita = document.querySelector("#dataNascita").value;


let errorMsg = document.querySelector("#errorIns");

/* -------------------------------------------------------------------------- */
/*                                Avvio pagina                                */
/* -------------------------------------------------------------------------- */

window.addEventListener("load",checkLogin())



/* -------------------------------------------------------------------------- */
/*                                  Funzioni                                  */
/* -------------------------------------------------------------------------- */

function checkPassword() {

    if (pass1.value == pass2.value) {

        return true;
    } else {
        errorMsg.textContent = "";
        errorMsg.textContent = "Le due password non coincidono"
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
    if (checkPassword) {
        let utente = new creaUtente(username, pass1, UTENTE, TIPO, nome, cognome, dataNascita, email)

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

function checkLogin(){
    if(sessionStorage.getItem("username") != null || localStorage.getItem("username") != null){
        window.location.assign('/');
      }
}

