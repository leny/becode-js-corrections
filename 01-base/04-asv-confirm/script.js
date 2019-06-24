/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(() => {

        // Créer une variable bouton
        var bouton = false;

        // execute ce code tant que bouton est FAUX
        while (bouton == false) {
            //Prompt = un input de l'utilisateur 
            var age = prompt("Quel âge avez-vous?");
            var genre = prompt("Quel est votre genre?");
            var ville = prompt("Quelle est votre ville ?");

            // si confirme bouton devien VRAI 
            if (confirm(age + " " + genre + " " + ville)) { // 
                bouton = true;

                // SINON c'est reparti pour un tour ... 
            } else {}
        }
    }

)();