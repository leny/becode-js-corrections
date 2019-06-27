/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
     // Création d'une fonction pour récupérer la date en Fr

    function dateFr(){

     /* Création de 3 variables : 
     Un tableau qui contient le nom des jours en Fr
     Un tableau qui contient le nom des mois en Fr 
     Une qui va récupérer la date d'aujourd'hui */
     
     let jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     let mois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre");
     let date = new Date();

     /* Création d'une variable/d'un tableau qui va récupérer : 
     En prémier lieu, récupération dans le tableau, du jour via l'objet Date dans la variable date
     Ensuite, dans cette variable, on récupère en y ajoutant : 
     - Le numéro du jour
     - Le mois
     - L'année */

     let ajd = jours[date.getDay()] + " ";  
     ajd += date.getDate() + " ";   
     ajd += mois[date.getMonth()] + " ";   
     ajd += date.getFullYear();
     return ajd;
    }

    //Création d'une fonction pour récupérer l'heure

    function heure(){

     let date = new Date();
     let heure = date.getHours();
     let minutes = date.getMinutes();

     // Ajout d'un 0 si les minutes sont en dessous de 10
     
     if(minutes < 10){
          minutes = "0" + minutes;
     }
     return heure + "h" + minutes;
    }

    // Remplacer le texte par la date 

    document.getElementById("target").innerHTML = (dateFr() +", "+ heure());


})();
