//import data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

//build function to fill table
function buildTable(data) {
    //clear out any existing data
    tbody.html("");

    //loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //looop through each field in the dataRow and
        //add each value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}