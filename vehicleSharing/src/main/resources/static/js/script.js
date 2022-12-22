// api url
const api_url = "http://localhost:9069/api/veicoli";
const api_url_false = "http://localhost:9069/api/veicoli/status/false";
const api_auto = "http://localhost:9069/api/veicoli/tipo/AUTO"
const api_monopattini = "http://localhost:9069/api/veicoli/tipo/MONOPATTINO"
const api_bici = "http://localhost:9069/api/veicoli/tipo/BICICLETTA"

var contenitore = document.querySelector('#contenitoreVeicoli');
var contenitoreNoDisp = document.querySelector('#contenitoreVeicoliNoDisponibili');


var btn = document.querySelector('#btn');

function mostraVeicoli(listaVeicoli){
    listaVeicoli.forEach(mezzo => {
        var veicolo = mezzo.veicolo;
        var alimentazione = mezzo.alimentazione;
        var disponibilita = mezzo.disponibilita;
        var id = mezzo.id;
        // var id = veicolo.id;
        
        var mezzoVeicolo = document.createElement('div');
        mezzoVeicolo.setAttribute('class','veicolo');
        var coloreVeicolo = document.createElement('div');
        coloreVeicolo.setAttribute('class','alimentazione');
        
        

        mezzoVeicolo.textContent = veicolo;
        coloreVeicolo.textContent = alimentazione;
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

        

    
    });
}
function mostraVeicoliNoDisponibile(listaVeicoli){
    listaVeicoli.forEach(mezzo => {
        var veicolo = mezzo.veicolo;
        var alimentazione = mezzo.alimentazione;
        var disponibilita = mezzo.disponibilita;
        // var id = veicolo.id;
        
        var mezzoVeicolo = document.createElement('div');
        mezzoVeicolo.setAttribute('class','veicolo');
        var coloreVeicolo = document.createElement('div');
        coloreVeicolo.setAttribute('class','alimentazione');
        
        

        mezzoVeicolo.textContent = veicolo;
        coloreVeicolo.textContent = alimentazione;
        
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'veicoloCardNoDisp col-12 col-md-5 col-lg-3 m-1 whiteText');
        var disponibilitaMezzo = document.createElement('div');
        disponibilitaMezzo.setAttribute('class','noDisponibile');
        disponibilitaMezzo.textContent = "Non disponibile";
        
        newDiv.appendChild(mezzoVeicolo);
        newDiv.appendChild(coloreVeicolo);
        newDiv.appendChild(disponibilitaMezzo);

        contenitoreNoDisp.appendChild(newDiv);
    
    });
}

function caricaDati(){

    var form = document.querySelector('#selectTipo').value;

    switch (form) {
      case "AUTO":
        contenitore.textContent = "";
        fetch(api_auto)
        .then(data => {
          return data.json()
        })
        .then(response => {
          console.log(response)
          mostraVeicoli(response)
        });
        break;
      case "TUTTO":
        contenitore.textContent = "";
      fetch(api_url)
      .then(data => {
      return data.json()
      })
.     then(response => {
      console.log(response)
      mostraVeicoli(response)
      });
      break;
      case "MONOPATTINI":
      contenitore.textContent = "";
      fetch(api_monopattini)
      .then(data => {
      return data.json()
      })
.     then(response => {
      console.log(response)
      mostraVeicoli(response)
      });
      break;
      case "BICICLETTE":
      contenitore.textContent = "";
      fetch(api_bici)
      .then(data => {
      return data.json()
      })
.     then(response => {
      console.log(response)
      mostraVeicoli(response)
      });
      break;
          
      default:
        break;
    }

}

btn.addEventListener('click', caricaDati);



// '<div class="veicoloCard col-12 col-md-5 col-lg-3 m-1"><div class="mezzo">' + mezzo + '</div><div class="colore">' + colore +'</div></div>'
fetch(api_url)
.then(data => {
    return data.json()
})
.then(response => {
    console.log(response)
    mostraVeicoli(response)
});
fetch(api_url_false)
.then(data => {
    return data.json()
})
.then(response => {
    console.log(response)
    mostraVeicoliNoDisponibile(response)
});
// Prova Modifica

/* -------------------------------------------------------------------------- */
/*                                   SWIPER                                   */
/* -------------------------------------------------------------------------- */

var swiper = new Swiper(".heroSwipe", {
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});