// api url
const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";

const GETVEICOLOTIPO = "http://localhost:9069/api/veicoli/tipo/"

const GETVEICOLIDISPONIBILITA = "http://localhost:9069/api/veicoli/status/"
const GETVEICOLOALIMENTAZIONE = "http://localhost:9069/api/veicoli/alimentazione/" //inserire la stringa di alimentazione

var contenitore = document.querySelector('.contenitoreDisponibile');
var contenitoreNoDisp = document.querySelector('.contenitoreNoDisponibili');


var btn = document.querySelector('#btn');

//start ad inizio pagina
window.addEventListener("load", charmenderStarter);






function mostraVeicoli(listaVeicoli) {

  // creaMappa(listaVeicoli);


  listaVeicoli.forEach(mezzo => {
    var veicolo = mezzo.veicolo;
    var alimentazione = mezzo.alimentazione;
    var disponibilita = mezzo.disponibilita;
    var id = mezzo.id;
    let modello = mezzo.modello;
    // var id = veicolo.id;
    var modelloVeicolo = document.createElement("div");
    modelloVeicolo.setAttribute("class", "modello");
    modelloVeicolo.classList.add("ps-2");
    modelloVeicolo.textContent = modello;

    var tipoVeicolo = document.createElement('div');
    tipoVeicolo.setAttribute('class', 'tipo');
    tipoVeicolo.classList.add('ps-2');
    tipoVeicolo.textContent = veicolo;


    var mezzoVeicolo = document.createElement('div');
    mezzoVeicolo.setAttribute('class', 'tipo');
    mezzoVeicolo.classList.add("ps-2");
    mezzoVeicolo.textContent = alimentazione;

    var coloreVeicolo = document.createElement('div');
    coloreVeicolo.setAttribute('class', 'desc');
    coloreVeicolo.classList.add("ps-2");

    if (disponibilita == true) {
      var descrizioneDisponibile = document.createElement('div');
      descrizioneDisponibile.setAttribute('class', 'descrizioneDisponibile');
      var disponibilitaSI = document.createElement('div');
      disponibilitaSI.setAttribute('class', 'disponibilitaSI ps-2');
      disponibilitaSI.textContent = "Disponibile";
      descrizioneDisponibile.appendChild(modelloVeicolo);
      descrizioneDisponibile.appendChild(tipoVeicolo);
      descrizioneDisponibile.appendChild(mezzoVeicolo);
      descrizioneDisponibile.appendChild(coloreVeicolo);
      descrizioneDisponibile.appendChild(disponibilitaSI);

      var immagineDisponibile = document.createElement('div');
      immagineDisponibile.setAttribute('class', 'immagineDisponibile');
      immagineDisponibile.setAttribute('style', 'image-orientation:flip;');

      var immagine = document.createElement('img');
      immagine.setAttribute('src', '#');
      immagine.setAttribute('alt', 'null');
      immagine.setAttribute('width', '120px');

      immagineDisponibile.appendChild(immagine);

      var link = "/paginaVeicolo?id=" + id;

      var a = document.createElement('a');
      a.setAttribute('href', link);

      a.appendChild(immagineDisponibile);
      a.appendChild(descrizioneDisponibile);

      var cartaDisponibile = document.createElement('div');
      cartaDisponibile.setAttribute('class', 'cartaDisponibile col-11 col-lg-6 d-flex flex-column');

      cartaDisponibile.appendChild(a);

      contenitore.appendChild(cartaDisponibile);
    }
  });
}

// modelloVeicolo.textContent = modello;

// mezzoVeicolo.textContent = veicolo;
// coloreVeicolo.textContent = alimentazione;
// var aWrap = document.createElement('div');
// var a = document.createElement('a');
// var newDiv = document.createElement('div');
// aWrap.setAttribute('class', 'noLink veicoloCard col-12 col-md-5 col-lg-3 m-1');
// newDiv.setAttribute('class', '');
// var disponibilitaMezzo = document.createElement('div');

// if (disponibilita == true) {
//   disponibilitaMezzo.setAttribute('class', 'disponibile');
//   disponibilitaMezzo.textContent = "Disponibile";
//   var link = "/paginaVeicolo?id=" + id;
//   a.setAttribute('href', link);
//   newDiv.appendChild(modelloVeicolo);
//   newDiv.appendChild(mezzoVeicolo);
//   newDiv.appendChild(coloreVeicolo);
//   newDiv.appendChild(disponibilitaMezzo);
//   a.appendChild(newDiv);
//   aWrap.appendChild(a);
//   contenitore.appendChild(aWrap);

