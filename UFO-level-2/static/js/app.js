// from data.js
var tableData = data;
var filters = ['datetime','city','state','country','shape']

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

buildTable(tableData);                                        // calls the function to build the new output table 

// Create event handlers 
button.on("click", filterTable);                              // calls the filterTable function when a button click event occurs

// Function called by button click to filter tableData by user input values
function filterTable (encounter) {

  tbody.text('');                                             // clears the contents of the tbody variable
  var filteredArray = tableData;

  filters.forEach((filter) => {                               // loop to check each filter type and filter the array
    console.log(filter)

    var inputValue = document.getElementById(filter).value;   // reads the data value input by the user in the field in the filters list group
    console.log('The user input value is: ', inputValue);

    if (inputValue === '') {                                  // checks to see if a value was entered for the current filter
      console.log('No input for: ', filter);                  // if no input sends a message to the console
      console.log(filteredArray)                              // displays the current array to the console
    }
    else  {
      var filteredOutput = filteredArray.filter(encounter => encounter[filter] === inputValue);   // iterates through each object in the filtered array and returns only the objects with the same filter value as the search criteria
      filteredArray = filteredOutput                                                              // replaces the old array with the newly filtered output
      console.log(filteredArray);                                                                 // displays the filtered array in the console
    }
  })
  
  buildTable(filteredArray);                                 // calls the function to build the new output table                                     
}
/*
console.log('Input Text: ', inputText);

var ages = filteredData.map(person => person.age);

 var list = d3.select(".summary");

  // remove any children from the list to
  list.html("");

  // append stats to the list
  list.append("li").text(`Mean: ${mean}`);
  list.append("li").text(`Median: ${median}`);
  list.append("li").text(`Mode: ${mode}`);
  list.append("li").text(`Variance: ${variance}`);
  list.append("li").text(`Standard Deviation: ${standardDeviation}`);
};
*/