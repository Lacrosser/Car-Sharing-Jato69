const UTENTIMAPPING = "http://localhost:9069/api/utenti";
const UTENTE="Utente dei servizi"
const TIPO="B"


let pass1 = document.querySelector("#password");
let pass2 = document.querySelector("#password2")
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let errorMsg=document.quer


function checkPassword() {

    if (pass1.value == pass2.value) {

        return true;
    } else {
        return false;
    }


}

function creaUtente(userId,password,firma,tipo,nome,cognome,nascita,email){
    this.userId=userId;
    this.password=password;
    this.firma=firma;
    this.tipo=tipo;
    this.nome=nome;
    this.cognome=cognome;
    this.nascita=nascita;
    this.email=email;

}