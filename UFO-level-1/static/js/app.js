// from data.js
var tableData = data;

// place holder to control date until html input and button figured out
var datetime = "1/14/2010"
var filterDate = datetime

// YOUR CODE HERE!


// Filter the UFO data from data.js by date 
function UFOsighting (encounter) {

	if (encounter.datetime === filterDate) {
		sighted = true;
	}
	else {
		sighted = false;
	}
	return sighted;
}

var UFOdate = tableData.filter(UFOsighting);
console.log(UFOdate);
