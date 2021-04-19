// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach(function(alianSightings) {
    console.log(alianSightings);
    var row = tbody.append("tr");
    Object.entries(alianSightings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });


  
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Select <tbody> and remove prior fields. 
  tbody.html("");

  //console.log(inputValue);
  //console.log(date);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

// Rebuild table with the filtered data. 
  filteredData.forEach((alianSightings) => {
      var row = tbody.append("tr");
      Object.entries(alianSightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });  

  console.log(filteredData);
};