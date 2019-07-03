/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        //définition des variables et je les "force" à être des valeurs
        switch (operation) { //boucles switch ==> dans chaque cas, faire ...
            case "addition": // dans le cas du bouton qui s'appelle "addition"
                alert(x + y); // ... faire cette opération
                break; // casser la bloucles
            case "substraction":
                alert(x - y);
                break;
            case "multiplication":
                alert(x * y);
                break;
            case "division":
                alert(x / y);
                break;
        } // répéter le code pour les trois autres opérations
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();