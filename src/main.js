// document.addEventListener("DOMContentLoaded", function () {
//   const themeToggle = document.getElementById("themeToggle");

//   if (themeToggle) {
//     // Prüfen, ob das Element existiert
//     themeToggle.addEventListener("click", function () {
//       // Aktionen für das Umschalten des Themas
//     });
//   }
// });

// // Button-Element mit der ID "theme-toggle"
// const themeToggle = document.getElementById("theme-toggle");
// const body = document.body;
// const isLightbulbOn = localStorage.getItem("isLightbulbOn") === "true";

// //  Event-Listener  um auf Klickereignisse zu reagieren
// themeToggle.addEventListener("click", function () {
//   const lightbulbIcon = themeToggle.getElementsByClassName("lightbulb")[0];
//   if (lightbulbIcon.classList.contains("active")) {
//     // Schalte die Glühbirne aus, indem die Klasse "active" entfernt wird
//     lightbulbIcon.classList.remove("active");
//     // Ändere die Hintergrundfarbe der Seite zurück
//     body.style.backgroundColor = "var(--clr-indigo950)";
//   } else {
//     // Schalte die Glühbirne ein, indem die Klasse "active" hinzugefügt wird
//     lightbulbIcon.classList.add("active");
//     // Ändere die Hintergrundfarbe der Seite auf eine neue Farbe
//     body.style.backgroundColor = "var( --clr-slate800)";
//   }
// });

// // Aktualisiere das Icon basierend auf dem gespeicherten Zustand
// const lightbulbIcon = themeToggle.getElementsByClassName("fa-regular"); // Der querySelector in JavaScript ist eine Methode, die es ermöglicht, ein HTML-Element im DOM (Document Object Model) anhand eines CSS-Selektors auszuwählen

// if (isLightbulbOn) {
//   lightbulbIcon.classList.add("active");
//   body.style.backgroundColor = "var( --clr-slate800)";
// }

// let darkMode = false;
// // Event-Listener um auf Klickereignisse zu reagieren
// themeToggle.addEventListener("click", function () {
//   darkMode = !darkMode;
//   if (darkMode) {
//     // Schalte die Glühbirne aus, indem die Klasse "active" entfernt wird
//     lightbulbIcon.classList.remove("active");
//     body.style.backgroundColor = "var(--clr-indigo950)";
//     // Speichere den Zustand "aus" im localStorage
//     localStorage.setItem("isLightbulbOn", "false");
//   } else {
//     // Schalte die Glühbirne ein, indem die Klasse "active" hinzugefügt wird
//     lightbulbIcon.classList.add("active");
//     body.style.backgroundColor = "  #94a3b8";
//     // Speichere den Zustand "an" im localStorage
//     localStorage.setItem("isLightbulbOn", "true");
//   }
// });

// ***************************
// 2 versuch die Glühbirne ein und aus zu schalten :)
// function myFunction() {
//   // Wähle das erste Element mit der Klasse 'fa-lightbulb' aus
//   let element = document.querySelector("header__bulb");
//   if (element) {
//     element.classList.toggle("dark-mode");
//   }
// }
// function myFunction() {
//   document.body.classList.toggle("dark-mode");
// }
// function myFunction() {
//   let element = document.body;
//   element.classList.toggle("dark-mode");
// }
/* This a top-level function with some arguments that should be mangled */
// Wink Hand at Main Section

// function frame() {
//   if (/* test for finished */) {
//     clearInterval(id);
//   } else {
//     /* code to change the element style */
//   }
// }

let id = null;

function myMove() {
  const elem = document.getElementById("beweglichesBild");
  let pos = 0;
  let direction = 1; // Richtung: 1 für rechts, -1 für links

  // Vorherige Intervalle löschen, falls vorhanden
  clearInterval(id);

  // Funktion, die bei jedem Intervallaufruf ausgeführt wird
  function frame() {
    // Prüft die Position und ändert die Richtung, wenn nötig
    if (pos >= 150) {
      direction = -1; // Bewegung umkehren
    } else if (pos <= 0) {
      direction = 1; // Bewegung umkehren
    }

    // Aktualisiert die Position basierend auf der Richtung
    pos += direction;
    elem.style.top = pos + "20 px"; // Korrektur: " 1 px" zu "px"
    elem.style.left = pos + "px"; // Korrektur: " 2 px" zu "px"

    // Beendet die Animation, wenn die Startposition erreicht ist
    if (pos === 0 && direction === 1) {
      clearInterval(id);
    }
  }

  // Startet das Intervall, das die Funktion frame() in jedem Frame aufruft
  id = setInterval(frame, 20); // Intervallzeit von 3ms auf 10ms erhöht für bessere Performance
}

// Fügt einen Event-Listener hinzu, der die Funktion myMove aufruft, wenn auf das Bild geklickt wird
document.getElementById("beweglichesBild").addEventListener("click", myMove);
function myFunction() {
  alert(
    "  function begruessen() {\n" +
      '    const nachricht = document.getElementById("begr\u00FC\u00DFungsnachricht");\n' +
      '    nachricht.classList.add("visible");\n' +
      '    nachricht.textContent = "Herzlich Willkommen auf meiner Homepage! St\u00F6bert gerne rum und hinterlasst mir gerne ein Feedback.";\n' +
      "  }\n\n" +
      "  setTimeout(begruessen, 1000);\n\n" +
      "</code></pre>"
  );
}
