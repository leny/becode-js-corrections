/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        //methode 1: boucle for
        fruits.forEach(element => {
            if(element == "pomme"){
                console.log("pomme trouvée avec boucle FOR !");
            }
            //return false;
        });

        //methode 2: Array.indexOf();
        if(fruits.indexOf("pomme") > -1){ //indexOf retourne -1 si l'élement n'est pas trouver sinon il retourne son index
            console.log("pomme trouvée avec Array.indexOf() !");
        }

        //methode 3: Array.includes();
        if(fruits.includes("pomme")){ //includes retourne false si l'élement n'est pas trouver sinon return true
            console.log("pomme trouvée avec Array.includes() !");
        }
    });
})();