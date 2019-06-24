/*
becode/javascript
/04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
coded by leny@BeCode
started at 26/10/2018
*/

// L'abondance de commentaires dans ce code vise un objectif pédagogique
// L'indentation du switch() vise un affichage 1-Page du code

(() => {

  document.getElementById("run").addEventListener("click", () => { // Lancer les instructions quand l'utilisateur presse le bouton

    // Création des variables requises
    // =======================================================================================================================
    let yearInput = String(document.getElementById("year").value); // Récupérer l'année introduite par l'utilisateur
    let dateStart = new Date(); // Créer une variable date (ici elle va prendre la date du jour mais on s'en fout)
    let monthArray = new Array(); // Créer un tableau vide pour y mettre le(s) mois de l'année introduite qui contien(nen)t un vendredi 13

    // !!! RÉFLEXION !!!
    // Inutile d'analyser tous les jours de l'année !
    // On sait que dans un mois, il y a un seul jour 13.
    // On veut uniquement savoir si ce jour 13 est un vendredi.
    // Si oui, on stockera le(s) mois qui possède(nt) ce vendredi 13 dans un tableau
    // =======================================================================================================================
    for(let iMonth = 0; iMonth < 12; iMonth++) { // Boucler sur un indice mensuel (on connaît le nombre de boucles effectuées)
      dateStart.setFullYear(yearInput, iMonth, 13); // Formater la date avec les variables qui nous intéressent
      if (dateStart.getDay() == 5) { // Si ce 13 du mois analysé est l'index du jour qui équivaut à vendredi
        monthArray = dateStart.getMonth(); // Alors ajouter au tableau l'index du mois qui possède ce vendredi 13

        // Étudier les cas pour afficher en vFR le mois du vendredi 13 en fonction de son index
        switch (monthArray) {
          case 0 :
            console.log("Janvier");
            break;
          case 1 :
            console.log("Février");
            break;
          case 2 : console.log("Mars"); break;
          case 3 : console.log("Avril"); break;
          case 4 : console.log("Mai"); break;
          case 5 : console.log("Juin"); break;
          case 6 : console.log("Juillet"); break;
          case 7 : console.log("Août"); break;
          case 8 : console.log("Septembre"); break;
          case 9 : console.log("Octobre"); break;
          case 10 : console.log("Novembre"); break;
          case 11 : console.log("Décembre"); break;
          default:;
        }
      }
    }

  });

})();
