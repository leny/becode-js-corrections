/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // ON CLICK
    document.getElementById("run").addEventListener("click", function () {

        // POSSIBLE SOLUTION (SHORTEST ONE, FASTER)

        fruits[0] = "banane";
        fruits[fruits.length - 1] = "kiwi";
        console.log(fruits);

        // POSSIBLE SOLUTION (FINDS AND CHANGES THE SPECIFIED INDEX, SLOWER)

        /* fruits.splice(0, 1); // or .shitf();
        fruits.splice(-1, 1); // or .pop();
        fruits.unshift("banane");
        fruits.push("kiwi"); */


        // POSSIBLE SOLUTION (FIND ALL MATCHES, SLOWEST)
        /* for (let i = 0; i <= fruits.length; i++) {
            if (fruits[i] === "pomme") {
                fruits[i] = "banane";
            }
            if (fruits[i] === "cerise") {
                fruits[i] = "kiwi";
            }
        } */

        // POSSIBLE SOLUTION (FIND ALL MATCHES, SLOWEST)

        /* fruits.forEach(fruit => {
            if (fruit === "pomme") {
                fruit = "banane";
            }
            if (fruit === "cerise") {
                fruit = "kiwi";
            }
        }); */

    });
})();