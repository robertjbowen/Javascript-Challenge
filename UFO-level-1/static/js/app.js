// from data.js
var tableData = data;

// place holder to control date until html input and button figured out
//var datetime = "1/10/2010"
//var filterDate = datetime
//var filterDate = document.getElementById('datetime').value;
//console.log(filterDate);
// YOUR CODE HERE!
var UFOdate = []

// Filter the UFO data from data.js by date 
function UFOsighting (encounter) {
	var filterDate = document.getElementById('datetime').value;
	//console.log(filterDate);

	if (encounter.datetime === filterDate) {
		console.log(encounter);
		sighted = true;
		UFOdate.push(encounter);
		//console.log(UFOdate)
	}
	else {
		sighted = false;
	}
	return sighted;
	//var UFOdate = UFOsightings;
	//console.log(UFOdate);
}

//var UFOdate = tableData.filter(UFOsighting);
//console.log(UFOdate);
