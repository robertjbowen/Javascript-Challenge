// from data.js
var tableData = data;

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

// Function called by button click to filter tableData by user input date
function filterTable (encounter) {

  var filterDate = document.getElementById('datetime').value;                            // reads the data value input by the user in the field in the filters list group
  tbody.text('');                                                                        // clears the contents of the tbody variable
  console.log(filterDate);                                                               // displays the data value in the console 
  var filteredData = tableData.filter(encounter => encounter.datetime === filterDate);   // iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria
  console.log(filteredData);                                                             // displays the filtered array in the console
  buildTable(filteredData);
}
