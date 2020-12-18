// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
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
