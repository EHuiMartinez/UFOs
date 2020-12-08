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

        //loop through each field in the dataRow and
        //add each value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

//build function to 'listen' for clicks
function handleClick(){
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check if a date was entered and filter data using date
    if (date) {
        //apply 'filter' to tabel data to only keep rows
        //where 'datetime' value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //rebuild table using filtered data
    //@Note: if no date was entered, 
    //then filtered Data will be original tableData
    buildTable(filteredData);
}

//attach an event (link to filter button) and listen for clicks
d3.selectAll("#filter-btn").on("click", handleClick);

//Build table when the page loads
buildTable(tableData);