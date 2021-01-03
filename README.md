# Javascript-Challenge

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
    <img src="https://github.com/robertjbowen/web-scraping-challenge/blob/main/images/scrapeNews.png"/>
    <br>
    <em>Declaration of reference variables</em>
</p>

The two reference variables rely on the D3.select tool to function, requiring the addition of a script line of code to the header in index.html to reference the D3 toolset. This is the only modification to index.html from what was provided in the source material.

<p>
    <img src="https://github.com/robertjbowen/web-scraping-challenge/blob/main/images/scrapeNews.png"/>
    <br>
    <em>D3 toolset reference script - line 11 added to index.html</em>
</p>

2) The Level-1 app.js file relies on two functions: buildTable and filterTable 

The buildTable function  - is set to run immediately when the site is initiated using the full unfiltered tableData array. 
<p>
    <img src="https://github.com/robertjbowen/web-scraping-challenge/blob/main/images/scrapeNews.png"/>
    <br>
    <em>buildTable function</em>
</p>

It is also called by the filterTable function using the filtered data array as the input. The function iterates through each item in the array (called an encounter). Iit creates a new table row variable which it appends to the html tbody reference. Next it iterates through each attribute for the encounter and adds the attribute value to a table data cell as text, which it then appends to the table row.

<p>
    <img src="https://github.com/robertjbowen/web-scraping-challenge/blob/main/images/scrapeNews.png"/>
    <br>
    <em>buildTable function</em>
</p>

The filterTable function - only runs when the user selects the 'Filter Table' button. The function begins by gathering the date value input by the user using the document.getElementById('datetime') operation saves it to a varaibl called 'filterDate'and displays the retrieved value to the console. The function then iterates through each object in the tableData array and returns only the objects with the same datetime as the search criteria, saving the array to a variable called 'filteredData'. Finally, the function then clears the contents of the tbody varaiable (erasing the currently displayed output table) and then calls the buildTable function, passing the filteredData array as the value to be displayed.

<p>
    <img src="https://github.com/robertjbowen/web-scraping-challenge/blob/main/images/scrapeNews.png"/>
    <br>
    <em>filterTable function</em>
</p>

3) There is a single event handler that listens for the 'Filter Table' button to be clicked by the user and then runs the filterTable function.

<p>
    <img src="https://github.com/robertjbowen/web-scraping-challenge/blob/main/images/scrapeNews.png"/>
    <br>
    <em>filterTable event handler</em>
</p>
