// Key concepts covered: -getElementByID() -parseInt  -Math.sin  -getComputedStyle  -Math.PI -requestAnimationFrame -includes()  -frame()

const mario = document.getElementById("mario");
const imgMario = mario.querySelector("img");
let isJumping = false;

function stopMario() {
  if (!isJumping) {
    imgMario.src = "../Mario/assets/mario-stand.gif";
  }
}

function jumpMario() {
  if (isJumping)
    // Verhindern, dass Mario im Sprung steuert

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
