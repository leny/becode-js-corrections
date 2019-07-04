/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const apiURL = "http://localhost:3000/heroes";
    let heroNameField = document.getElementById("hero-name");
    let heroAlterEgoField = document.getElementById("hero-alter-ego");
    let heroPowersField = document.getElementById("hero-powers");

    heroNameField.setAttribute("placeholder", "Beast Name");
    heroAlterEgoField.setAttribute("placeholder", "Alter Ego");
    heroPowersField.setAttribute("placeholder", "Power, Power");

    document.getElementById("run").addEventListener("click", function () {

        let heroNameValue = heroNameField.value;
        let heroAlterEgoValue = heroAlterEgoField.value;
        let heroPowersValue = heroPowersField.value;
        let checkHeroPowersSplit;

        if (heroPowersValue === heroPowersValue.split(",")[0]) {
            checkHeroPowersSplit = heroPowersValue;
        } else {
            checkHeroPowersSplit = heroPowersValue.split(",");
        }

        (async () => {
            if (heroNameValue.trim() !== "" | " " &&
                heroAlterEgoValue.trim() !== "" | " " &&
                heroPowersValue.trim() !== "" | " ") {

                const response = await fetch(apiURL);
                const responseContent = await response.json();

                elementFromInputs = new Object({
                    id: responseContent.length + 1,
                    name: heroNameValue,
                    alterEgo: heroAlterEgoValue,
                    abilities: checkHeroPowersSplit,
                });

                const postContent = await fetch(apiURL, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(elementFromInputs),
                });

                const logResponse = await fetch(apiURL);
                const logResponseContent = await logResponse.json();

                console.log(logResponseContent);

            } else {
                alert("All fields are required");
            }

        })();
    });

})();