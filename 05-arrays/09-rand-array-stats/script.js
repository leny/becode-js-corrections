/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        let nbrs = 0;
        let somme = 0;
        let tableau = [];
        // Boucle pour récupérer les ID + ajouter le nombre aléatoire
          for(let i=1; i<11 ; i++){
              nbrs = document.getElementById("n-" + i).textContent;
              nbrs = Math.floor((Math.random()*100)+1);  // floor: arrondi, random*100: [0,100[, +1 pour aller de 1 à 100
              tableau.push(nbrs);
              somme += nbrs;
          }
          let nbrsMin = document.getElementById("min").textContent;
          nbrsMin = Math.min(...tableau);  // Pour dire de prendre chaque élément du tableau

          let nbrsMax = document.getElementById("max").textContent;
          nbrsMax = Math.max(...tableau);

          document.getElementById("sum").textContent = somme;
          document.getElementById("average").textContent = somme/(tableau.length);
    });
})();
