/*Neuseelandreise*/
//einzeiliger Kommentar
var map = L.map('map').setView([-44.004674, 170.477121], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-44.004674, 170.477121]).addTo(map)
    .bindPopup('<h3> Lake Tekapo </h3>')
    .openPopup();