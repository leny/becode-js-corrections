/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const tpl = document.querySelector("#tpl-hero");
const target = document.querySelector("#target");

const displayHero = hero => {
    const elt = tpl.cloneNode(true).content;

    elt.querySelector(".name").innerHTML = hero.name;
    elt.querySelector(".alter-ego").innerHTML = hero.alterEgo;

    elt.querySelector(".powers").innerHTML = hero.abilities.join(", ");

    target.appendChild(elt);
};

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("//localhost:3000/heroes");
        const heroes = await response.json();

        heroes.forEach(displayHero);
    });
})();
