/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

// Récupérer la valeur de l'input        
      let x = Number(document.getElementById("number").value);

// Rejeter si négatif ou décimal
      if (x < 0 || x % 1 != 0) {
        alert("Vous ne pouvez entrer que des entiers positifs");
      }

// Fonction factorielle recursive   
      function factorial(x) {
        if (x === 0) {
          return 1;
        }
        return x * factorial(x-1);          
      }
      
// Alert de la réponse
      alert(factorial(x));

    });
})();
