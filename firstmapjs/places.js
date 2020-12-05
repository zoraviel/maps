let map = L.map('map').setView([39.123828,-95.385388], 3.76);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiem9yYXZpZWwiLCJhIjoiY2tpOXhhbGtwMDF6MDJ4bDYzNHRrdjdpayJ9.q7M6JnA-Ek66UdmWj2ZJaA'
}).addTo(map);

places = [{"Name":"Great Falls, Virginia","Description":"Town located near the Potomatic River.","Latitude":38.9987208,"Longitude":-77.2544255,"AverageHouseholdIncome":"$311,915","Rank":"20."},
{"Name":"University Park, Texas","Description":"Suburb located in Dallas.","Latitude":32.8501269,"Longitude":-96.8002789,"AverageHouseholdIncome":"$313,255","Rank":"19."},
{"Name":"Palm Beach, Florida","Description":"Town located in Southeast Florida on the east coast.","Latitude":26.7056,"Longitude":-80.0364,"AverageHouseholdIncome":"$314,090","Rank":"18."},
{"Name":"The Village of Indian Hill, Ohio","Description":"Suburb located in Cincinnati.","Latitude":39.1806,"Longitude":-84.345,"AverageHouseholdIncome":"$318,319","Rank":"17."},
{"Name":"Old Greenwich, Connecticut","Description":"Town located in Connecticut on the east coast.","Latitude":41.0233,"Longitude":-73.5652,"AverageHouseholdIncome":"$321,377","Rank":"16."},
{"Name":"Larchmont, New York","Description":"Town Located in New York on the east coast.","Latitude":40.9279,"Longitude":-73.7518,"AverageHouseholdIncome":"$324,835","Rank":"15."},
{"Name":"Paradise Valley, Arizona","Description":"Town located on the outside of Pheonix, Arizona. ","Latitude":33.5312,"Longitude":-111.9426,"AverageHouseholdIncome":"$328,353","Rank":"14."},
{"Name":"Bronxville, New York","Description":"Town located North of NYC.","Latitude":40.9382,"Longitude":-73.8321,"AverageHouseholdIncome":"$330,421","Rank":"13."},
{"Name":"Rumson, New Jersey","Description":"Town located near the Navesink River. ","Latitude":40.3721,"Longitude":-73.999,"AverageHouseholdIncome":"$337,696","Rank":"12."},
{"Name":"West University Place, Texas","Description":"Suburb located in Houston.","Latitude":29.718,"Longitude":-95.4338,"AverageHouseholdIncome":"$352,418","Rank":"11."},
{"Name":"Darien, Connecticut","Description":"Town on the Long Island Sound.","Latitude":41.0772,"Longitude":-73.6487,"AverageHouseholdIncome":"$352,839","Rank":"10."},
{"Name":"Winnetka, Illinois","Description":"Suburb located in Chicago on Lake Michigan.","Latitude":42.1081,"Longitude":-87.7359,"AverageHouseholdIncome":"$353,700","Rank":"9."},
{"Name":"Glencoe, Illinois","Description":"Suburb located in Chicago, on Lake Michigan.","Latitude":42.135,"Longitude":-87.7581,"AverageHouseholdIncome":"$358,543","Rank":"8."},
{"Name":"Highland Park, Texas","Description":"Suburb located in Dallas.","Latitude":32.8335,"Longitude":-96.7919,"AverageHouseholdIncome":"$365,025","Rank":"7."},
{"Name":"Short Hills, New Jersey","Description":"Town located in New Jersey, near NYC.","Latitude":40.7483,"Longitude":-74.3232,"AverageHouseholdIncome":"$388,760","Rank":"6."},
{"Name":"Los Altos Hills, California","Description":"Town located in Silicon Valley.","Latitude":37.3797,"Longitude":-122.1375,"AverageHouseholdIncome":"$405,073","Rank":"5."},
{"Name":"Cherry Hills Village, Colorado.","Description":"Suburb located in Denver.","Latitude":39.6417,"Longitude":-104.9594,"AverageHouseholdIncome":"$430,681","Rank":"4."},
{"Name":"Hillsborough, California","Description":"Town near San Francisco.","Latitude":37.5741,"Longitude":-122.3794,"AverageHouseholdIncome":"$430,681","Rank":"3."},
{"Name":"Scarsdale, New York","Description":"Town near NYC.","Latitude":41.0051,"Longitude":-73.7846,"AverageHouseholdIncome":"$452,041","Rank":"2."},
{"Name":"Atherton, California","Description":"Town near Stanford University.","Latitude":37.4613,"Longitude":-122.1977,"AverageHouseholdIncome":"525.324","Rank":"1."}]

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].Latitude, places[i].Longitude ] )
  .bindPopup( '<h3>' + places[i].Rank + ' ' + places[i].Name +'</h3>' +'<p>' + places[i].Description + '<br>' + 'Average Income:' + ' ' + places[i].AverageHouseholdIncome + '</p>')
  .addTo( map );
}
