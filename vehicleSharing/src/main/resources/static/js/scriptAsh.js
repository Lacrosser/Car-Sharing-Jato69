/* -------------------------------------------------------------------------- */
/*                            COSTANTI PER LE FETCH                           */
/* -------------------------------------------------------------------------- */

const UTENTIMAPPING = "http://localhost:9069/api/utenti";
const GETUTENTEBYID = "http://localhost:9069/api/utenti/"; //inserire id qui per completare la query
const DELETEUTENTEBYID = "http://localhost:9069/api/utenti/"; //inserire id qui per completare la query
const LOGIN = "http://localhost:9069/api/utenti/login";



const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";
const GETVEICOLIBYID = "http://localhost:9069/api/veicoli/"; //inserire id qui per completare la query
const GETVEICOLIDISPONIBILITA = "http://localhost:9069/api/veicoli/status/" //inserire la disponibiltà per completare la query true/false
const GETVEICOLOTIPO = "http://localhost:9069/api/veicoli/tipo/" //inserire il tipo tra /AUTO/BICICLETTA/MONOPATTINO
const GETVEICOLOALIMENTAZIONE = "http://localhost:9069/api/veicoli/alimentazione/" //inserire la stringa di alimentazione
const PUTVEICOLO = "http://localhost:9069/api/veicoli/" //inserire id per completare la query
const DELETEVEICOLO = "http://localhost:9069/api/veicoli/" //inserire id per completare la query



const GETPRENOTAZIONI = "http://localhost:9069/api/prenotazione";
const GETPRENOTAZIONIBYID = "http://localhost:9069/api/prenotazione/"; //inserire l'id per completare la query

const GETVEICOLOPRENOTAZIONE = "http://localhost:9069/api/prenotazione/utenti/" //inserire l'id per completare la query
const GETUTENTEPRENOTAZIONE = "http://localhost:9069/api/prenotazione/veicoli/"

const POSTPRENOTAZIONE = "http://localhost:9069/api/prenotazione/utente" //inserire id+/veicolo/+inserire id veicolo

const PUTPRENOTAZIONE = "http://localhost:9069/api/prenotazione/"; //inserire l'id per completare la query
const DELETEPRENOTAZIONE = "http://localhost:9069/api/prenotazione/" //inserire id per completare la query




function mostraVeicoli(listaVeicoli) {
    listaVeicoli.forEach(veicolo => {
        let modello = veicolo.modello;
        let veicolo = veicolo.veicolo;
        let alimentazione = veicolo.alimentazione;
        let id=veicolo.id;


        var modelloVeicolo=document.createElement("div");
        modelloVeicolo.setAttribute("class","text-white");

        var mezzoVeicolo = document.createElement('div');
        mezzoVeicolo.setAttribute('class','veicolo');
        
        var coloreVeicolo = document.createElement('div');
        coloreVeicolo.setAttribute('class','alimentazione');
        
        

       
        var aWrap = document.createElement('div');
        var a = document.createElement('a');
        var newDiv = document.createElement('div');
        aWrap.setAttribute('class','noLink veicoloCard col-12 col-md-5 col-lg-3 m-1');
        newDiv.setAttribute('class', '');
        var disponibilitaMezzo = document.createElement('div');
        
        if(disponibilita == true){
            disponibilitaMezzo.setAttribute('class','disponibile');
            disponibilitaMezzo.textContent = "Disponibile";
            var link = "/paginaVeicolo?id=" + id;
            a.setAttribute('href', link);
            newDiv.appendChild(mezzoVeicolo);
            newDiv.appendChild(coloreVeicolo);
            newDiv.appendChild(disponibilitaMezzo);
            a.appendChild(newDiv);
            aWrap.appendChild(a);
            contenitore.appendChild(aWrap);
        } else if (disponibilita == false){
            disponibilitaMezzo.setAttribute('class','noDisponibile');
            disponibilitaMezzo.textContent = "Non disponibile";
        }





    })


}






