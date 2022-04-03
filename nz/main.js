/* Neuseelandreise Script */
// zwei Schrägstriche für einzeiligen Kommentar

var map = L.map('map').setView([-45.031389, 168.660833], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-45.031389, 168.660833]).addTo(map)
    .bindPopup('<h3> Queenstown </h3>')
    .openPopup();