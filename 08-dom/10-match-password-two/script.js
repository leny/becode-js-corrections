/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



  document.getElementById(`run`).addEventListener(`click`, () => {

    let passwordSelect = String(document.getElementById(`pass-one`).value);
    let passwordConfirm = String(document.getElementById(`pass-two`).value);

/*    if ((passwordSelect == "") && (passwordConfirm == "")) {
      alert("Veuillez indiquer au moins un caractère pour votre mot de passe svp !");
    }
    else if (passwordSelect === passwordConfirm) {
      alert("Le mot de passe introduit est bien identique à sa confirmation !");
    }
    else
*/
    if (passwordSelect != passwordConfirm) {
      document.getElementById(`pass-one`).classList.add(`error`);
      document.getElementById(`pass-two`).classList.add(`error`);
    }

  });

// <script>alert("hello world");</script>

})();
