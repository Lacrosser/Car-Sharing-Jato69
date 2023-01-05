var selectBtn = document.querySelector('#selectBtn');
var formVeicolo = document.querySelector('#formVeicolo');

var alimentazioneForm = document.querySelector('#alimentazioneForm');
var modelloForm = document.querySelector('#modelloForm');
var coloreForm = document.querySelector('#coloreForm');
var fotoForm = document.querySelector('#fotoForm');
var cilindrataForm = document.querySelector('#cilindrataForm');

var contenutoModal = document.querySelector('#contenutoModal');
var titoloModal = document.querySelector('#titoloModal');

// Aggiungi veicolo

var aggiungiBtn = document.querySelector('#aggiungi');



function verificaSelect(){

    var selectTipo = document.querySelector('#tipologia').value;

    var tipologia = null;

    if(selectTipo == 0){

        formVeicolo.setAttribute('hidden','');

    } else if (selectTipo == "AUTO"){

        //form AUTO
        tipologia = "AUTO";
        formVeicolo.removeAttribute("hidden");
        alimentazioneForm.removeAttribute('hidden');
        modelloForm.removeAttribute('hidden');
        coloreForm.removeAttribute('hidden');
        fotoForm.removeAttribute('hidden');
        cilindrataForm.removeAttribute('hidden');

    } else if (selectTipo == "MONOPATTINO"){

        //form MONOPATTINO
        tipologia = "MONOPATTINO";
        formVeicolo.removeAttribute('hidden');
        alimentazioneForm.setAttribute('hidden','');
        modelloForm.setAttribute('hidden','');
        coloreForm.setAttribute('hidden','');
        fotoForm.setAttribute('hidden','');
        cilindrataForm.setAttribute('hidden','');


    } else if (selectTipo == "BICICLETTA"){

        //form bicicletta
        tipologia = "BICICLETTA";
        formVeicolo.removeAttribute('hidden');
        alimentazioneForm.setAttribute('hidden','');
        modelloForm.setAttribute('hidden','');
        coloreForm.setAttribute('hidden','');
        fotoForm.setAttribute('hidden','');
        cilindrataForm.setAttribute('hidden','');

    }

    console.log(tipologia);

}

function aggiungiVeicolo(){

    var veicolo = document.querySelector('#tipologia').value;

    function Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato,immagine){
        this.veicolo = veicolo;
        this.modello = modello;
        this.colore = colore;
        this.cilindrata = cilindrata;
        this.alimentazione = alimentazione;
        this.disponibilita = disponibilita;
        this.posizione = posizione;
        this.prolungato = prolungato;
        this.immagine=immagine;
    
    };

    switch (veicolo) {
        case "AUTO":
            
            
            var alimentazione = document.querySelector('#alimentazione').value;
            var modello = document.querySelector('#modello').value;
            var colore = document.querySelector('#colore').value;
            var disponibilitaCheck = document.querySelector('#disponibile');
            var prolungatoCheck = document.querySelector('#prolungato');
            var posizione = document.querySelector('#posizione').value;
            var cilindrata = document.querySelector('#cilindrata').value;
            var immagine;
            // Immagine


            if(alimentazione==="ibrida"){

                let randomNumber = Math.floor(Math.random() * 2) + 1;

                if(randomNumber===1){
                    immagine="/img/imgVeicoli/mercedesHybrida.png";

                }else{
                    immagine="/img/imgVeicoli/toyotaHybrida.png";
                }

            }else{
                let randomNumber = Math.floor(Math.random() * 3) + 1;
                if(randomNumber===1){
                    immagine="/img/imgVeicoli/bmwElettrica.png";

                }else if(randomNumber===2)
                {
                    immagine="/img/imgVeicoli/smartElettrica.png";
                }
                else{
                    immagine="/img/imgVeicoli/golfElettrica.png";
                }
                
            }
            

            if(prolungatoCheck.checked){
                prolungato = true;
            } else {
                prolungato = false;
            }

            if(disponibilitaCheck.checked){
                disponibilita = true;
            } else {
                disponibilita = false;
            }

            var auto = new Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato,immagine);
            
            if(modello != ""){
                if(colore != ""){
                    if(cilindrata != ""){
                        if(posizione != ""){

                            titoloModal.textContent = "Fatto"

                            contenutoModal.textContent = "Veicolo inserito con successo!"
                            console.log(modello + colore + cilindrata);

                            fetchVeicolo(auto);

                        } else {
                            titoloModal.textContent = "Errore"

                            contenutoModal.textContent = "Posizione auto mancante"
                        }
                    } else {
                        titoloModal.textContent = "Errore"

                        contenutoModal.textContent = "Cilindrata auto mancante"
                    }
                } else {
                    titoloModal.textContent = "Errore"

                    contenutoModal.textContent = "Colore auto mancante"
                }
            } else {
                titoloModal.textContent = "Errore"

                contenutoModal.textContent = "Modello auto mancante"
            }

            

            break;
        case "MONOPATTINO":
            
            
            var alimentazione = "elettrica";
            var modello = "e-scooter";
            var colore = "Nero";
            var disponibilitaCheck = document.querySelector('#disponibile');
            var prolungatoCheck = document.querySelector('#prolungato');
            var posizione = document.querySelector('#posizione').value;
            var cilindrata = "500W";
            var immagine="/img/imgVeicoli/scooter.png";
            // Immagine
            

            if(prolungatoCheck.checked){
                prolungato = true;
            } else {
                prolungato = false;
            }

            if(disponibilitaCheck.checked){
                disponibilita = true;
            } else {
                disponibilita = false;
            }

            var monopattino = new Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato,immagine);

            

                if(posizione != ""){

                    titoloModal.textContent = "Fatto"

                    contenutoModal.textContent = "Veicolo inserito con successo!"
                    fetchVeicolo(monopattino);

                } else {
                    titoloModal.textContent = "Errore"

                    contenutoModal.textContent = "Posizione monopattino mancante"
                }

        

           

            break;
        case "BICICLETTA":
            
            
            var alimentazione = "elettrica";
            var modello = "e-bike";
            var colore = "Nero";
            var disponibilitaCheck = document.querySelector('#disponibile');
            var prolungatoCheck = document.querySelector('#prolungato');
            var posizione = document.querySelector('#posizione').value;
            var cilindrata = "0";
            var immagine="/img/imgVeicoli/bici.png";
            // Immagine

            if(prolungatoCheck.checked){
                prolungato = true;
            } else {
                prolungato = false;
            }

            if(disponibilitaCheck.checked){
                disponibilita = true;
            } else {
                disponibilita = false;
            }

            var bici = new Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato,immagine);

            if(posizione != ""){

                titoloModal.textContent = "Fatto"

                contenutoModal.textContent = "Veicolo inserito con successo!"
                fetchVeicolo(bici);

            } else {
                titoloModal.textContent = "Errore"

                contenutoModal.textContent = "Posizione monopattino mancante"
            }

            

            break;
    
        default:
            break;
    }

}

function fetchVeicolo(veicolo){

    const URL = "http://localhost:9069/api/veicoli";

    fetch(URL, {
        method: 'POST', // Imposta il metodo su POST
        headers: {
          // Imposta l'intestazione Content-Type su application/json
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(veicolo) // Converti i dati in formato JSON e impostali come corpo della richiesta
      })
      .then(response => response.json()) // Estrai il JSON dalla risposta
      .then(data => console.log(data)) // Esegui qualcosa con i dati estratti
      .catch(error => console.error(error)); // Gestisci eventuali errori

}





selectBtn.addEventListener('click',verificaSelect);
aggiungiBtn.addEventListener('click', aggiungiVeicolo)