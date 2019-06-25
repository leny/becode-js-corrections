/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fontSizes = [2.2, 2.4, 2.8, 3.2, 3.6, 3.2, 2.8, 2.4, 2.2];

    const target = document.querySelector("#target");

    const text = target.innerText;

    const letters = text.split("");

    let shift = 0;

    setInterval(() => {
        target.innerHTML = letters
            .map((letter, i) => {
                if (++shift >= fontSizes.length) {
                    shift = 0;
                }
                return `<span style="font-size: ${
                    fontSizes[(i + shift) % fontSizes.length]
                }rem">${letter}</span>`;
            })
            .join("");
    }, 250);
})();
