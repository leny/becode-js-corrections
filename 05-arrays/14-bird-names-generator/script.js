/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    
    document.getElementById("run").addEventListener("click",() => { // ajout d'un event listener sur le bouton
        
    
        // création d'une fonction qui va faire un véritable aléatoire
        var RealRand = (max, min) => { return Math.floor(Math.random() * (max - min)) + min;}; 
        
        
        // appel de la fonction de vrai aléatoire dans une variable.
        // on recupere le zozio en question de l'index en question.
        var zozioIndex = RealRand(birds.length,0);
        var zozio = birds[zozioIndex].name;  
        
        // transformation du set en tableau. et on recuper le bone adjectif dans une variable directe
        // j'aurais pu éclater ce code, mais j'suis pas votre mère. :)
        var adj = Array.from(adjectives)[RealRand(adjectives.size,0)]; 

        // si l'objet bords contient une propriété fem, on lui dit que c'est le article "la", sinon c'est "le".
        var artDef = (birds[zozioIndex].fem != undefined)? "la" : "le"; 
        adj +=  (birds[zozioIndex].fem != undefined)? "e" : ""; // pareil qu'au dessus, on ajoute E au pronom i l'objet birds contient une propriété fem
        
        // construction de la phrase =>
        document.getElementById("target").innerHTML = artDef + " " + zozio + " " + adj; // on tape le tout dans target et c'est plié!
    });
    
})();