// } else if (disponibilita == false) {
//   disponibilitaMezzo.setAttribute('class', 'noDisponibile');
//   disponibilitaMezzo.textContent = "Non disponibile";





function mostraVeicoliNoDisponibile(listaVeicoli) {
  listaVeicoli.forEach(mezzo => {
    var veicolo = mezzo.veicolo;
    var alimentazione = mezzo.alimentazione;
    var disponibilita = mezzo.disponibilita;

    let modello = mezzo.modello;
    // var id = veicolo.id;
    var modelloVeicolo = document.createElement("div");
    modelloVeicolo.setAttribute("class", "modello");
    modelloVeicolo.classList.add("ps-2");
    modelloVeicolo.textContent = modello;

    var tipoVeicolo = document.createElement('div');
    tipoVeicolo.setAttribute('class', 'tipo');
    tipoVeicolo.classList.add('ps-2');
    tipoVeicolo.textContent = veicolo;


    var mezzoVeicolo = document.createElement('div');
    mezzoVeicolo.setAttribute('class', 'tipo');
    mezzoVeicolo.classList.add("ps-2");
    mezzoVeicolo.textContent = alimentazione;

    var coloreVeicolo = document.createElement('div');
    coloreVeicolo.setAttribute('class', 'desc');
    coloreVeicolo.classList.add("ps-2");

    if (disponibilita == false) {

      var descrizione = document.createElement('div');
      descrizione.setAttribute('class', 'descrizione');
      var disponibilitaSI = document.createElement('div');
      disponibilitaSI.setAttribute('class', 'disponibilitaNO ps-2');
      disponibilitaSI.textContent = "Non Disponibile";
      descrizione.appendChild(modelloVeicolo);
      descrizione.appendChild(mezzoVeicolo);
      descrizione.appendChild(coloreVeicolo);
      descrizione.appendChild(disponibilitaSI);

      var immagineNoDisp = document.createElement('div');
      immagineNoDisp.setAttribute('class', 'immagine');
      immagineNoDisp.setAttribute('style', 'image-orientation:flip;');

      var immagine = document.createElement('img');
      immagine.setAttribute('src', '#');
      immagine.setAttribute('alt', 'null');
      immagine.setAttribute('width', '120px');

      immagineNoDisp.appendChild(immagine);

      var link = "";

      var a = document.createElement('a');
      a.setAttribute('href', link);

      a.appendChild(immagineNoDisp);
      a.appendChild(descrizione);

      var cartaNoDisponibile = document.createElement('div');
      cartaNoDisponibile.setAttribute('class', 'cartaNoDisponibile col-11 col-lg-6 d-flex flex-column');

      cartaNoDisponibile.appendChild(a);

      contenitoreNoDisp.appendChild(cartaNoDisponibile);

    }
  });
}








//check caricamento pagina
//se va inizamo a controllare il tipo, 
//se no facciamo partire la base

function charmenderStarter() {

  const PIPPO = new URLSearchParams(window.location.search)
  let tipologia = PIPPO.get("tipo");
  let alimentazione = PIPPO.get("alimentazione");
  console.log(tipologia);
  console.log(alimentazione);

  if (tipologia != null || alimentazione != null) {

    if (alimentazione == null) {
      stampaTipo(tipologia);
    } else {
      stampAlimentazione(alimentazione);
    };

  } else {
    inizioPagina();
  }

}




function stampaTipo(tipologia) {
  switch (tipologia) {
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

  }

};

function stampAlimentazione(alimentazione) {
  switch (alimentazione) {
    case "ibride":
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
    case "elettrica":
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
  }
};



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



// function creaMappa(veicoli) {
//   var map = L.map('map').setView([41.90249395052403, 12.495037617783234], 10);
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
//   }).addTo(map);

//   veicoli.forEach(element => {
//     let posizione = element.posizione;
//     let numPos = posizione.split(",");

//     let num1 = parseFloat(numPos[0]);
//     let num2 = parseFloat(numPos[1]);

//     L.marker([num1, num2]).addTo(map)
//       .bindPopup('Il posto migliore di sempre')
//       .openPopup();

//   });

// }