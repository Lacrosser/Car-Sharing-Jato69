var utente = document.querySelector('#utente');

let link = null;

if(localStorage.getItem('username') == null){
    utente.textContent = sessionStorage.getItem('username');
    link = "http://localhost:9069/api/utenti/" + sessionStorage.getItem('id');
    caricaUtente();
} else {
    utente.textContent = localStorage.getItem('username');
    link = "http://localhost:9069/api/utenti/" + localStorage.getItem('id');
    caricaUtente();
}


function caricaUtente(){
    fetch(link)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response)
        stampaUtente(response);
    })
}   


function stampaUtente(utente){
    let nome = document.querySelector('#nome');
    let cognome = document.querySelector('#cognome');
    let nascita = document.querySelector('#nascita');
    let email = document.querySelector('#email');
    let dataIscrizione = document.querySelector('#dataIscrizione');
    let tipo = document.querySelector('#tipo');
    let firma = document.querySelector('#firma');
    let prenotazioniTot = document.querySelector('#prenotazioniTot');

    nome.textContent = utente.nome;
    cognome.textContent = utente.cognome;
    nascita.textContent = utente.nascita;
    email.textContent = utente.email;
    dataIscrizione.textContent = utente.dataIscrizione;
    tipo.textContent = utente.tipo;
    firma.textContent = utente.firma;
    prenotazioniTot.textContent = utente.prenotazioniTot;
}