/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
// recup la phrase
let text = document.getElementById("target");

// divise le texte pour séparé chaque lettre et crée un tableau
let textTab = text.innerText.split("");

// replace le contenu de target par du "vide"
text.innerText = "";

const addcharacter = (a) => {
    text.innerHTML += textTab[a];

    if(a < textTab.length){

        setTimeout(()=> {
            addcharacter(a+=1) }, Math.floor(Math.random()* 400-200)+200); 
    }
}
addcharacter(0);
})();
