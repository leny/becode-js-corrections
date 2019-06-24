/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  var name = prompt("Quel est votre prénom ?");

  // Variable récupère ce que l'user encode

  alert("Bonjour, " + name + " !");

  // alert Bonjour suivi de ce que l'user a encodé et d'un !
})();
