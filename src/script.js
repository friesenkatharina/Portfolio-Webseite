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

// About Section IMG*********************
// document.querySelector(".about__img").addEventListener("click", function () {
//   document.getElementById("lightbox-image").src =
//     "./ASSETS/GanzkörperansichtMe.jpg"; // Setzen Sie das Bild für die Lightbox
//   document.getElementById("lightbox-modal").style.display = "flex";
// });

document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    document.getElementById("lightbox-modal").style.display = "none";
  });

// Mobile NAV *********************
function initialize() {
  closeNav(); // Schließt den Side-Nav beim Laden der Seite
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
  let DemoElement = document.getElementById("demo");
  DemoElement.innerHTML = new Date().toLocaleString();
  DemoElement.style.fontSize = "30px";
}

// Fügen Sie diesen Code hinzu, um die Initialisierung beim Laden der Seite zu gewährleisten
document.addEventListener("DOMContentLoaded", initialize);

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

// ReadMoreButton in Project section***************************************

// IMG
document
  .getElementById("read-more-button-one")
  .addEventListener("click", function () {
    let imgSrc = document.querySelector(".card img").src;
    document.getElementsByClassName("img-container").src = imgSrc;
    document.getElementsByClassName("img-container").style.display = "flex";
  });

document
  .getElementById("read-more-button-two")
  .addEventListener("click", function () {
    let imgSrc = document.querySelector(".card img").src;
    document.getElementById("lightbox-image").src = imgSrc;
    document.getElementById("lightbox-modal").style.display = "flex";
  });

document
  .getElementById("read-more-button-three")
  .addEventListener("click", function () {
    let imgSrc = document.querySelector(".card img").src;
    document.getElementById("lightbox-image").src = imgSrc;
    document.getElementById("lightbox-modal").style.display = "flex";
  });

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
