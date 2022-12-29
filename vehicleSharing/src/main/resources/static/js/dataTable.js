const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";
const GETVEICOLIBYID = "http://localhost:9069/api/veicoli/"; //inserire id qui per completare la query
const GETVEICOLIDISPONIBILITA = "http://localhost:9069/api/veicoli/status/" //inserire la disponibiltà per completare la query true/false
const GETVEICOLOTIPO = "http://localhost:9069/api/veicoli/tipo/" //inserire il tipo tra /AUTO/BICICLETTA/MONOPATTINO
const GETVEICOLOALIMENTAZIONE = "http://localhost:9069/api/veicoli/alimentazione/" //inserire la stringa di alimentazione
const PUTVEICOLO = "http://localhost:9069/api/veicoli/" //inserire id per completare la query
const DELETEVEICOLO = "http://localhost:9069/api/veicoli/" //inserire id per completare la query



var table = document.querySelector("#tabella");
let tableBody = document.querySelector("#tabella tbody");



window.addEventListener("load",fetchVeicoli);


function creaTabella(listaVeicoli) {
  listaVeicoli.forEach(veicolo => {


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
    btnModifica.setAttribute('id', veicolo.id);
    btnModifica.setAttribute('class','btn primaryBtn');
    btnModifica.textContent = "Modifica";
    btnElimina.setAttribute('id', veicolo.id);
    btnElimina.setAttribute('class','btn primaryBtn');
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

  });
  
  let datatable = new DataTable(table);

}



function fetchVeicoli() {
  fetch(VEICOLIMAPPING)
    .then(response => response.json())
    .then(data => {
      creaTabella(data);
      //funzione di creazione elementi

    })



}