// initialize a map
let map = L.map('map').setView([49.1836, -123.1164], 13);

// load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);
