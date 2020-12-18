// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

tableData.forEach((encounter) => {
  var row = tbody.append("tr");
  Object.entries(encounter).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Create event handlers 
button.on("click", filterTable);

function filterTable (encounter) {

	var filterDate = document.getElementById('datetime').value;
	tbody.text('');
	console.log(filterDate);
	var filteredData = tableData.filter(encounter => encounter.datetime === filterDate);
	console.log(filteredData);
	filteredData.forEach((encounter) => {
 		var row = tbody.append("tr");
  		Object.entries(encounter).forEach(([key, value]) => {
    		var cell = row.append("td");
    		cell.text(value);
  		});
	});
 }
/*
var UFOdate = []

// Filter the UFO data from data.js by date 
function UFOsighting (encounter) {
	var filterDate = document.getElementById('datetime').value;
	//console.log(filterDate);

	if (encounter.datetime === filterDate) {
		console.log(encounter);
		sighted = true;
		UFOdate.push(encounter);
	}
	else {
		sighted = false;
	}
	for (var i = 0; i < UFOdate.length; i++) {
		console.log(UFOdate[i]);
	}
	return sighted;
	//var UFOdate = UFOsightings;
	//console.log(UFOdate);
}

//var UFOdate = tableData.filter(UFOsighting);
//console.log(UFOdate);
data.forEach((encounter) => {
  var row = tbody.append("tr");
  Object.entries(encounter).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
*/