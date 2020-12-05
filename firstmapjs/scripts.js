let firstmap = L.map('firstmap').setView([40.636241,-73.960749], 10.55);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiem9yYXZpZWwiLCJhIjoiY2tpOXhhbGtwMDF6MDJ4bDYzNHRrdjdpayJ9.q7M6JnA-Ek66UdmWj2ZJaA'
}).addTo(firstmap);
let marker1 = L.marker([40.6602,-73.9690]).addTo(firstmap);
let marker2 = L.marker([40.6991,-73.9976]).addTo(firstmap);
let marker3 = L.marker([40.598047,-73.920836]).addTo(firstmap);
let marker4 = L.marker([40.6914,-73.9752]).addTo(firstmap);
marker1.bindPopup("Prospect Park");
marker2.bindPopup("Brooklyn Bridge Park");
marker3.bindPopup("Marine Park");
marker4.bindPopup("Fort Greene Park");
