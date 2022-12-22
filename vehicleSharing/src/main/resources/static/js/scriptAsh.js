
/* -------------------------------------------------------------------------- */
/*                            COSTANTI PER LE FETCH                           */
/* -------------------------------------------------------------------------- */

const UTENTIMAPPING="http://localhost:9069/api/utenti";
const GETUTENTEBYID="http://localhost:9069/api/utenti/";//inserire id qui per completare la query
const DELETEUTENTEBYID="http://localhost:9069/api/utenti/";//inserire id qui per completare la query
const LOGIN="http://localhost:9069/api/utenti/login";



const VEICOLIMAPPING="http://localhost:9069/api/veicoli";
const GETVEICOLIBYID="http://localhost:9069/api/veicoli/";//inserire id qui per completare la query
const GETVEICOLIDISPONIBILITA="http://localhost:9069/api/veicoli/status/"//inserire la disponibiltà per completare la query true/false
const GETVEICOLOTIPO="http://localhost:9069/api/veicoli/tipo/"//inserire il tipo tra /AUTO/BICICLETTA/MONOPATTINO
const GETVEICOLOALIMENTAZIONE="http://localhost:9069/api/veicoli/alimentazione/"//inserire la stringa di alimentazione
const PUTVEICOLO="http://localhost:9069/api/veicoli/"//inserire id per completare la query
const DELETEVEICOLO="http://localhost:9069/api/veicoli/"//inserire id per completare la query



const GETPRENOTAZIONI="http://localhost:9069/api/prenotazione";
const GETPRENOTAZIONIBYID="http://localhost:9069/api/prenotazione/";//inserire l'id per completare la query

const GETVEICOLOPRENOTAZIONE="http://localhost:9069/api/prenotazione/utenti/"//inserire l'id per completare la query
const GETUTENTEPRENOTAZIONE="http://localhost:9069/api/prenotazione/veicoli/"

const POSTPRENOTAZIONE="http://localhost:9069/api/prenotazione/utente"//inserire id+/veicolo/+inserire id veicolo

const PUTPRENOTAZIONE="http://localhost:9069/api/prenotazione/";//inserire l'id per completare la query
const DELETEPRENOTAZIONE="http://localhost:9069/api/prenotazione/"//inserire id per completare la query


//fetch api get per la lista veicoli



fetch()