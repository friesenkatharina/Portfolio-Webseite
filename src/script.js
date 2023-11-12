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
document.querySelector(".about__img").addEventListener("click", function () {
  document.getElementById("lightbox-image").src = this.src; // Setzen Sie das Bild für die Lightbox
  document.getElementById("lightbox-modal").style.display = "flex";
});

document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    document.getElementById("lightbox-modal").style.display = "none";
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

// Mobile NAV *********************
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// read more

document
  .getElementById("read-more-button-one")
  .addEventListener("click", function () {
    var imgSrc = document.querySelector(".card img").src; // Erhalten Sie den Bild-Quellpfad
    document.getElementsByClassName("img-container").src = imgSrc; // Setzen Sie das Bild für die Lightbox
    document.getElementsByClassName("img-container").style.display = "flex";
  });

document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    document.getElementById("lightbox-modal").style.display = "none";
  });

document
  .getElementById("read-more-button-two")
  .addEventListener("click", function () {
    var imgSrc = document.querySelector(".card img").src; // Erhalten Sie den Bild-Quellpfad
    document.getElementById("lightbox-image").src = imgSrc; // Setzen Sie das Bild für die Lightbox
    document.getElementById("lightbox-modal").style.display = "flex";
  });

document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    document.getElementById("lightbox-modal").style.display = "none";
  });
document
  .getElementById("read-more-button-three")
  .addEventListener("click", function () {
    var imgSrc = document.querySelector(".card img").src; // Erhalten Sie den Bild-Quellpfad
    document.getElementById("lightbox-image").src = imgSrc; // Setzen Sie das Bild für die Lightbox
    document.getElementById("lightbox-modal").style.display = "flex";
  });

document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    document.getElementById("lightbox-modal").style.display = "none";
  });
