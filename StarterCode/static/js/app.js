// from data.js
var tableData = data;

// YOUR CODE HERE!

// Sorting functions (invoked by sortTable())
ufoTable(tableData)

function ufoTable(ufoData){
    var table = document.getElementsByClassName("table table-striped")

    for (var i = 0; i < ufoData.length; i++)
    {
        var row = <tr>
                    <td>$(ufoData[i].datetime)</td>
                    <td>$(ufoData[i].city)</td>
                    <td>$(ufoData[i].state)</td>
                    <td>$(ufoData[i].country)</td>
                    <td>$(ufoData[i].shape)</td>
                    <td>$(ufoData[i].durationMinutes)</td>
                    <td>$(ufoData[i].comments)</td>
                        
        </tr>
        table.innerHTML += row
    }    
}    