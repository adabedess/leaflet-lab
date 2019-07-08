/*Code below from Leaflet Quick Start Guide */

var mymap = L.map('mapid').setView([51.505, -0.09], 13);


//add tile layer ...replace project id and access Token with new one from mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicG9sdWdhdG8iLCJhIjoiY2p4dGtvY2tlMHZibTNkcDhkMHJ6aHBkeSJ9.QSwJvQjvHBFCs55qyAd_4A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicG9sdWdhdG8iLCJhIjoiY2p4dGtvY2tlMHZibTNkcDhkMHJ6aHBkeSJ9.QSwJvQjvHBFCs55qyAd_4A'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


//From the geojson tutorial
L.geoJSON(geojsonFeature).addTo(map);

var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsonFeature);

var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(someGeojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);

var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": false
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.98404, 39.74621]
    }
}];

L.geoJSON(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(map);





//from premod from here on down
//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

//call the initialize function when the window has loaded
window.onload = initialize();

//Example 2.3 line 6...function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //...

    //Example 2.3 line 41...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city; //NOTE DIFFERENT SYNTAX
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population; //NOTE DIFFERENT SYNTAX
        tr.appendChild(pop);

        table.appendChild(tr);
    };
    
    //Example 2.3 line 8...create an empty array
    var cityPop = [];

    //create the first city object
    var madison = {};
    //add each property to the object
    madison.city = 'Madison';
    madison.population = 233209;

    //push the city object into the array
    cityPop.push(madison);

    //repeat...
    var milwaukee = {};
    milwaukee.city = 'Milwaukee';
    milwaukee.population = 594833;
    cityPop.push(milwaukee);

    var greenBay = {};
    greenBay.city = 'Green Bay';
    greenBay.population = 104057;
    cityPop.push(greenBay);

    var superior = {};
    superior.city = 'Superior';
    superior.population = 27244;
    cityPop.push(superior);
    
    //WHILE LOOP...Example 2.4 line 25
    //define a counter variable
    var i = 0;
    //start the loop
    while (i < cityPop.length){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        table.appendChild(tr);

        //increment counter
        i++;
    };

    //FOREACH LOOP...Example 2.4 line 25
    cityPop.forEach(function(cityObject){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityObject.city; //NOTE DIFFERENT SYNTAX
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityObject.population; //NOTE DIFFERENT SYNTAX
        tr.appendChild(pop);

        table.appendChild(tr);
    });

    //FOREACH LOOP WITH OBJECT FOR LOOP...Example 2.4 line 25
    cityPop.forEach(function(cityObject){
        var tr = document.createElement("tr");

        for (var property in cityObject){
            var td = document.createElement("td");
            td.innerHTML = cityObject[property];
            tr.appendChild(td);
        };

        table.appendChild(tr);
    });
    
    //Example 2.4 line 25...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
    var tr = document.createElement("tr");

    var city = document.createElement("td");

        if (cityPop[i].city == 'Madison'){
            city.innerHTML = 'State Capital';
        } else if (cityPop[i].city == 'Green Bay'){
            city.innerHTML = 'Packerville';
        } else {
            city.innerHTML = cityPop[i].city;
        }

        tr.appendChild(city);

        var pop = document.createElement("td");

        if (cityPop[i].population < 500000){
            pop.innerHTML = cityPop[i].population;
        } else {
            pop.innerHTML = 'Too big!';
        };

        tr.appendChild(pop);

        table.appendChild(tr);
    };
    
    //Example 2.7 line 19
pop.innerHTML = cityPop[i].population < 500000 ? cityPop[i].population : 'Too big!';
    
jQuery('#mydiv').html('Hello World');
    
$('#mydiv').html('Hello World');
    
 //initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};

//call the initialize function when the document has loaded
$(document).ready(initialize);  
    
//Added at Example 3.5 line 44...
    //get the div id
    var theid = $('#mydiv').attr('id');

    //theid is 'mydiv'; add it as text to the div
    $('#mydiv').append(theid);

    //add the class 'foo' to the div
    $('#mydiv').attr('class', 'foo');

    //Check your work with the Inspector!
    
    //Added below Example 3.6...
    //change the text color
    $('#mydiv').css('color', 'red');

    //change the text size and alignment
    $('#mydiv').css({
        'font-size': '2em',
        'text-align': 'left'
    });

    //get the text color and add it as text to the div
    var thecolor = $('#mydiv').css('color');
    $('#mydiv').append(thecolor);

    //fooled ya! thecolor is rgb(255, 0, 0), the CSS interpreter's translation of the keyword 'red'
    
    //Added below Example 3.7...
    //iterate over each script element and add each one's source url as text to the div
    $('script').each(function(){
        var thesource = $(this).attr('src');
        $('#mydiv').append(thesource);
    });
    
    //Added below Example 3.8...
    //click listener with anonymous handler function
    $('table').on('click', function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //alias method for the click event listener
    $('table').click(function(){
        alert('Visit Superior and see the big lake!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    $('table').on('click', clickme);

    //remove the event listener
    $('table').off('click', clickme);
    
function jsAjax(){
    // Step 1: Create the request 
    var ajaxRequest = new XMLHttpRequest();

    //Step 2: Create an event handler to send received data to a callback function
    ajaxRequest.onreadystatechange = function(){
        if (ajaxRequest.readyState === 4){
            callback(ajaxRequest.response);
        };
    };

    //Step 3: Open the server connection
    ajaxRequest.open('GET', 'data/MegaCities.geojson', true);

    //Step 4: Set the response data type
    ajaxRequest.responseType = "json";

    //Step 5: Send the request
    ajaxRequest.send();
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response);
};

window.onload = jsAjax();
    
$.ajax("data/MegaCities.geojson", {
    dataType: "json",
    success: callback
});
    
//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: callback
    });
};

//define callback function
function callback(response, status, jqXHRobject){
    //tasks using the data go here
    console.log(response);
};

$(document).ready(jQueryAjax);
    
//jQuery.get() method...Example 2.5 line 3
$.get("data/MegaCities.geojson", callback, "json");

//jQuery.getJSON() method...Example 2.5 line 3
$.getJSON("data/MegaCities.geojson", callback);
    
//a simple counting function
function countToThree(){
    var count = 0;
    while (count < 3){
        count++;
    };
    return count;
};

var mydata = countToThree();

console.log(mydata); //mydata is 3
    
//an AJAX function
function jQueryAjax(){
    var mydata = $.ajax("data/MegaCities.geojson", {
        dataType: "json"
    });
    return mydata;
};

var mydata = jQueryAjax();

console.log(mydata); //the jQuery XMLHttpRequest object  
    
//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: callback
    });
};

//define callback function
function callback(response, status, jqXHRobject){

    //TASKS USING THE DATA GO HERE
    console.log(response);

};

$(document).ready(jQueryAjax);
    
//Example 3.4 line 10...define callback function
function callback(response){
    
//Example 3.4 line 10...define callback function
function callback(response){

    var mydata = response;

    //pass data to another function
    nextFunction(mydata);
};

function nextFunction(data){

    console.log(data); //contains response data held by mydata in callback
};  
    
function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;
        }
    });

    //check the data
    console.log(mydata);
};

$(document).ready(jQueryAjax);  
    
function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data
            console.log(mydata);
        }
    });

    //check the data
    console.log(mydata);
};  
    
    function debugCallback(response){
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){
	
	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			
			debugCallback(mydata);
		}
	});

	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));