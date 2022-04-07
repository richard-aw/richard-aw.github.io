/*Neuseelandreise*/
//einzeiliger Kommentar
let lat = -44.004674;
let lng = 170.477121;
let zoom = 10;

let coords = [-44.004674,170.477121];

let map = L.map('map').setView(coords, zoom);
//console.log(coords);
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length)

//console.log("text");
//console.log("text");
//console.log('id="map"')
//console.log(`latitude ${lat}`);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);

coords = [-44.004674,170.477121];
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([lat, lng]).addTo(map)


  for(let etappe of ETAPPEN) {
       let popup = 
    `<h3> ${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
    <li>geogr. Länge:${etappe.lng}</li>
    <li>geogr. Breite:${etappe.lat}</li>
    <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
    <li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
    </ul>`;
    //console.log(etappe);
    L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
    
   }

   for(let huts of HUTS) {
    L.marker([huts.lat, huts.lng]).addTo(map)
}