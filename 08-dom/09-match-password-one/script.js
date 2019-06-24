/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // Déclaration des IDs cible
    var firstInput = document.getElementById("pass-one");
    var secondInput = document.getElementById("pass-two");
    
    // FACULTATIF
    // modification des inputs type "text" en veritable champs type "password"
    firstInput.type = "password";
    secondInput.type = "password";

    // stockage de la couleur initial des border input
    var inputsColor = firstInput.style.borderColor;

    // Application de la couleur par défauts
    firstInput.style.borderColor = inputsColor;
    secondInput.style.borderColor = inputsColor;



    document.getElementById("run").addEventListener("click", () => {

        // SI la valeur introduite dans le premier champ de text est différente du second champ de text
        if (firstInput.value !== secondInput.value) 
        {
            // Alors on selectionne le style de ces inputs et on y applique une bordure rouge
            firstInput.style.borderColor = "crimson";
            secondInput.style.borderColor = "crimson";
            // On préviens ensuite l'utilisateur avec une alerte
            alert("Input 1 & 2 ne correspondent pas \ud83d\ude13 ! ");

        } 
        else // SINON
        {
            // On applique une couleur verte au bordures des champs de texte 
            firstInput.style.borderColor = "chartreuse";
            secondInput.style.borderColor = "chartreuse";

            // on félicite l'utilisateur 
            alert("Bienvenu humain \ud83d\ude09 !");
        }

    });

})();