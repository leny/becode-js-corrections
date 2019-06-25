/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const target = document.getElementById("target");
    const buttons = Array.from(document.querySelectorAll("button"));
    const inputs = Array.from(document.querySelectorAll("input"));

    const DELAY = 125;

    buttons.forEach((button, i) => {
        const interval = () => {
            const input = inputs[i];

            let value = parseFloat(input.value);

            if (++value > parseFloat(input.getAttribute("data-max"))) {
                value = input.getAttribute("data-min");
            }

            input.value = `${value}`.padStart(2, "0");

            // kinda ugly, but, hey, I'm the coach!
            target.innerText = `+${inputs.map(inp => inp.value).join("")}`;
        };

        let intervalID = setInterval(interval, DELAY);

        button.addEventListener("click", () => {
            if (intervalID) {
                clearInterval(intervalID);
                intervalID = null;
                button.innerText = "Start";
            } else {
                intervalID = setInterval(interval, DELAY);
                button.innerText = "Stop";
            }
        });
    });
})();
