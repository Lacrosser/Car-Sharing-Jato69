// api url
const api_url = "http://localhost:3000/Veicoli";

var contenitore = document.querySelector('#contenitoreVeicoli');

var contatore = 1;

function mostraVeicoli(listaVeicoli){
    listaVeicoli.forEach(veicolo => {
        var mezzo = veicolo.mezzo;
        var colore = veicolo.colore;
        // var id = veicolo.id;
        
        var mezzoVeicolo = document.createElement('div');
        mezzoVeicolo.setAttribute('class','mezzo');
        var coloreVeicolo = document.createElement('div');
        coloreVeicolo.setAttribute('class','colore');

        mezzoVeicolo.textContent = mezzo;
        coloreVeicolo.textContent = colore;
        
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'veicoloCard col-12 col-md-5 col-lg-3 m-1');

        newDiv.appendChild(mezzoVeicolo);
        newDiv.appendChild(coloreVeicolo);

        contenitore.appendChild(newDiv);

    
    });
}
// '<div class="veicoloCard col-12 col-md-5 col-lg-3 m-1"><div class="mezzo">' + mezzo + '</div><div class="colore">' + colore +'</div></div>'
fetch(api_url)
.then(data => {
    return data.json()
})
.then(response => {
    console.log(response)
    mostraVeicoli(response)
});
// Prova Modifica