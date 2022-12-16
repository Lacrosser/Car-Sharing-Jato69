// api url
const api_url = "http://localhost:3000/Veicoli";

var mezzoProva = document.querySelector('#mezzo1');

var contatore = 1;

function mostraVeicoli(listaVeicoli){
    listaVeicoli.forEach(veicolo => {
        var mezzo = veicolo.mezzo;
        var colore = veicolo.colore;
        // var id = veicolo.id;
        
        mezzoProva.innerHTML += "<li>Veicolo " + contatore + ": "+ mezzo + " " + colore + '</li>';
        contatore++;
    });
}

fetch(api_url)
.then(data => {
    return data.json()
})
.then(response => {
    console.log(typeof response)
    mostraVeicoli(response)
});
