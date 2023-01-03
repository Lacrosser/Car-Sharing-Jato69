window.addEventListener('load', fetchprenotazione);

const URL = "http://localhost:9045/api/prenotazione";

let htmlCode = ``;
const prenotazione = document.querySelector("#prenotazione");


function getPrenotazione(prenotazioni) {

    prenotazioni.forEach(singlePrenotaObjects => {

        console.log("Sono qui");
        console.log(singlePrenotaObjects);

        console.log(singlePrenotaObjects.veicolo.modello);


        htmlCode =
            htmlCode +
            `
        
        <div class="col-md-8 col-lg-10 d-lg-flex py-3">
            <div class="me-4">
                <img class="img-fluid" src="${singlePrenotaObjects.veicolo.immagine}" alt="${singlePrenotaObjects.veicolo.immagineAlt}">
            </div>
        
            <div class="d-flex flex-column justify-content-center col-lg-6 card border-0">
                <div class="p-3 set-bg">
                    <div class="col-8 d-flex flex-column justify-content-center">
                        <h3 class="fw-bold">Dettagli prenotazione: </h3>
                        <div class="caratt">
                            <div>${singlePrenotaObjects.veicolo.modello}</div>
                            <div>${singlePrenotaObjects.veicolo.alimentazione}</div>
                            <div>${singlePrenotaObjects.veicolo.cilindrata}</div>
                            <div>${singlePrenotaObjects.veicolo.colore}</div>
                            <div>${singlePrenotaObjects.data}</div>
                            <div>${singlePrenotaObjects.oraConsegna}</div>
                        </div>
                    </div>
        
                    <div id="eliminazione" class="col-8 d-flex flex-column justify-content-start py-3">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="eliminaModal">
                            ELIMINA PRENOTAZIONE
                        </button>
                    </div>
                </div>
            </div>
        </div>
              
              `
        prenotazione.innerHTML = htmlCode;
        // let btn=document.createElement("button");

        // btn.setAttribute("class", "btn btn-primary my-1");
        // btn.setAttribute("id", "eliminaPreno");
        // btn.textContent="ELIMINA PRENOTAZIONE";

        // let divel=document.querySelector("#eliminazione");
        // divel.appendChild(btn);

        let elimina = document.querySelector('#eliminaPreno}');
        elimina.addEventListener('click', function() {
            let id = singlePrenotaObjects.id;
            sessionStorage.setItem("idPrenotazione", this.singlePrenotaObjects.id);
            let veicoli = prenotazioni.find(v => v.id == sessionStorage.getItem("idPrenotazione"));
            console.log(veicoli.id);
            fetchdelete(veicoli.id);

        });
    });
}


function fetchprenotazione() {

    let id = localStorage.getItem('utenteID');
    console.log(id);
    fetch(URL)
        .then(data => {
            return data.json()
        })
        .then(response => {

            // console.log(response);
            const prenotazioniFiltrate = response.filter(prenotazione => prenotazione.utente.id === Number(id));




            // console.log(prenotazioniFiltrate);
            prenotazione.innerHTML = ``;
            getPrenotazione(prenotazioniFiltrate);
            //cancellazione tabella
            //funzione di creazione tabella

        })
};


function fetchdelete(id) {


    fetch(URL + '/' + id, {
            method: 'DELETE',

        })
        .then(response => {
            console.log(response)

            fetchprenotazione();

        });
}





/*area personale utente

col-6 dati utente -dati abbonamento
col 12 prenotazioni 
alternate con bg light
1 evidenziata, in corso
le altre meno evideziata, usate

*/