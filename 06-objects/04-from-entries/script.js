/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
        const keys = ["name", "species", "age", "gender", "color"];
        const values = ["Skitty", "cat", 9, "female", "tabby"];



    document.getElementById("run").addEventListener("click", () => {


        // Création d'un tableau

        let tab = [];

        /* Je passe en revue le tableau keys, et à chaque passage dans celui-ci, 
        je pousse dans le tableau "tab" les valeurs des deux tableaux qui sont au
        même endroit grâce à la variable i (= à l'indice) 
        Ce qui va créer un tableau de chaque élément */

        for (let i=0; i < keys.length; i++){
            tab.push([keys[i], values[i]]);
            
        }

        /* Création d'un nouvel objet qui va permettre de récupérer les 5 tableaux
         pour n'en faire qu'un grâce à Object.fromEntries . */

        newObject = Object.fromEntries(tab);

        console.log(newObject);
    });

})();
