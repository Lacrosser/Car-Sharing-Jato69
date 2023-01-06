const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";
const GETVEICOLIBYID = "http://localhost:9069/api/veicoli/"; //inserire id qui per completare la query
const GETVEICOLIDISPONIBILITA = "http://localhost:9069/api/veicoli/status/" //inserire la disponibiltà per completare la query true/false
const GETVEICOLOTIPO = "http://localhost:9069/api/veicoli/tipo/" //inserire il tipo tra /AUTO/BICICLETTA/MONOPATTINO
const GETVEICOLOALIMENTAZIONE = "http://localhost:9069/api/veicoli/alimentazione/" //inserire la stringa di alimentazione
const PUTVEICOLO = "http://localhost:9069/api/veicoli/" //inserire id per completare la query
const DELETEVEICOLO = "http://localhost:9069/api/veicoli/" //inserire id per completare la query



let table = document.querySelector("#tabella");
let tableBody = document.querySelector("#tabella tbody");
let error = document.querySelector("#error");


// var modal1 = bootstrap.Modal.getOrCreateInstance('#modificaModal');
// var modal2 = bootstrap.Modal.getOrCreateInstance('#eliminaModal');

let id = document.querySelector("#id");
let tipologia = document.querySelector("#tipo");
let alimentazione = document.querySelector("#alimentazione");
let modello = document.querySelector("#modello");
let colore = document.querySelector("#colore");
let cilindrata = document.querySelector("#cilindrata");
let disponibilita = document.querySelector("#disponibile");
let prolungato = document.querySelector("#prolungato");
let posizione = document.querySelector("#posizione");
let foto = document.querySelector("#foto");



window.addEventListener("load", fetchVeicoli);

/* -------------------------------------------------------------------------- */
/*                              Creazione tabella                             */
/* -------------------------------------------------------------------------- */
function creaTabella(listaVeicoli) {
    listaVeicoli.forEach(veicolo => {

        let vid = veicolo.id;



        let tr = document.createElement("tr");

        let tdId = document.createElement("td");
        let tdModello = document.createElement("td");
        let tdTipologia = document.createElement("td");
        let tdAlimentazione = document.createElement("td");
        let tdCilindrata = document.createElement("td");
        let tdColore = document.createElement("td");
        let tdDataInserimento = document.createElement("td");
        let tdNoleggio = document.createElement("td");
        let tdNoleggioP = document.createElement("td");
        let tdModifica = document.createElement('td');
        let tdElimina = document.createElement('td');
        let btnModifica = document.createElement('button');
        let btnElimina = document.createElement('button');



        tdId.textContent = veicolo.id;
        tdModello.textContent = veicolo.modello;
        tdTipologia.textContent = veicolo.veicolo;
        tdAlimentazione.textContent = veicolo.alimentazione;
        tdCilindrata.textContent = veicolo.cilindrata;
        tdColore.textContent = veicolo.colore;
        tdDataInserimento.textContent = veicolo.dataInserimento;
        tdNoleggio.textContent = veicolo.disponibilita;
        tdNoleggioP.textContent = veicolo.prolungato;


        btnModifica.setAttribute('id', "bottoneMOD");
        btnModifica.setAttribute('class', 'btn primaryBtn');
        btnModifica.setAttribute("data-bs-toggle", "modal");
        btnModifica.setAttribute("data-bs-target", "#modificaModal");
        btnModifica.textContent = "Modifica";


        btnElimina.setAttribute('id', "bottoneELI");
        btnElimina.setAttribute('class', 'btn primaryBtn');
        btnElimina.setAttribute("data-bs-toggle", "modal");
        btnElimina.setAttribute("data-bs-target", "#eliminaModal");
        // btnElimina.setAttribute('id', veicolo.id);
        btnElimina.setAttribute('class', 'btn redBtn');
        btnElimina.textContent = "Elimina";


        tdModifica.appendChild(btnModifica);
        tdElimina.appendChild(btnElimina);

        tr.appendChild(tdId);
        tr.appendChild(tdModello);
        tr.appendChild(tdTipologia);
        tr.appendChild(tdAlimentazione);
        tr.appendChild(tdCilindrata);
        tr.appendChild(tdColore);
        tr.appendChild(tdDataInserimento);
        tr.appendChild(tdNoleggio);
        tr.appendChild(tdNoleggioP);
        tr.appendChild(tdModifica);
        tr.appendChild(tdElimina);



        tableBody.appendChild(tr);

        let modaleModifica = document.querySelector("#modificaModal");

        //Aggiungi un'id univoca ad ogni bottone di modifica. Ad esempio, puoi utilizzare l'id del veicolo come id del bottone:
        btnModifica.setAttribute('id', `${veicolo.id}`);

        btnElimina.setAttribute('id', `${veicolo.id}`);



        btnModifica.addEventListener("click", function() {

            sessionStorage.setItem('idBottoneModifica', this.id);

            modaleModifica.style.display = 'block';
            scriviCampi(veicolo);
        });



        let modaleDelete = document.querySelector("#eliminaModal");

        btnElimina.addEventListener("click", function() {
            error.innerHTML = "";
            modaleDelete.style.display = 'block';
            sessionStorage.setItem('idBottoneElimina', this.id);
        });

        var closeButtons = document.querySelectorAll('.btn-close');

        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function() {
                modaleModifica.style.display = 'none';
                modaleDelete.style.display = "none;"
            });
        }

    });

    /* -------------------------------------------------------------------------- */
    /*                             costruzione tabella                            */
    /* -------------------------------------------------------------------------- */

    let datatable = new DataTable(table, {

        "language": {
            "sSearch": 'Cerca:',
            "lengthMenu": "Mostra _MENU_ Record per pagina",
            "zeroRecords": "Veicolo non trovato - Si prega di controllare la ricerca",
            "info": "Questa è la pagina _PAGE_ di _PAGES_ del catalogo",
            "infoEmpty": "Non ci sono veicoli in database",
            "infoFiltered": "(Filtrato da _MAX_ record totali)",
            'oPaginate': {
                'sNext': 'Prossimo',
                'sPrevious': 'Precedente'
            }

        }
    });
    /* -------------------------------------------------------------------------- */
    /*                              costruzione reset                             */
    /* -------------------------------------------------------------------------- */

    let reset = document.querySelector("#reset")
    reset.addEventListener("click", function() {
        let idBottoneModifica = sessionStorage.getItem('idBottoneModifica');
        let veicolos = listaVeicoli.find(v => v.id == idBottoneModifica);
        scriviCampi(veicolos);
    });
    /* -------------------------------------------------------------------------- */
    /*                              costruzione salva                             */
    /* -------------------------------------------------------------------------- */

    let salva = document.querySelector("#salvaMod");
    salva.addEventListener("click", function() {
        //sta();
        let idBottoneModifica = sessionStorage.getItem('idBottoneModifica');


        putVeicoli(idBottoneModifica);
    });


    /* -------------------------------------------------------------------------- */
    /*                                Eliminazione                                */
    /* -------------------------------------------------------------------------- */
    let deleting = document.querySelector("#eliminaMod");

    deleting.addEventListener("click", function() {

        let idBottoneElimina = sessionStorage.getItem("idBottoneElimina");

        fetchVeicoloSingolo(idBottoneElimina)

        // eliminaveicoli(idBottoneElimina);
    })







}


