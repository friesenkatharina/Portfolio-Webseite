// Button-Element mit der ID "theme-toggle"
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

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
    body.style.backgroundColor = "var(--deine-neue-hintergrundfarbe)";
  }
});
