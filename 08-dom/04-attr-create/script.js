/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let source = document.getElementById("source").getAttribute("data-image");      // On récupère l'attribut data-image
    let image = document.getElementById("target").innerHTML = `<img src="${source}" alt="chat"/>`;  // On ajoute la balise et l'image

    let suppr = document.getElementById("source");      // On récupère l'élément à supprimer
    let parent = document.querySelector(".material");   // On sélectionne le parent de l'élément
    parent.removeChild(suppr);                          // On supprime
})();