/* -------------------------------------------------------------------------- */
/*                         Funzione di scrittura dati                         */
/* -------------------------------------------------------------------------- */

function scriviCampi(data) {


    /* -------------------------------------------------------------------------- */
    /*                             form per nascondere                            */
    /* -------------------------------------------------------------------------- */

    let tipform = document.querySelector("#tipoForm");
    let aliform = document.querySelector("#alimentazioneForm");
    let modForm = document.querySelector("#modelloForm");
    let coloreForm = document.querySelector("#coloreForm");
    let cilForm = document.querySelector("#cilindrataForm");
    let fotoForm = document.querySelector("#fotoForm");



    id.value = data.id;
    tipologia.value = data.veicolo;
    alimentazione.value = data.alimentazione;
    modello.value = data.modello;
    colore.value = data.colore;
    cilindrata.value = data.cilindrata;
    disponibilita.checked = data.disponibilita;
    prolungato.checked = data.prolungato;
    posizione.value = data.posizione;


    if (data.veicolo == "AUTO") {

        tipform.removeAttribute("hidden", "hidden");
        aliform.removeAttribute("hidden", "hidden");
        modForm.removeAttribute("hidden", "hidden");
        coloreForm.removeAttribute("hidden", "hidden");
        cilForm.removeAttribute("hidden", "hidden");
        fotoForm.removeAttribute("hidden", "hidden");


    } else if (data.veicolo == "MONOPATTINO" || data.veicolo == "BICICLETTA") {



        tipform.setAttribute("hidden", "hidden");
        aliform.setAttribute("hidden", "hidden");
        modForm.setAttribute("hidden", "hidden");
        coloreForm.setAttribute("hidden", "hidden");
        cilForm.setAttribute("hidden", "hidden");
        fotoForm.setAttribute("hidden", "hidden");


    }





};

/* -------------------------------------------------------------------------- */
/*                              costruttore auto                              */
/* -------------------------------------------------------------------------- */


function Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato, immagine) {
    this.veicolo = veicolo;
    this.modello = modello;
    this.colore = colore;
    this.cilindrata = cilindrata;
    this.alimentazione = alimentazione;
    this.disponibilita = disponibilita;
    this.posizione = posizione;
    this.prolungato = prolungato;
    this.immagine = immagine;

};


/* -------------------------------------------------------------------------- */
/*                                    Fetch                                   */
/* -------------------------------------------------------------------------- */

function fetchVeicoli() {
    fetch(VEICOLIMAPPING)
        .then(response => response.json())
        .then(data => {




            creaTabella(data);

        })

};


function fetchVeicoloSingolo(id) {
    var url = VEICOLIMAPPING + "/" + id;
    fetch(url)
        .then(response => response.json())
        .then(data => {

            eliminaveicoli(data);

        })
        .catch(error => console.error(error))
}



function putVeicoli(id) {


    var url = VEICOLIMAPPING + "/" + id;


    let shazam = new Auto(tipologia.value, modello.value, colore.value, cilindrata.value, alimentazione.value, disponibilita.checked, posizione.value, prolungato.checked, foto.value);


    fetch(url, {
            method: 'PUT', // Imposta il metodo su put
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shazam)
        })
        //.then(data => data.json())
        .then(response => {
            console.log(response);
            console.log("Veicolo modificato");

            // fetchVeicoli();
            location.reload();

        });

};


function eliminaveicoli(data) {


    var url = VEICOLIMAPPING + "/" + data.id;

    console.log(data.disponibilita);

    //eseguire il delete solo se il veicolo è prenotabile

    if (data.disponibilita) {

        fetch(url, {
                method: 'DELETE', // Imposta il metodo su put

            })

            .then(response => {
                console.log(response);
                console.log("Veicolo Eliminato");


                // fetchVeicoli();
                location.reload();

            }).catch(error => {
                console.error(error)
            });

    } else {
        error.innerHTML = "Non puoi cancellare un veicolo quando è prenotato"
    }


};