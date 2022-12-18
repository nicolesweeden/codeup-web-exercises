var accessToken = MAPBOX_APPID;

mapboxgl.accessToken = accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-104.9903, 39.7392]
});

var sushiDen = {
    address: "1487 Pearl St, Denver, CO 80210",
    popupHTML: "<p>Sushi Den</p>"
};


function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function (coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
}

placeMarkerAndPopup(sushiDen, accessToken, map);


//Refactor your code to display at least three of your favorite restaurants with information about each. Create an array of objects with information about each restaurant to accomplish this. Use a .forEach() loop rather than a for loop.

// let sum = 0;
// const restaurants = [
//
// var sushi = {
//     address: "1487 Pearl St, Denver, CO 80210",
//     popupHTML: "<p>Sushi Den</p>"
// };
//
// var stoicGenuine = {
//     address: "1701 Wynkoop St, Denver, CO 80202",
//     popupHTML: "<p>Stoic & Genuine</p>"
// };
//
// var humboldt = {
//     address: "1700 Humboldt St, Denver, CO 80218",
//     popupHTML: "<p>Humboldt Kitchen + Bar</p>"
// };
//
// ]

let sum = 0;
const restaurants = [
    {
        "name": "Sushi Den",
        "type": "Sushi",
        "address": "1487 Pearl St, Denver, CO 80210",
    },
    {
        "name": "Stoic & Genuine",
        "type": "Seafood",
        "address": "1701 Wynkoop St, Denver, CO 80202",
    },
    {
        "name": "Humboldt Kitchen + Bar",
        "type": "American",
        "address": "1700 Humboldt St, Denver, CO 80218",
    }
]
restaurants.forEach(mapRest)

function mapRest (item) {
    sum += item;
}

console.log(placeMarkerAndPopup(restaurants));

// //Weather Map html
// (function() {
//     "use strict";
//     $(document).ready(function() {
//
//         $.get("http://api.openweathermap.org/data/2.5/forecast", {
//             APPID: API_KEY,
//             q: "Denver, US",
//             units: "imperial"
//         }).done(function(data) {
//             console.log('5 day forecast', data);
//         });
//
//         let lat = 39.7392;
//         let long = -104.9903;
//         $.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + API_KEY + "&units=imperial").done(function(data) {
//             let reports = data.list;
//             let html = "";
//             for(let i = 0; i < reports.length; i += 8) {
//                 // should get 5 objects back
//                 console.log(reports[i]);
//                 html += "<div id='cards' class='col-md-2'>";
//                 html += "<p>Date: " + reports[i].dt_txt + "</p>";
//                 html += "<p>Current temperature of " + reports[i].main.temp + "°F" + "</p>";
//                 html += "<p>High of " + reports[i].main.temp_max + "°F" + "</p>";
//                 html += "<p>Low of " + reports[i].main.temp_min + "°F" + "</p>";
//                 html += "<p>Description: " + reports[i].weather[0].description + "</p>";
//                 html += "</div>";
//             }
//             $("#container").html(html);
//         });
//
//         mapboxgl.accessToken = MAPBOX_APPID;
//         var map = new mapboxgl.Map({
//             container: 'map',
//             style: 'mapbox://styles/mapbox/streets-v9',
//             zoom: 10,
//             center: [-104.9903, 39.7392]
//         });
//
//         var marker = new mapboxgl.Marker({
//             draggable: true,
//             color: "#c71585"
//         })
//             .setLngLat([-104.9893, 39.7372])
//             .addTo(map);
//
// // End of document ready
//     });
// })();