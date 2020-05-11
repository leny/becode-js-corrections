
/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here



     function randomColor() {
        let hexaCode = ' 0123456789ABCDEF';
        var preHexa = '#';

        for (let i = 0; i < 6; i++) {
           preHexa += hexaCode[Math.floor(Math.random() * 12)];
        }
        return preHexa;
      };
      let  launch = document.getElementById("run");
      launch.addEventListener("click", function()
      {
          document.documentElement.style.backgroundColor= randomColor();
      })

})();
