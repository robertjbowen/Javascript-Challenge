// from data.js
var tableData = data;
/*
var filterDate = document.getElementById('datetime').value;                             // reads the data value input by the user in the field in the filters list group
var filterCity = document.getElementById('city').value;                                 // reads the data value input by the user in the field in the filters list group
var filterState = document.getElementById('state').value;                               // reads the data value input by the user in the field in the filters list group
var filterCountry = document.getElementById('country').value;                           // reads the data value input by the user in the field in the filters list group
var filterShape = document.getElementById('shape').value;                               // reads the data value input by the user in the field in the filters list group
console.log(filterDate + ' ' + filterCity + ' ' + filterState + ' ' + filterCountry + ' ' + filterShape);     // displays the data value in the console 
*/
// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Get a refernce to the button to call the filterTable function
var button = d3.select("#filter-btn");

// Create and Display the complete Data Table
function buildTable(dataArray) {

  dataArray.forEach((encounter) => {                          // iterates through each object in the tableData array
    var row = tbody.append("tr");                             // creates a row variable, adds a table row tag to the begining and appends it to the table body in index.html
    Object.entries(encounter).forEach(([key, value]) => {     // for each value in the tableData row gathers the key and value information
      var cell = row.append("td");                            // creates a cell variable, adds a table data tag and appends it to the row
      cell.text(value);                                       // adds the text value from the object in tableData to the body of the cell variable
    });
  });
}

buildTable(tableData);

// Create event handlers 
button.on("click", filterTable);                            // calls the filterTable function when a button click event occurs

//filters = {'datetime': encounter.datetime,'city': encounter.city,'state': encounter.state,'country': encounter.country,'shape': encounter.shape};
// Function called by button click to filter tableData by user input date
function filterTable (encounter) {

  tbody.text('');                                                                          // clears the contents of the tbody variable
  // var tableArray = tableData;                                                                            
  // forEach filter in filters
  // console.log(filter)
  var filterDate = document.getElementById('datetime').value;                             // reads the data value input by the user in the field in the filters list group
  var filterCity = document.getElementById('city').value;                                 // reads the data value input by the user in the field in the filters list group
  var filterState = document.getElementById('state').value;                               // reads the data value input by the user in the field in the filters list group
  var filterCountry = document.getElementById('country').value;                           // reads the data value input by the user in the field in the filters list group
  var filterShape = document.getElementById('shape').value;                               // reads the data value input by the user in the field in the filters list group
  console.log(filterDate + ' ' + filterCity + ' ' + filterState + ' ' + filterCountry + ' ' + filterShape);     // displays the data value in the console 

  if (filterDate === '') {
    var filteredDate = tableData;
    console.log('No Date Input');
    console.log(filteredDate)
  }
  else  {
    var filteredDate = tableData.filter(encounter => encounter.datetime === filterDate);   // iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria
    console.log(filteredDate);                                                             // displays the filtered array in the console
  }
  
  if (filterCity === '') {
    var filteredCity = filteredDate;
    console.log('No City Input');
    console.log(filteredCity)
  }
  else  {
    var filteredCity = filteredDate.filter(encounter => encounter.city === filterCity);   // iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria
    console.log(filteredCity);                                                             // displays the filtered array in the console
  }

  if (filterState === '') {
    var filteredState = filteredCity;
    console.log('No State Input');
  }
  else  {
    var filteredState = filteredCity.filter(encounter => encounter.state === filterState);   // iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria
    console.log(filteredState);                                                             // displays the filtered array in the console
  }

  if (filterCountry === '') {
    var filteredCountry = filteredState;
    console.log('No Country Input');
  }
  else  {
    var filteredCountry = filteredState.filter(encounter => encounter.country === filterCountry);   // iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria
    console.log(filteredCity);                                                             // displays the filtered array in the console
  }

  if (filterShape === '') {
    var filteredShape = filteredCountry;
    console.log('No Shape Input');
  }
  else  {
    var filteredShape = filteredCountry.filter(encounter => encounter.shape === filterShape);   // iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria
    console.log(filteredShape);                                                             // displays the filtered array in the console
  }

  buildTable(filteredShape);
}
