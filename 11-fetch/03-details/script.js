/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
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

    target.firstElementChild
        ? target.replaceChild(elt, target.firstElementChild)
        : target.appendChild(elt);
};

const input = document.querySelector("#hero-id");

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
        const id = +input.value; // parseInt(input.value, 10)

        if (isNaN(id)) {
            console.error("Invalid id!");
            return;
        }

        try {
        const response = await fetch(`//localhost:3000/heroes/${id}`);
        const hero = await response.json();

        displayHero(hero);
        } catch (err) {
            console.error(`Unknown hero with id: ${id}`);
        }
    });
})();
