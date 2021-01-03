# Javascript-Challenge

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2.png"/>
</p>

***

The purpose of this challenge is to create JavaScript code to import a dataset, create lists to enable user input, provide list filtering functionality and generate html code to display the outputs through an html web interface based on user event triggers.  

***

### Documents in this repository are:

1. UFO-level-1 directory - Folder containing all of the project code for automatic table and date search capabilities

	* index.html - This is the html code to generate the web Landing Page called by the index app in MarsApp.

	* ststic directory - folder containing the html files

		* css directory/ style.css - This is the html code to generate the display styling for the web interface.

		* images directory - contains images called by index.html for display on the webpage background

		* js directory - contains the javascript files 

			* data.js - javascript file containing the input data set to be displayed and filtered

			* app.js - javasrcipt file containg functions and event triggers to read data.js, filter the data set based on user defined date inputs, and generate the html code to display the output table 

2. UFO-level-2 directory - Folder containing the optional project code for multiple search categories

	* All subfolders and files are the same as in the UFO-level-1 directory with changes made only to index.html, images directory, and app.js.

3. images directory - contains images of the WebPage outputs for display in this ReadMe

***

### Design concept:


## Level-1:

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level1.png"/>
    <br>
    <em>UFO-Level-1 Output</em>
</p>

1) The Level 1 app.js begins by gathering the data from data.js and assigning it to the variable tableData. It then creates two additional varaibles: "tbody" to reference the location within index.html where the code to display the rendered table will be inserted, and "button" which refers to the object id within the html that when clicked by the user will run the javascript. 

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level1decvar.png"/>
    <br>
    <em>Declaration of reference variables</em>
</p>

The two reference variables rely on the D3.select tool to function, requiring the addition of a script line of code to the header in index.html to reference the D3 toolset. This is the only modification to index.html from what was provided in the source material.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level1d3html.png"/>
    <br>
    <em>D3 toolset reference script - line 11 added to index.html</em>
</p>

2) The Level-1 app.js file relies on two functions: buildTable and filterTable 

### The buildTable function
- Set to run immediately when the site is initiated using the full unfiltered tableData array. 
<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level1CallBuildTable.png"/>
    <br>
    <em>Initial buildTable function call</em>
</p>

- Also called by the filterTable function using the filtered data array as the input. 
- The function iterates through each item in the array (called an encounter). It creates a new table row variable which it appends to the html tbody reference. Next it iterates through each attribute for the encounter and adds the attribute value to a table data cell as text, which it then appends to the table row.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level1buildTable.png"/>
    <br>
    <em>buildTable function</em>
</p>

### The filterTable function
- Only runs when the user selects the 'Filter Table' button. 
- The function begins by gathering the date value input by the user using the document.getElementById('datetime') operation saves it to a varaibl called 'filterDate'and displays the retrieved value to the console. The function then iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria, saving the array to a variable called 'filteredData'. Finally, the function then clears the contents of the tbody varaiable (erasing the currently displayed output table) and then calls the buildTable function, passing the filteredData array as the value to be displayed.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level1filterTable.png"/>
    <br>
    <em>filterTable function</em>
</p>

3) There is a single event handler that listens for the 'Filter Table' button to be clicked by the user and then runs the filterTable function.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level1eventHandler.png"/>
    <br>
    <em>filterTable event handler</em>
</p>

## 

## Level-2:

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2.png"/>
    <br>
    <em>UFO-Level-2 Output</em>
</p>

1) The Level 2 app.js builds on the Level-1 app.js but expands the functionality to allow multiple inputs by which to filter the data array. In addition to the variables from Level-1, the Level-2 app.js must create the select lists for the user choose from. Two additional variable are created to enable the creation and manipulation of the filters "filters" and "initFilter". An additional varaible: "filterBody" is created to reference the location within index.html where the code to display the user filters will be inserted. 

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2decvar.png"/>
    <br>
    <em>Declaration of reference variables</em>
</p>

