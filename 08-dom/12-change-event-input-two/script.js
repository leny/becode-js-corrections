/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // base = copie exo précédent

//définir variable compteur i
var i = 0;
var a = 0;

//évènement saisie de touche clavier sur l'input
document.querySelector("input").onkeyup=function(){
    
i++;
var u = document.getElementById("pass-one").value;
var reG =  /\d/;

if (reG.test(u)){
    a++;
    };

if (i>=8 && a>=2){
    document.getElementById("validity").innerHTML = "OK";
    };

// console.log(a);
// console.log(u);
// console.log(i);

};

})();
