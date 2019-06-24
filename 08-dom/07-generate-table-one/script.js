/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //Create var u need.
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var id = document.getElementById("target");
    var tr;
    var td;


    //Function to create tab
    function exer8A7(row, column) {

        for (let i = 0; i < row; i++) {
            tr = document.createElement("tr");
            tbody.appendChild(tr);

            for (let i = 0; i < column; i++) {
                td = document.createElement("td");
                tr.appendChild(td);
                //Add your style here!
                td.style.width = "100px";
                td.style.height = "100px";
            }

        }
        table.appendChild(tbody);
        id.appendChild(table);
    }

    exer8A7(10, 1);
})();