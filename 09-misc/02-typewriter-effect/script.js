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
text.textContent = "";

const addcharacter = (a, espace) => { //fonction qui prends l'indexe de lettre en paramètre


    let esp = ""; // je crée une var qui va servire à si y a un espace le rajouté mais si y'en a pas il rajoutera rien
    if (espace == true){
        esp += " "; // ici j'appele la var esp + " " pour ajouté l'espace car c'est vrai
    }


    // on ecris dans le bloc pour ça on reprends la phrase et on reprent le tableau lettre par lettre
    document.getElementById("target").textContent =  document.getElementById("target").innerText + esp + textTab[a]; 
    
    //textContent supprimer les espaces en trop
    

    if (textTab[a] == " "){
        espace= true; // si dans ma phrase il tombe sur un espace espace est vrai
    }
    else {
        espace = false; // si il tombe pas sur un espace c'est faux
    }

    if( a < textTab.length){ // si l'indexe est plus pettite que la taille du tableau je rappele la fonction après un délai
        setTimeout(() => {addcharacter(a+=1, espace)}, Math.floor(Math.random()*(400 - 200)+200));
    }
    
}

//premiere appel
addcharacter(0, false);
})();
