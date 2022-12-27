var map = L.map('map').setView([45.06288739513925, 7.674272664923481], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
}).addTo(map);

L.marker([45.06288739513925, 7.674272664923481]).addTo(map)
    .bindPopup('Il posto migliore di sempre')
    .openPopup();