function mostraVeicoliNoDisponibile(listaVeicoli) {
    listaVeicoli.forEach(mezzo => {
        var modello = mezzo.modello;
        var veicolo = mezzo.veicolo;
        var alimentazione = mezzo.alimentazione;
        // var id = veicolo.id;

        var mezzoVeicolo = document.createElement('div');
        mezzoVeicolo.setAttribute('class', 'veicolo');
        var coloreVeicolo = document.createElement('div');
        coloreVeicolo.setAttribute('class', 'alimentazione');
        var mezzoModello = document.createElement("div");
        mezzoModello.setAttribute("class", "modello");

        mezzoModello.textContent = modello;
        mezzoVeicolo.textContent = veicolo;
        coloreVeicolo.textContent = alimentazione;

        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'veicoloCardNoDisp col-12 col-md-5 col-lg-3 m-1 whiteText');
        var disponibilitaMezzo = document.createElement('div');
        disponibilitaMezzo.setAttribute('class', 'noDisponibile');
        disponibilitaMezzo.textContent = "Non disponibile";


        newDiv.appendChild(mezzo.modello);
        newDiv.appendChild(mezzoVeicolo);
        newDiv.appendChild(coloreVeicolo);
        newDiv.appendChild(disponibilitaMezzo);

        contenitoreNoDisp.appendChild(newDiv);

    });
}



function selettoreFetch() {
    var form = document.querySelector('#selectTipo').value;


    switch (form) {
        case "AUTO":
            contenitore.textContent = "";
            fetch(GETVEICOLOTIPO + "AUTO")
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    //mostraVeicoli(response)
                });

            break;
        case "MONOPATTINO":
            contenitore.textContent = "";
            fetch(GETVEICOLOTIPO + "MONOPATTINO")
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    //mostraVeicoli(response)
                });

            break;
        case "BICICLETTA":
            contenitore.textContent = "";
            fetch(GETVEICOLOTIPO + "BICICLETTA")
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    //mostraVeicoli(response)
                });

            break;
        case "elettrica":
            contenitore.textContent = "";
            fetch(GETVEICOLOALIMENTAZIONE + "elettrica")
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    //mostraVeicoli(response)
                });

            break;
        case "ibrida":
            contenitore.textContent = "";
            fetch(GETVEICOLOALIMENTAZIONE + "ibrida")
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    //mostraVeicoli(response)
                });

            break;
        case "TUTTO":
            contenitore.textContent = "";
            fetch(VEICOLIMAPPING)
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    //mostraVeicoli(response)
                });

            break;
    }

}






/* -------------------------------------------------------------------------- */
/*                                    fetch                                   */
/* -------------------------------------------------------------------------- */
function fetchAll() {
    fetch(UTENTIMAPPING)
        .then(data => {
            return data.json()
        })
        .then(response => {
            console.log(response)
            // mostraVeicoli(response)
        });
}


function getdisponibili() {
    fetch(GETVEICOLIDISPONIBILITA)
        .then(data => {
            return data.json()
        })
        .then(response => {
            console.log(response)
            // mostraVeicoliNoDisponibile(response)
        });
}

function disponibilita() {
    fetch(GETVEICOLIDISPONIBILITA + "false")
        .then(data => {
            return data.json()
        })
        .then(response => {
            console.log(response)
            //mostraVeicoliNoDisponibile(response)
        });
}






/* -------------------------------------------------------------------------- */
/*                          CODICE GIA' IMPLEMENTATO                          */
/* -------------------------------------------------------------------------- */








// //fetch api get per la lista veicoli

// /* -------------------------------------------------------------------------- */
// /*                         Costruzione veicolo singolo                        */
// /* -------------------------------------------------------------------------- */



// // //raccolta del valore di id dal sumbit form
// // const PARENT = window.opener;

// //   // Get a reference to the form element in the parent window
// //   const form = parent.document.querySelector('#formIdVeicolo');

// //   // Get the value of the input field
// //   const value = form.elements.value.value;

// //   // Use the value
// //   console.log(`You entered: ${value}`);



// // <div></div>
// function creaCardSingola(veicolo){



//     creaTitolo(veicolo);
//     creaScheda(veicolo);


// }
// /* -------------------------------------------------------------------------- */
// /*                          COME PRENDERE DATI DA URL                         */
// /* -------------------------------------------------------------------------- */
// // elenco di macchine
// //paginaVeicolo.html?id=1 si porta dietr

// //const PIPPO= new URLSearchParams(window.location.search)
// //PIPPO.get("id");




// /* -------------------------------------------------------------------------- */
// /*                   FUNZIONE DA FAR PARTIRE A INIZIO PAGINA                  */
// /* -------------------------------------------------------------------------- */


