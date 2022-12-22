const UTENTIMAPPING="http://localhost:9069/api/utenti";
const VEICOLIMAPPING="http://localhost:9069/api/veicoli";
const GETVEICOLIBYID="http://localhost:9069/api/veicoli/";//inserire id qui per completare la query
const GETVEICOLIDISPONIBILITA="http://localhost:9069/api/veicoli/status/";//inserire la disponibiltà per completare la query true/false
const GETVEICOLOTIPO="http://localhost:9069/api/veicoli/tipo/";//inserire il tipo tra /AUTO/BICICLETTA/MONOPATTINO
const GETVEICOLOALIMENTAZIONE="http://localhost:9069/api/veicoli/alimentazione/";//inserire la stringa di alimentazione
const PUTVEICOLO="http://localhost:9069/api/veicoli/";//inserire id per completare la query


fetch ("http://localhost:9069/api/utenti")
  .then(data => {
        return data.json();
  })
  .then(response => {
    console.log(response);
  });

































// function aggiungUtente() {

//     fetch(UTENTIMAPPING, {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(nuovoUtente)
//         })
//         .then(data => {
//             data.json()
//         })
//         .then(response =>{

//             // console.log("Ok, registrazione avvenuta");
//         }
//         )

//         return false;
// }