/*Neuseelandreise*/
//einzeiliger Kommentar
let lat = -44.004674;
let lgn = 170.477121;
let zoom = 10;
let map = L.map('map').setView([lat, lgn], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, long]).addTo(map)
    .bindPopup('<h3> Lake Tekapo </h3>')
    .openPopup();