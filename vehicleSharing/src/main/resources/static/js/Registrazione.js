const UTENTIMAPPING = "http://localhost:9069/api/utenti";
const UTENTE = "Utente dei servizi"
const TIPO = "B"


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


let btnReg=document.querySelector("#registrati")
let errorMsg = document.querySelector("#errorIns");

/* -------------------------------------------------------------------------- */
/*                         AVVIO PAGINA/EVENT LISTENER                        */
/* -------------------------------------------------------------------------- */

window.addEventListener("load",checkLogin());

btnReg.addEventListener("click",registrazione());



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

function checkLogin(){
    if(sessionStorage.getItem("username") != null || localStorage.getItem("username") != null){
        window.location.assign('/');
      }
}

