// api url
const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";

const GETVEICOLOTIPO = "http://localhost:9069/api/veicoli/tipo/"

const GETVEICOLIDISPONIBILITA = "http://localhost:9069/api/veicoli/status/"
const GETVEICOLOALIMENTAZIONE = "http://localhost:9069/api/veicoli/alimentazione/" //inserire la stringa di alimentazione

var contenitore = document.querySelector('#contenitoreVeicoli');
var contenitoreNoDisp = document.querySelector('#contenitoreVeicoliNoDisponibili');


var btn = document.querySelector('#btn');

//start ad inizio pagina
window.addEventListener("load", inizioPagina);



function mostraVeicoli(listaVeicoli) {
  listaVeicoli.forEach(mezzo => {
    var veicolo = mezzo.veicolo;
    var alimentazione = mezzo.alimentazione;
    var disponibilita = mezzo.disponibilita;
    var id = mezzo.id;
    let modello = mezzo.modello;
    // var id = veicolo.id;
    var modelloVeicolo = document.createElement("div");
    modelloVeicolo.setAttribute("class", "text-white");


    var mezzoVeicolo = document.createElement('div');
    mezzoVeicolo.setAttribute('class', 'veicolo');

    var coloreVeicolo = document.createElement('div');
    coloreVeicolo.setAttribute('class', 'alimentazione');


    modelloVeicolo.textContent = modello;

    mezzoVeicolo.textContent = veicolo;
    coloreVeicolo.textContent = alimentazione;
    var aWrap = document.createElement('div');
    var a = document.createElement('a');
    var newDiv = document.createElement('div');
    aWrap.setAttribute('class', 'noLink veicoloCard col-12 col-md-5 col-lg-3 m-1');
    newDiv.setAttribute('class', '');
    var disponibilitaMezzo = document.createElement('div');

    if (disponibilita == true) {
      disponibilitaMezzo.setAttribute('class', 'disponibile');
      disponibilitaMezzo.textContent = "Disponibile";
      var link = "/paginaVeicolo?id=" + id;
      a.setAttribute('href', link);
      newDiv.appendChild(modelloVeicolo);
      newDiv.appendChild(mezzoVeicolo);
      newDiv.appendChild(coloreVeicolo);
      newDiv.appendChild(disponibilitaMezzo);
      a.appendChild(newDiv);
      aWrap.appendChild(a);
      contenitore.appendChild(aWrap);

      // } else if (disponibilita == false) {
      //   disponibilitaMezzo.setAttribute('class', 'noDisponibile');
      //   disponibilitaMezzo.textContent = "Non disponibile";
    }

  });
}




function mostraVeicoliNoDisponibile(listaVeicoli) {
  listaVeicoli.forEach(mezzo => {
    var veicolo = mezzo.veicolo;
    var alimentazione = mezzo.alimentazione;
    var disponibilita = mezzo.disponibilita;
    var modello = mezzo.modello;
    // var id = veicolo.id;

    var modelloVeicolo = document.createElement("div");
    modelloVeicolo.setAttribute("class", "text-black"); //cambiare colore testo


    var mezzoVeicolo = document.createElement('div');
    mezzoVeicolo.setAttribute('class', 'veicolo');
    var coloreVeicolo = document.createElement('div');
    coloreVeicolo.setAttribute('class', 'alimentazione');


    modelloVeicolo.textContent = modello;

    mezzoVeicolo.textContent = veicolo;
    coloreVeicolo.textContent = alimentazione;

    if (disponibilita == false) {
      var newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'veicoloCardNoDisp col-12 col-md-5 col-lg-3 m-1 whiteText');
      var disponibilitaMezzo = document.createElement('div');
      disponibilitaMezzo.setAttribute('class', 'noDisponibile');
      disponibilitaMezzo.textContent = "Non disponibile";

      newDiv.appendChild(modelloVeicolo);
      newDiv.appendChild(mezzoVeicolo);
      newDiv.appendChild(coloreVeicolo);
      newDiv.appendChild(disponibilitaMezzo);

      contenitoreNoDisp.appendChild(newDiv);
    }
  });
}

function caricaDati() {

  var form = document.querySelector('#selectTipo').value;

  switch (form) {
    case "TUTTO":
      contenitore.textContent = "";
      contenitoreNoDisp.textContent = "";
      fetch(VEICOLIMAPPING)
        .then(data => {
          return data.json()
        })
        .then(response => {

          mostraVeicoli(response)
          mostraVeicoliNoDisponibile(response)
        });
      break;
    case "AUTO":
      contenitore.textContent = "";
      contenitoreNoDisp.textContent = "";
      fetch(GETVEICOLOTIPO + "AUTO")
        .then(data => {
          return data.json()
        })
        .then(response => {

          mostraVeicoli(response)
          mostraVeicoliNoDisponibile(response)
        });
      break;
    case "IBRIDE":
      contenitore.textContent = "";
      contenitoreNoDisp.textContent = "";
      fetch(GETVEICOLOALIMENTAZIONE + "ibrida")
        .then(data => {
          return data.json()
        })
        .then(response => {


          let variabiliAuto = response.filter(veicolo => veicolo.veicolo === "AUTO");

          mostraVeicoli(variabiliAuto)
          mostraVeicoliNoDisponibile(variabiliAuto)

        });
      break;
    case "ELETTRICHE":
      contenitore.textContent = "";
      contenitoreNoDisp.textContent = "";
      fetch(GETVEICOLOALIMENTAZIONE + "elettrica")
        .then(data => {
          return data.json()
        })
        .then(response => {

          let variabiliAuto = response.filter(veicolo => veicolo.veicolo === "AUTO");


          mostraVeicoli(variabiliAuto)
          mostraVeicoliNoDisponibile(variabiliAuto)


        });
      break;
    case "MONOPATTINI":
      contenitore.textContent = "";
      contenitoreNoDisp.textContent = "";
      fetch(GETVEICOLOTIPO + "MONOPATTINO")
        .then(data => {
          return data.json()
        })
        .then(response => {

          mostraVeicoli(response)
          mostraVeicoliNoDisponibile(response)
        });
      break;
    case "BICICLETTE":
      contenitore.textContent = "";
      contenitoreNoDisp.textContent = "";
      fetch(GETVEICOLOTIPO + "BICICLETTA")
        .then(data => {
          return data.json()
        })
        .then(response => {

          mostraVeicoli(response)
          mostraVeicoliNoDisponibile(response)
        });
      break;

    default:
      break;
  }

}

btn.addEventListener('click', caricaDati);



// '<div class="veicoloCard col-12 col-md-5 col-lg-3 m-1"><div class="mezzo">' + mezzo + '</div><div class="colore">' + colore +'</div></div>'

function inizioPagina() {
  startMostraDisponibili();
  startMostraNonDisponibili();
}


function startMostraDisponibili() {
  fetch(GETVEICOLIDISPONIBILITA + "true")
    .then(data => {
      return data.json()
    })
    .then(response => {
      //console.log(response)
      mostraVeicoli(response)
    });
}

function startMostraNonDisponibili() {
  fetch(GETVEICOLIDISPONIBILITA + "false")
    .then(data => {
      return data.json()
    })
    .then(response => {
      //console.log(response)
      mostraVeicoliNoDisponibile(response)
    });
}
// Prova Modifica

