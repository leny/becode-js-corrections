/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  var gateau = prompt("Voulez-vous du gâteau, oui ou non ?");

  // Variable récupère les données encodées par l'user

  if (gateau === "oui") {
    alert("Bravo !");
  }

  // Si l'user a encodé oui, alert Bravo

  if (gateau === "non") {
    alert("Arrête de jouer les héros et prends du gâteau !");
  }

  // S'il répond non, alert la phrase
})();
