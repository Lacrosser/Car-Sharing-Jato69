const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";


window.addEventListener("load", function () {

  stampaMappa();
  const loadingScreen = document.querySelector('#loading-screen');
  loadingScreen.style.display = 'none';

});



function stampaMappa() {
  fetch(VEICOLIMAPPING)
    .then(data => {
      return data.json()
    }).then(response => {
      creaMappa(response);
    });
}

function creaMappa(veicoli) {
  var map = L.map('map').setView([45.07020969624025, 7.626442497677781], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
  }).addTo(map);

  veicoli.forEach(element => {
    let posizione = element.posizione;
    let numPos = posizione.split(",");

    let num1 = parseFloat(numPos[0]);
    let num2 = parseFloat(numPos[1]);

    L.marker([num1, num2]).addTo(map)
      .bindPopup(element.modello)
      .openPopup();

  });

}






/* -------------------------------------------------------------------------- */
/*                             Grafico creazione                            */
/* -------------------------------------------------------------------------- */

const ctx = document.getElementById('myChart');
const image = new Image();
image.src = "";
const plugin = {
  id: 'customCanvasBackgroundImage',
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const {
        top,
        left,
        width,
        height
      } = chart.chartArea;
      const x = left + width / 2 - image.width / 2;
      const y = top + height / 2 - image.height / 2;
      ctx.drawImage(image, x, y);
    } else {
      image.onload = () => chart.draw();
    }
  }
};


fetch(VEICOLIMAPPING)
  .then(data => {
    return data.json();
  }).then(response => {

    const MONO = response.filter(item => item.veicolo === "MONOPATTINI");
    const BICI = response.filter(item => item.veicolo === "BICICLETTA");
    const ELE = response.filter(item => item.alimentazione === "elettrica");
    const IBRIDA = response.filter(item => item.alimentazione === "ibrida");

    let mono = (MONO.length) * 0.95;
    let bici = (BICI.length);
    let ele = (ELE.length) * 0.6;
    let ibrida = (IBRIDA.length) * 0.4;

    const chartData = {
      labels: ['Monopattini', 'Biciclette', 'Auto Elettriche', 'Auto Ibride'],
      datasets: [{
        data: [mono, bici, ele, ibrida], // imposta i valori dei dati sulla base della risposta della richiesta
        backgroundColor: [
          'rgba(0, 183, 194, .2)',
          'rgba(78, 240, 55, .2)',
          'rgba(18, 132, 148, .2)',
          'rgba(43, 185, 23, .2)'
        ],
        borderColor: [
          'rgba(0, 183, 194, 1)',
          'rgba(78, 240, 55, 1)',
          'rgba(18, 132, 148, 1)',
          'rgba(43, 185, 23, 1)'
        ],
        borderWidth: 2,
        // cutout: '90%',
        borderRadius: 4,
        offset: 10,
        hoverOffset: 20
      }]
    };

    // crea la grafica utilizzando i dati della richiesta
    new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: {
        plugins: {
          legend: {
            position: 'left',
            align: 'start',
            labels: {
              // boxWidth: 13,
              usePointStyle: true,
              // pointStyle: ''
            }
          }
        }
      },
      plugins: [plugin],
    });
  });