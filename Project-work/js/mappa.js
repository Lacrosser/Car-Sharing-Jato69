var map = L.map('map').setView([45.09078249026778, 7.694148712114118], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
}).addTo(map);

L.marker([45.09078249026778, 7.694148712114118]).addTo(map)
    .bindPopup('Il posto migliore di sempre')
    .openPopup();