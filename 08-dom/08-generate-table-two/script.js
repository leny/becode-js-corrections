/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // récupèrer l'id target et créer les variables tableau, lignes et colonnes
    var target = document.getElementById("target");

    var table; // le tableau
    var tr; // les rangs
    var td; // les colonnes

    //Créer l'élément tableau 
    table = document.createElement("table");

    //je lie l'élément tableau au parent target
    target.appendChild(table);

    //Créer une boucle for avec les instructions pour les tables de mutltiplication de 1 à 10

    for (let i = 0; i < 10; i++) { //les conditions
        tr = document.createElement("tr"); // Créer l'element tr pour les rangs
        for (let j = 0; j < 10; j++) {
            td = document.createElement("td"); // Créer l'element td pour les colonnes
            td.innerHTML = (i + 1) * (j + 1); // Modifier le contenu de l'element (td) 

            tr.appendChild(td); //lier td a tr
        }
        table.appendChild(tr); // lier tr au tableau
    }



    //Afficher les 10 tables de multiplication


})();