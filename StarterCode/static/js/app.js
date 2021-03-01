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
var button = d3.select("filter-btn");
//attach an event listener 
d3.select("filter-btn").on("click", function(filterByDate){
//do something when the button is clicked below:
});