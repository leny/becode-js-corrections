/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const apiURL = "http://localhost:3000/heroes";
    let heroID = document.getElementById("hero-id");

    document.getElementById("run").addEventListener("click", function () {

        let heroIDValue = heroID.value.trim();

        (async () => {

            if (heroIDValue !== "" | " ") {


                const response = await fetch(apiURL);
                const responseContent = await response.json();

                responseContent.forEach(async (hero, index) => {
                    let idCheck = "not-found";
                    if (heroIDValue == hero.id) {
                        idCheck = "found";
                        const responseFetch = await fetch(apiURL + "/" + heroIDValue, {
                            method: "DELETE"
                        }).then(function (value) {
                            alert("The hero number " + heroIDValue + " has been deleted successfully");
                        });

                        const logResponse = await fetch(apiURL);
                        const logResponseContent = await logResponse.json();

                        console.log(logResponseContent);
                    } else {
                        if (index === responseContent.length - 1 && idCheck === "not-found") {
                            alert("There're " + responseContent.length + " heroes to DELETE one, simply enter an ID, \nexample: 3");
                        }
                    }
                });
                if (responseContent.length <= 0) {
                    if (window.confirm("There's no more heroes, click OK to add one 😉 \nDon't forget to reload this page when you come back 😛")) {
                        window.open("http://localhost:8000/11-fetch/04-add/index.html");
                    };
                }
            } else {
                alert("An hero ID is required");
            }

        })();
    });

})();