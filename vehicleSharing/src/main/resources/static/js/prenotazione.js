window.addEventListener('load', fetchprenotazione);

const URL = "http://localhost:9069/api/prenotazione";

let prenotazione = document.querySelector("#prenotazione");


function getPrenotazione(prenotazioni) {
    let htmlCode = '';
    prenotazioni.forEach(singlePrenotaObjects => {
        // console.log("Sono qui");
        // console.log(singlePrenotaObjects);

        // console.log(singlePrenotaObjects.veicoli.modello);

        htmlCode +=
            `
        <div class="col-md-6 d-flex justify-content-center py-3">
        <div class="d-flex flex-column justify-content-center card border-0">
        <div class="p-3 set-bg">
        <div class="col-12 d-flex flex-column justify-content-center">
        <h3 class="fw-bold">Dettagli prenotazione: </h3>
        <div class="caratt">
        <div>Modello: ${singlePrenotaObjects.veicoli.modello}</div>
                            <div>Alimentazione: ${singlePrenotaObjects.veicoli.alimentazione}</div>
                            <div>Cilindrata: ${singlePrenotaObjects.veicoli.cilindrata}</div>
                            <div>Colore: ${singlePrenotaObjects.veicoli.colore}</div>
                            <div>Ora prenotazione: ${singlePrenotaObjects.oraPrenotazione}</div>
                            <div>Id Utente:${singlePrenotaObjects.archivioUtenti.userId}</div>
                            <div>Id Veicolo:${singlePrenotaObjects.veicoli.id}</div>
                            </div>
                            </div>
                            <div id="eliminazione" class="col-8 d-flex flex-column justify-content-start py-3">
                            <button class="btn primaryBtn" data-bs-toggle="modal" data-bs-target="#eliminaModal" id="${singlePrenotaObjects.id}" class="btn redBtn btn-close">ELIMINAAAAAAA</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            `;
    });

    prenotazione.innerHTML = htmlCode;

    let eliminaModale = document.querySelector("#eliminaModal");
    let btn = document.querySelectorAll("button");

    btn.forEach(button => {
        button.addEventListener("click", function() {
            sessionStorage.setItem('idPrenotazione', this.id);
            eliminaModale.style.display = 'block';
        });
    });



    var closeButtons = document.querySelectorAll('.btn-close');

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            eliminaModale.style.display = "none";
        });
    };

    let deleting = document.querySelector("#eliminaMod");

    deleting.addEventListener("click", function() {

        let idBottoneElimina = sessionStorage.getItem("idPrenotazione")
        console.log(idBottoneElimina);

        fetchdelete(idBottoneElimina);

        // location.reload();
    });


};






function fetchprenotazione() {

    var id;
    
    if(localStorage.getItem('id') == null){
        
        id= sessionStorage.getItem('id');
       
        
    } else {
        id = localStorage.getItem('id');
    }


    fetch(URL)
        .then(data => {
            return data.json()
        })
        .then(response => {

            // console.log(response);
            const prenotazioniFiltrate = response.filter(prenotazione => prenotazione.archivioUtenti.id === Number(id));




            // console.log(prenotazioniFiltrate);
            prenotazione.innerHTML = "";
            getPrenotazione(prenotazioniFiltrate);
            //cancellazione tabella
            //funzione di creazione tabella

        })
};


function fetchdelete(id) {
    console.log("ho cancellato"+id);

    fetch(URL + '/' + id, {
            method: 'DELETE',

        })
        .then(response => {
            console.log(response)

            fetchprenotazione();

        });
};





/*area personale utente

col-6 dati utente -dati abbonamento
col 12 prenotazioni 
alternate con bg light
1 evidenziata, in corso
le altre meno evideziata, usate

*/