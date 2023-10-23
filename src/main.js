// Button-Element mit der ID "theme-toggle"
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const isLightbulbOn = localStorage.getItem("isLightbulbOn") === "true";
//  Event-Listener  um auf Klickereignisse zu reagieren
themeToggle.addEventListener("click", function () {
  // Finde das <i>-Element innerhalb des Buttons
  const lightbulbIcon = themeToggle.querySelector("i.fa-lightbulb");

  // Überprüfe, ob das <i>-Element die Klasse "active" hat
  if (lightbulbIcon.classList.contains("active")) {
    // Schalte die Glühbirne aus, indem die Klasse "active" entfernt wird
    lightbulbIcon.classList.remove("active");
    // Ändere die Hintergrundfarbe der Seite zurück
    body.style.backgroundColor = "var(--clr-indigo950)";
  } else {
    // Schalte die Glühbirne ein, indem die Klasse "active" hinzugefügt wird
    lightbulbIcon.classList.add("active");
    // Ändere die Hintergrundfarbe der Seite auf eine neue Farbe
    body.style.backgroundColor = "var(--clr-slate400)";
  }
});

// Aktualisiere das Icon basierend auf dem gespeicherten Zustand
const lightbulbIcon = themeToggle.querySelector("fa-lightbulb"); // Der querySelector in JavaScript ist eine Methode, die es ermöglicht, ein HTML-Element im DOM (Document Object Model) anhand eines CSS-Selektors auszuwählen
if (isLightbulbOn) {
  lightbulbIcon.classList.add("active");
  body.style.backgroundColor = "var(--clr-slate400)";
}

// Event-Listener um auf Klickereignisse zu reagieren
themeToggle.addEventListener("click", function () {
  if (lightbulbIcon.classList.contains("active")) {
    // Schalte die Glühbirne aus, indem die Klasse "active" entfernt wird
    lightbulbIcon.classList.remove("active");
    body.style.backgroundColor = "var(--clr-indigo950)";
    // Speichere den Zustand "aus" im localStorage
    localStorage.setItem("isLightbulbOn", "false");
  } else {
    // Schalte die Glühbirne ein, indem die Klasse "active" hinzugefügt wird
    lightbulbIcon.classList.add("active");
    body.style.backgroundColor = " var(--clr-light)";
    // Speichere den Zustand "an" im localStorage
    localStorage.setItem("isLightbulbOn", "true");
  }
});
