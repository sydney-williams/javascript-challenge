// from data.js
//var tableData = data;

// YOUR CODE HERE!

// Sorting functions (invoked by sortTable())
//ufoTable(tableData)

// JSON Array to HTML 
// function ufoTable(ufoData){
//     var table = document.getElementsByClassName("table table-striped")

//     for (var i = 0; i < ufoData.length; i++)
//     {
//         var row = <tr>
//                     <td>$(ufoData[i].datetime)</td>
//                     <td>$(ufoData[i].city)</td>
//                     <td>$(ufoData[i].state)</td>
//                     <td>$(ufoData[i].country)</td>
//                     <td>$(ufoData[i].shape)</td>
//                     <td>$(ufoData[i].durationMinutes)</td>
//                     <td>$(ufoData[i].comments)</td>
                        
//         </tr>
//         table.innerHTML += row
//     }    
// }    


//look up how to populate HTML table from JS array 
//forming array to display sighting data
//stack help 
function displayData(nl, objectData) { // nl representing NodeList and objectData representing array with objects
    objectData.forEach((d, i) => {
      var tr = nl.insertRow(i);
      Object.keys(d).forEach((k, j) => { // representing the th.innerHTML
        var cell = tr.insertCell(j);
        cell.innerHTML = d[k]; // Assign objects to cells   
      });
      nl.appendChild(tr);
    })
  }
  
  var ufoTable = document.querySelector("#ufo-table tbody");
  displayData(ufoTable, data); //displaying the data to the HTML table


//set up for filtering 
var tableData = data;
var tbody = d3.select("tbody");

//create a fitlter button
var button = d3.select("#filter-btn");

//attach an event listener 
button.on("click", function(){
  //do something when the button is clicked below:
//prevent the page from refreshing
d3.event.preventDefault();
//select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
//get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
//define your table
table = document.getElementById("#ufo-table");
//gather tag name
// tr = table.getElementByTagName("tr");

//display data through filter search button
//filter between tableData and inputValue (this is what you want to filter your tableData against) 
//use js filter function for this step 
var filteredData = tableData.filter(item => item.datetime === inputValue);
console.log (filteredData)

//create an array with the dates vaules
//var dates = filteredData.map(item => item.datetime);

// var data_table =
// var ufo_dates = 
//  var ufo_city = 
// var ufo_state =
// var ufo_country =
// var ufo_shape = 
// var ufo_comment = 

//summary

//append stats (you'll be appending "tr" and "td" *hint*)
var list = tbody.html("")
for (var i = 0; i < filteredData.length; i++) {
  var row = list.append("tr")
  row.append("td").text(filteredData[i].datetime)
  row.append("td").text(filteredData[i].city)
  row.append("td").text(filteredData[i].state)
  row.append("td").text(filteredData[i].country)
  row.append("td").text(filteredData[i].shape)
  row.append("td").text(filteredData[i].durationMinutes)
  row.append("td").text(filteredData[i].comments)
  //console.log(filteredData[i])
  //console.log('hello')
  //console.log(i);
}
// var row = list.append("tr")
// row.append("td").text("hello")
// row.append("td").text("world")


});

