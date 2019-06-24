/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let x = 1;
    while (x <= 100) {
        let msg = "";
        if (x % 3 === 0) {
            msg += "Fizz";
        }
        if (x % 5 === 0) {
            msg += "Buzz";
        }
        if (msg === "") {
            msg = x;
        }
        console.log(msg);
        x++;
    }
})();
