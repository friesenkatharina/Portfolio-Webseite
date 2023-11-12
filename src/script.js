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
// Fügen Sie diesen Code hinzu, um die Initialisierung beim Laden der Seite zu gewährleisten
document.addEventListener("DOMContentLoaded", initialize);
// read more

document
  .getElementById("read-more-button-one")
  .addEventListener("click", function () {
    let imgSrc = document.querySelector(".card img").src; // Erhalten Sie den Bild-Quellpfad
    document.getElementsByClassName("img-container").src = imgSrc; // Setzen Sie das Bild für die Lightbox
    document.getElementsByClassName("img-container").style.display = "flex";
  });

document
  .getElementById("read-more-button-two")
  .addEventListener("click", function () {
    let imgSrc = document.querySelector(".card img").src; // Erhalten Sie den Bild-Quellpfad
    document.getElementById("lightbox-image").src = imgSrc; // Setzen Sie das Bild für die Lightbox
    document.getElementById("lightbox-modal").style.display = "flex";
  });

document
  .getElementById("read-more-button-three")
  .addEventListener("click", function () {
    let imgSrc = document.querySelector(".card img").src; // Erhalten Sie den Bild-Quellpfad
    document.getElementById("lightbox-image").src = imgSrc; // Setzen Sie das Bild für die Lightbox
    document.getElementById("lightbox-modal").style.display = "flex";
  });

// Moon River
(function () {
  "use strict";
  window.addEventListener("load", function () {
    let canvas = document.getElementById("canvas");

    if (!canvas || !canvas.getContext) {
      return false;
    }

    /********************
        Random Number
      ********************/

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /********************
        
      ********************/

    let ctx = canvas.getContext("2d");
    let X = (canvas.width = window.innerWidth);
    let Y = (canvas.height = window.innerHeight);
    let mouseX = X / 2;
    let mouseY = Y / 2;
    let shapes = [];
    let shapeNum = Y / 4;

    /********************
        Animation
      ********************/

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (cb) {
        setTimeout(cb, 2);
      };

    /********************
        Moon
      ********************/

    let radius = 180;

    if (X < 768) {
      radius = 100;
    }

    function drawMoon() {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "gold";
      ctx.shadowColor = "gold";
      ctx.shadowBlur = 450;
      ctx.arc(X / 2, Y / 2, radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    }

    /********************
        Kirakira
      ********************/

    let particleNum = 1500;
    let particles = [];

    function Particle(ctx, x, y) {
      this.ctx = ctx;
      this.init(x, y);
    }

    Particle.prototype.init = function (x, y) {
      this.x = x;
      this.y = y;
      this.r = rand(5, 10);
      this.ga = Math.random() * Math.random() * Math.random() * Math.random();
      this.v = {
        x: 0,
        y: -Math.random() * Math.random(),
      };
      this.l = rand(0, 50);
    };

    Particle.prototype.draw = function () {
      let ctx = this.ctx;
      ctx.save();
      ctx.fillStyle = "gold";
      ctx.globalCompositeOperation = "dark";
      ctx.globalAlpha = this.ga;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    Particle.prototype.updateParams = function () {
      this.a += this.inA;
      this.rad = (this.a * Math.PI) / 580;
      this.l -= 0.1;
      if (this.l < 0) {
        this.init(rand(0, X), rand(Y - Y / 4, Y));
      }
    };

    Particle.prototype.updatePositon = function () {
      this.y += this.v.y;
    };

    Particle.prototype.render = function () {
      this.updatePositon();
      this.updateParams();
      this.draw();
    };

    for (let i = 0; i < particleNum; i++) {
      let p = new Particle(ctx, rand(0, X), rand(Y - Y / 4, Y));
      particles.push(p);
    }

    /********************
        Render
      ********************/

    function render() {
      ctx.clearRect(0, 0, X, Y);
      drawMoon();
      for (let i = 1; i < shapes.length; i++) {
        shapes[i].render(i);
      }
      for (let i = 0; i < particles.length; i++) {
        particles[i].render(i);
      }
      requestAnimationFrame(render);
    }

    render();

    /********************
        Event
      ********************/

    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
      shapes = [];
      if (X < 768) {
        radius = 100;
      } else {
        radius = 150;
      }
      for (let i = 0; i < shapeNum; i++) {
        let s = new Shape(ctx, X / 2, Y - i * 1, i);
        shapes.push(s);
      }
    }

    window.addEventListener("resize", function () {
      onResize();
    });
  });
  // Author
  console.log("");
})();
