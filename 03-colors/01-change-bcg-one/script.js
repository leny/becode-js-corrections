/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("red").addEventListener("click", () => {
        document.querySelector("html").style.backgroundColor = "#B61E08";
    });

    document.getElementById("green").addEventListener("click", () => {
        document.body.style.background = "#009C36";
    });

    document.getElementById("yellow").addEventListener("click", () => {
        document.body.style.background = "#F8FB4A";
    });

    document.getElementById("blue").addEventListener("click", () => {
        document.body.style.background = "#005EC4";
    });
})();
