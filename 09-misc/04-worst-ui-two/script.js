/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const target = document.getElementById("target");
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let value = parseFloat(button.innerText);

            value++;

            if (value > parseFloat(button.getAttribute("data-max"))) {
                value = button.getAttribute("data-min");
            }

            button.innerText = `${value}`.padStart(2, "0");

            target.innerText = `+${buttons.map(btn => btn.innerText).join("")}`;
        });
    });
})();
