// dark light switcher ******************
function toggleDarkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// calculator **********************
function appendOperation(operation) {
  document.getElementById("resultArea").innerHTML += operation;
}

function calculateResult() {
  let container = document.getElementById("resultArea");
  let result = eval(container.innerHTML);
  container.innerHTML = result;
}

// durch die .slice()-Methode wird die letzte Zahl wenn ich auf DEL klicke gelöscht
function deleteLast() {
  let container = document.getElementById("resultArea");
  if (container.innerHTML.endsWith("")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
  container.innerHTML = container.innerHTML.slice(0, -1);
}

document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    document.getElementById("lightbox-modal").style.display = "none";
  });

// Mobile NAV *********************
function initialize() {
  closeNav();
}
function openNav() {
  document.getElementById("mySidenav").style.width = "190px";
  document.getElementById("main").style.marginLeft = "190px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Date and Time
function displayDateAndChangeFontSize() {
  const displayElement = document.getElementById("displayArea");

  if (displayElement.style.display === "none") {
    const currentDateAndTime = new Date().toLocaleString();
    displayElement.innerHTML = currentDateAndTime;
    displayElement.style.display = "block";
    displayElement.style.fontSize = "30px";
  } else {
    displayElement.style.display = "none";
  }
}

function initialize() {
  document
    .getElementById("toggleButton")
    .addEventListener("click", toggleDisplayArea);
}

document.addEventListener("DOMContentLoaded", initialize);

// flying bee
document.addEventListener("DOMContentLoaded", function () {
  const beeContainer = document.querySelector(".bee-container");
  const speechBubble = document.querySelector(".speech-bubble");

  let flyingRight = true; // Startet mit dem Flug nach rechts

  // Funktion, um den Text der Sprechblase zu aktualisieren
  function updateSpeechBubble() {
    speechBubble.style.display = "block";
    if (flyingRight) {
      speechBubble.textContent = "🌺 🌸 🌺 🌸 ";
    } else {
      speechBubble.textContent = "🍯 🍯 🍯 ";
    }
  }

  updateSpeechBubble(); // Initialer Text

  // Interval, um die Richtung basierend auf der Animation zu ändern
  setInterval(() => {
    flyingRight = !flyingRight; // Wechselt die Richtung
    updateSpeechBubble(); // Aktualisiert den Text
  }, 35000); // Ändert die Richtung alle 35 Sekunden, basierend auf der Animationszeit
});

// Skills Nav ********************

function myFunction() {
  let txt;
  if (confirm("Content for this Page is in progress 🏖")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

// function runCode() CODE EDITOR****************************
function runCode() {
  const codeInput = document.getElementById("codeInput").value;
  try {
    const output = eval(codeInput);
    document.getElementById("output").textContent = output;
  } catch (e) {
    document.getElementById("output").textContent = "Error: " + e.message;
  }
}

function resetCode() {
  document.getElementById("codeInput").value = "";
  document.getElementById("output").textContent = "";
}

// Ball

const ball = document.querySelector(".ball");

ball.addEventListener("click", function () {
  this.style.animation = "none";
  setTimeout(() => {
    this.style.animation = "bounce-and-rotate 2s infinite ease";
  }, 10);
});

// footer
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// cursor

let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}