2) There is a second event handler that listens for any user inputs to any of the filter options and runs a function called "onChange". This enables the javascript to create reactive filters which adjust the filter options based on values the user has selected for other filters (If the user selects the country of Canada, only cities in Canada are available as options). 

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2eventHandler.png"/>
    <br>
    <em>onChange and filterTable event handlers</em>
</p>

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2reactivefilters.png"/>
    <br>
    <em>filterTable output showing reactive filtering of filter select lists</em>
</p>

The envent handler for the 'Filter Table' button is not changed.

3) The Level-2 app.js file relies on five functions:  From level-1: buildTable and filterTable, New: filterData, buildFilters, and onChange.

### The buildTable function
- No longer set to run immediately when the site is initiated, but can be called simply by pressing the 'Filter Table' button. 
- No change from Level-1.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2buildTable.png"/>
    <br>
    <em>buildTable function</em>
</p>

### The filterTable function
- Only runs when the user selects the 'Filter Table' button. 
- Runs essentially the same as the Level-1 version of the filterTable function but instead of doing the data filtering within the function, it calls the filterData function to do the work. This change was done to allow for handling multiple variable inputs and to resuse the function to support the onChange function as well. 

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2filterTable.png"/>
    <br>
    <em>filterTable function</em>
</p>

### The filterData function
- Called by the filterTable and onChange functions. 
- This function imports the current array (called filteredArray) then loops through each of the filter options and returns the user input value for that option. If the option is blank it writes "no user input" and displays the filteredArray in the console log. If the user has selected a value, the function iterates through each object in the filteredArray and returns only the objects with the same value as the search criteria, saving the array to a variable called 'filteredOutput'. It then saves the filteredOutput as the filteredArray and checks the next filter. Once all filters have been checked, the function returns the new filteredArray to the function that called it. 

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2filterData.png"/>
    <br>
    <em>filterData function</em>
</p>

### The buildFilters function
- Set to run immediately when the site is initiated using the full unfiltered tableData array and no selected filter values. 
<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2CallBuildFilters.png"/>
    <br>
    <em>Initial buildFilters function call</em>
</p>

- Also called by the onChange function. 
- The buildFilters function is the major difference between Level-1 and Level-2 and allows the creation of select lists from the values within the input data set and creates the html code to display the select lists that is non-existant within index.html. 
- This function iterates through each filter type and checks to see the current value and saves it to a varaible called "test". 
- The function iterates through each encounter in the input array and creates a list of all of the values for the current filter type called 'vals'. 'vals is then filtered to remove all duplicate values, sorted alphabetically, and saved as 'uniqueVals'.
- Next the function creates a new html list item <li> with a "selectlist" element for the current filter type.
- The function then iterates through each value in 'uniqueVals' creating a new "option" element which it appends to the selectlist. It also creates an "na" option for when no value is selected. The function compares the "option" value to the "test" variable value. If they match, the object.selected attribute is set to 'true'. This preserves the preexisting user selected values.
- Once all options are created, the listitem is appended to the index.html 'filterBody' reference.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2buildFilters.png"/>
    <br>
    <em>buildFilters function</em>
</p>

- In order to allow the datetime element to be generated as a selectlist, the list item lines 38-41 of the source code in index.html were eliminated and are recreated dynamically by the buildFilters function instead.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2LIhtml.png"/>
    <br>
    <em>Eliminated index.html lines</em>
</p>  

### The onChange function
- Runs automatically whenever a change is detected in the filter values. 
- This function begins by running the filterData function to create the array to be displayed called filterArray. 
- The function iterates through each filter to capture all of the current user selected input values into a list called userInputs.
- Next the function deletes all of the list items in "filterBody". 
- Finally, the function runs the buildFilters function to recreate all of the list items in 'filterBody' using the new filterArray and userInputs to retain the current user values.

<p>
    <img src="https://github.com/robertjbowen/Javascript-Challenge/blob/main/images/Level2onChange.png"/>
    <br>
    <em>onChange function</em>
</p>

***
