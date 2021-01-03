// from data.js
var tableData = data;
var filters = ['datetime','city','state','country','shape']
var initFilter = [['datetime', ""],['city', ""],['state', ""],['country', ""],['shape', ""]]
// YOUR CODE HERE!
var tbody = d3.select("tbody");                               // Get a reference to the table body
var filterBody = document.getElementById('filters');          // Get a reference to the filter list body
var button = d3.select("#filter-btn");                        // Get a refernce to the button to call the filterTable function

// Event Handlers 
buildFilters(tableData, initFilter);                          // calls the buildFilters function to create the select lists to filter the dataset
button.on("click", filterTable);                              // calls the filterTable function when a button click event occurs
document.getElementById("filters").addEventListener("change", onChange);

// Function called by button click to filter tableData by user input values
function filterTable (encounter) {

  tbody.text('');                                             // clears the contents of the tbody variable
  let DisplayData = filterData(tableData);                    // calls the function to filter the array
  buildTable(DisplayData);                                    // calls the function to build the new output table in tbody                                    
}

function filterData (filteredArray) {

  filters.forEach((filter) => {                               // loop to check each filter type and filter the array
    let inputValue = document.getElementById(filter).value;   // reads the data value input by the user in the field in the filters list group
    if (inputValue === '') {                                  // checks to see if a value was entered for the current filter
      console.log('No user input for: ', filter);             // if no input sends a message to the console
      console.log(filteredArray)                              // displays the current array to the console
    }
    else  {
      console.log('The user input value for', filter,'is: ', inputValue);
      let filteredOutput = filteredArray.filter(encounter => encounter[filter] === inputValue);   // iterates through each object in the filtered array and returns only the objects with the same filter value as the search criteria
      filteredArray = filteredOutput                                                              // replaces the old array with the newly filtered output
      console.log(filteredArray);                                                                 // displays the filtered array in the console
    }
  })
  return filteredArray                                        // returns the filtered array data
}

// Create and Display the Data Table
function buildTable(dataArray) {

  dataArray.forEach((encounter) => {                          // iterates through each object in the tableData array
    let row = tbody.append("tr");                             // creates a row variable, adds a table row tag to the begining and appends it to the table body in index.html
    Object.entries(encounter).forEach(([key, value]) => {     // for each value in the tableData row gathers the key and value information
      let cell = row.append("td");                            // creates a cell variable, adds a table data tag and appends it to the row
      cell.text(value);                                       // adds the text value from the object in tableData to the body of the cell variable
    });
  });
}

// Function called to create the select lists based on the data set values to allow the user to filter the tableData
function buildFilters (inputArray, inputVals) {
  
  console.log(filters)
  filters.forEach((filter) => {                               // loops through all filter options
    let test = "";                                            // creates a blank variable called test
    inputVals.forEach((set) => {                              // checks for any existing user input values for that filter
      if (set[0] === filter) {                                
        test = set[1];                                        // sets test equal to the existing filter value
      };
    });
    let vals = [];
    inputArray.forEach((encounter) => {                       // creates a list of all values in the data set for the current filter
      vals.push(encounter[filter]);
    });
    let uniqueVals = [...new Set(vals)];                      // removes all duplicate values from the list
    uniqueVals.sort();                                        // sorts the list
    console.log('List of ', filter, uniqueVals);

    let listItem = document.createElement('li');              // creates a new list item
      listItem.className = 'filter list-group-item';          // assigns css classes to the list item so that it will display properly
      listItem.id = filter + "list";                          // assigns an id to the list item
      listItem.innerHTML = '<label for="' + filter + '">Select a ' + filter + '</label>'; //  creates a display label for the filter 

    let selectList = document.createElement("select");        // creates the select list
      selectList.id = filter;                                 // assigns an id to the select list
      selectList.innerHTML = '<option value="">na</option>';  // creates a default null value option at the top of the select list
    
      uniqueVals.forEach((object) => {                        // loops through each unique value in the list
        let option = document.createElement("option");        // creates an option to select the value
        option.id = filter + object;                          // assigns the value to the option
        option.text = object;                                 // creates the display text for the option
        if (object == test) {                                 // checks if the object value is the same as the existing user input value
          option.selected = true;                             // if the same, sets the object value as the selected value for that filter 
        };                                
        selectList.appendChild(option);                       // appends the option to the select list
      });
    listItem.appendChild(selectList);                         // appends the select list to the list item
    filterBody.appendChild(listItem);                         // appends the list item to the 'ul' in index.html
  })
}

// Function called to save all of the current user inputs, delete the old select list and then recreate the select lists with the retained user input values
function onChange() {

  let filterArray = filterData (tableData);                   // runs the filterData function
  let userInputs = []                                         // creates a blank list to hold the user input values
  filters.forEach((filter) => {                               // loops through each filter type
    let userInput = document.getElementById(filter).value;    // gathers the user input value
    let userVals = [filter, userInput];                       // saves the filter type and existing user value for that filter to a list
    userInputs.push(userVals);                                // appends the list of values to the list of user input values
    let elem = document.getElementById(filter + "list");      // finds the element in the html list with the current filter id
    filterBody.removeChild(elem);                             // removes the current element from the display list (erases the old list)  
  });
  console.log(userInputs)
  buildFilters (filterArray, userInputs)                      // runs the buildFilters function to recreate the select lists while retaiing the previous user inputs   
}