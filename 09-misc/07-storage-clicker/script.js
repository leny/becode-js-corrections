/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    // au chargement, on recupere dans une variable click le contenu du localstorage si il y en a un, sinon, ca vaut 0          
    var click = localStorage.getItem("increment") == null? 0 : localStorage.getItem("increment"); 

    // on initialise la target a la valeur de la variable "click"
    document.getElementById("target").innerText = click; 
    
    // on ajoute un event listener sur le click bouton
    document.getElementById("increment").addEventListener("click", () => { 
        
        // au click,on incremente click et on l'affiche.
        document.getElementById("target").innerText = ++click;
        // on ecrase click dans le locale storage
        localStorage.setItem("increment",click); 


    });
})();
