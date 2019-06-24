/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const fruits = [
    "cerise",
    "durian",
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "fraise",
    "durian",
    "pêche",
    "cerise",
    "raisin",
    "cerise",
  ];

  //Lancement du dédoublonnement au clic
  document.getElementById("run").addEventListener("click", () => {
    //tableau vide qui va recevoir les éléments uniques
    let uniq = [];

    //forEach parcourant tout le tableau
    fruits.forEach(function(item){
      //Condition : si l'item n'est pas présent dans le tableau,
      //on l'ajoute
      if(!(uniq.includes(item))){
        uniq.push(item);
      }
    });
console.log(uniq);

  });
})();
