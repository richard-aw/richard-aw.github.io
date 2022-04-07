/*Neuseelandreise*/
//einzeiliger Kommentar
let lat = -44.004674;
let lgn = 170.477121;
let zoom = 10;

let coords = [-44.004674,170.477121];

let map = L.map('map').setView(coords, zoom);
console.log(coords);
console.log(coords[0]);
console.log(coords[1]);
console.log(coords.length)

console.log("text");
console.log("text");
console.log('id="map"')
console.log(`latitude ${lat}`);

coords = [-44.004674,170.477121];
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let popup = `<h3> Lake Tekapo </h3>
<ul>
<li>geogr. Länge:${lgn}</li>
<li>geogr. Breite:${lat}</li>
</ul>`;

L.marker([lat, long]).addTo(map)
    .bindPopup(popup)
    .openPopup();

   