// window.addEventListener("load",initPagina())



// /* -------------------------------------------------------------------------- */
// /*                          Creazione Scheda Veicolo                          */
// /* -------------------------------------------------------------------------- */



// function creaScheda(veicolo){

//     let colore=veicolo.colore;
//     let cilindrata=veicolo.cilindrata;


//     let divor=document.querySelector("#sezioneAuto");

//     let div=document.createElement("div");
//     div.setAttribute("id","schedaVeicolo")
//     div.setAttribute("style","background-color: rgb(18,132,148);")
//     div.setAttribute("class","mt-0")


//     let div2=document.createElement("div");
//     div2.setAttribute("id","fotoVeicolo");
//     div2.setAttribute("class","mb-0");

//     let div3=document.createElement("div");
//     div3.setAttribute("class","m-5");

//     let div4=document.createElement("container");
//     div4.setAttribute("class","container");

//     let h3ul=document.createElement("h3");
//     h3ul.textContent="Descrizione Veicolo";

//     let ul=document.createElement("ul");

//     for (let index = 0; index < 2; index++) {
//         let li=document.createElement("li");
//         ul.appendChild(li)

//         if(index=0){
//             li.textContent=cilindrata;
//         }else{
//             li.textContent=colore;
//         }

//     }

//     let div5=document.createElement("div");
//     div5.setAttribute("id","prezzo");
//     div5.setAttribute("class","mt-5");
//     let h31=document.createElement("h3")
//     h31.innerHTML="Prezzo e tariffe: <strong>15€/g</strong>";


//     let div6=document.createElement("div")
//     div6.setAttribute("id","pulsantiScheda");
//     div6.classList.add("d-flex","justify-content-end","p-3");

//     let div7=document.createElement("div");
//     div7.setAttribute("class","m-1");
//     let a=document.createElement("a")
//     a.setAttribute("href","")
//     a.setAttribute("type","button")
//     a.classList.add("btn","primaryBtn","primaryBtnVerde");
//     a.textContent="Vedi su mappa"

//     let div8=document.createElement("div");
//     div8.setAttribute("class","m-1");
//     let a2=document.createElement("a");
//     a2.setAttribute("href","");
//     a2.setAttribute("type","button");
//     a2.classList("btn","primaryBtn","primaryBtnVerde");
//     a2.textContent="Prenota Ora"

//     divor.appendChild(div);

//     div.appendChild(div2);

//     div.appendChild(div3);
//     div3.appendChild(div4);
//     div4.appendChild(h3ul);
//     div4.appendChild(ul);

//     div3.appendChild(div5);
//     div5.appendChild(h31);

//     div.appendChild(div6)
//     div6.appendChild(div7);
//     div6.appendChild(div8);

// }

// function creaTitolo(veicolo){
//     let modello=veicolo.modello;
//     let alimentazione=veicolo.alimentazione;

//     let div=document.querySelector("#nomeVeicolo");
//     let h1=document.createElement("h1");
//     let h3=document.createElement("h3");
//     let i=document.createElement("i");

//     h1.textContent=modello;
//     i.textContent=alimentazione;

//     h1.setAttribute("style","color: #00b7c2;");
//     h3.setAttribute("id","tipoAuto");
//     h3.setAttribute("style","color: #4ef037;");
//     i.setAttribute("id","iconaElettrica")

//     i.classList.add("bi","bi-lightning-charge");

//     h3.appendChild(i);
//     div.appendChild(h1);
//     div.appendChild(h3);

// }


// //inizio pagina caricamento con una funziona

// //inserire id in qualche modo
// // fetch(GETVEICOLIBYID+idselector)
// //     .then (data=>{
// //         return data.json()
// //     })
// //     .then(response =>{
// //         console.log(response)
// //         creaCardSingola(response);
// //         //inserire funzione per mostrare i veicoli
// //     })




//     function initPagina(){
//         const PIPPO= new URLSearchParams(window.location.search)
//         PIPPO.get("id");
//         fetch(GETVEICOLIBYID+PIPPO.get("id"))
//     .then (data=>{
//         return data.json()
//     })
//     .then(response =>{
//         console.log(response)
//         creaCardSingola(response);
//         //inserire funzione per mostrare i veicoli
//     })
//     }