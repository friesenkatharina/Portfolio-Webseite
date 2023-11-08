// Key concepts covered: -getElementByID() -parseInt  -Math.sin  -getComputedStyle  -

const mario = document.getElementById("mario");
const imgMario = mario.querySelector("img");
let isJumping = false;

function stopMario() {
  if (!isJumping) {
    imgMario.src = "../Mario/assets/mario-stand.gif";
  }
}

function jumpMario() {
  if (isJumping) return; // Verhindern, dass Mario im Sprung steuert

  isJumping = true;
  imgMario.src = "../Mario/assets/mario-stand.gif"; // Bild zu einem springenden Mario ändern
  let start = null;
  const jumpHeight = 100; // Die Höhe des Sprungs
  const duration = 500; // Dauer des Sprungs in Millisekunden
  const originalY = parseInt(window.getComputedStyle(mario).bottom, 10);

  // Math.sin() um eine wellenförmige oder oszillierende Bewegung zu erzeugen, basierend auf dem Fortschritt (progress) eines Vorgangs im Verhältnis zur Gesamtdauer (duration) dieses Vorgangs.
  function frame(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const peak = Math.sin((progress / duration) * Math.PI); // Sinusförmige Bewegung für einen natürlichen Sprung
    mario.style.bottom = `${originalY + peak * jumpHeight}px`;

    if (progress < duration) {
      requestAnimationFrame(frame);
    } else {
      mario.style.bottom = `${originalY}px`;
      isJumping = false; // Mario ist zurück am Boden
      stopMario(); // Rückkehr zu der stehenden Mario-Grafik
    }
  }

  requestAnimationFrame(frame);
}

function moveMario(event) {
  if (isJumping) return; // Verhindert die Bewegung, während Mario springt

  let currentLeft = parseInt(window.getComputedStyle(mario).left, 10);

  switch (event.key) {
    case "ArrowRight":
      mario.style.left = `${currentLeft + 10}px`;
      imgMario.style.transform = "scale(1, 1)"; // Mario zeigt nach rechts
      if (!imgMario.src.includes("mario-walk.gif")) {
        imgMario.src = "./assets/mario-walk.gif";
      }
      break;
    case "ArrowLeft":
      mario.style.left = `${currentLeft - 10}px`;
      imgMario.style.transform = "scale(-1, 1)"; // Mario zeigt nach links
      if (!imgMario.src.includes("mario-walk.gif")) {
        imgMario.src = "./assets/mario-walk.gif";
      }
      break;
    case "ArrowUp":
      jumpMario();
      break;
  }
}

document.addEventListener("keydown", moveMario);
document.addEventListener("keyup", stopMario);

// // Wink Hand at Main Section

// // function frame() {
// //   if (/* test for finished */) {
// //     clearInterval(id);
// //   } else {
// //     /* code to change the element style */
// //   }
// // }

// let id = null;

// function myMove() {
//   const elem = document.getElementById("beweglichesBild");
//   let pos = 0;
//   let direction = 1; // Richtung: 1 für rechts, -1 für links

//   // Vorherige Intervalle löschen, falls vorhanden
//   clearInterval(id);

//   // Funktion, die bei jedem Intervallaufruf ausgeführt wird
//   function frame() {
//     // Prüft die Position und ändert die Richtung, wenn nötig
//     if (pos >= 150) {
//       direction = -1; // Bewegung umkehren
//     } else if (pos <= 0) {
//       direction = 1; // Bewegung umkehren
//     }

//     // Aktualisiert die Position basierend auf der Richtung
//     pos += direction;
//     elem.style.top = pos + "20 px"; // Korrektur: " 1 px" zu "px"
//     elem.style.left = pos + "px"; // Korrektur: " 2 px" zu "px"

//     // Beendet die Animation, wenn die Startposition erreicht ist
//     if (pos === 0 && direction === 1) {
//       clearInterval(id);
//     }
//   }

//   // Startet das Intervall, das die Funktion frame() in jedem Frame aufruft
//   id = setInterval(frame, 20); // Intervallzeit von 3ms auf 10ms erhöht für bessere Performance
// }

// // Fügt einen Event-Listener hinzu, der die Funktion myMove aufruft, wenn auf das Bild geklickt wird
// document.getElementById("beweglichesBild").addEventListener("click", myMove);
// When the user scrolls the page, execute myFunction
