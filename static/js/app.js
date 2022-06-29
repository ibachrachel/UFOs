//The first thing we're going to do is import the data.
// import the data from data.js
const tableData = data;

//Next, we need to point our data to our HTML page. 
//we need to tell JavaScript what type of element the data will be displayed in.
//We already know that the data will be displayed in a table.
//so in our code editor we'll reference the tbody HTML tag using D3.
// Reference the HTML table using d3
var tbody = d3.select("tbody");

//The next step is to build the table to sort and store the data.
//need to iterate through the array of objects in our data file and then append them to a table row

function buildTable(data) {
  tbody.html("");
  

  data.forEach((dataRow) => {
    let row = tbody.append("tr");

//we'll add code to loop through each field in the dataRow argument. 
//reference one object from the array of UFO sightings. 
    Object.values(dataRow).forEach((val) => {

//we'll append each value of the object to a cell in the table.
      let cell = row.append("td");

//next line we'll add the values.
//When we chain .text(value) to the variable, we are extracting only the text of the value.
      cell.text(val);
      }
    );
  });
}
///////////// Deliverable 1//////////////////////////////

// 1. Create a "variable" to keep track of all the "filters" as an object. Create an "empty filters variable" to keep track of all the elements that change when a search is entered. 
// This variable will be used in Step 5 to store the property “id” and the value that was entered from user input.
var filters = [];

// 3. Use this function to update the filters. Inside this function, you’ll write code in Steps 4-5 to update the filters based on user input.
function updateFilters() {

    // 4a. Save the element that was changed as a variable. Create a variable that saves the "changed element" using d3.select(this).
    // https://website.education.wisc.edu/~swu28/d3t/concept.html
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable. Create a variable that saves the "value of the changed element’s property".
    let elementValue = changedElement.property("value");
    console.log(elementValue);
    // 4c. Save the id of the filter that was changed as a variable. Create a variable that saves the "attribute of the changed element’s id".
    let filterId = changedElement.attr("id");
    console.log(filterId);
    // 5. If a filter value was entered then add that "filterId" and value to the filters list. Otherwise, clear that filter from the filters object. 
    // Write an if-else statement that checks if a value was changed by the user elementValue. 
    // If a value was changed, add the element’s id, filterId, as the property and the value that was changed to the var filters. 
    // If a value was not entered, then clear the element id from the filters variable.
    if (elementValue) {
      filters[filterId]=elementValue;
    }
    else {
      delete filters[filterId];
    } 
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the "filtered data" to the "tableData".
    let filteredData = tableData;
 
    // 9. Loop through all of the filters and keep any data that matches the filter values (from module)
    Object.entries(filters).forEach(([key,value])=> {
      filteredData =  filteredData.filter(row => row[key]=== value);
    });  
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);    
  }
  
  // 2. Attach an event to listen for changes to each filter; from module: d3.selectAll("#filter-btn").on("click", handleClick); 
  // Modify the event listener to "change" on each "input" element and calls the "updateFilters() function".
  d3.selectAll("input").on("change",updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
