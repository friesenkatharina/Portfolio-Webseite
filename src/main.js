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




(function () {
  'use strict';
  window.addEventListener('load', function () {
    var canvas = document.getElementById('canvas');

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
      Var
    ********************/

    var ctx = canvas.getContext('2d');
    var X = canvas.width = window.innerWidth;
    var Y = canvas.height = window.innerHeight;
    var mouseX = X / 2;
    var mouseY = Y / 2;
    var shapes = [];
    var shapeNum = Y / 4;

    /********************
      Animation
    ********************/

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cb) {
        setTimeout(cb, 17);
      };

    /********************
      Shape
    ********************/
    
    function Shape(ctx, x, y, i) {
      this.ctx = ctx;
      this.init(x, y, i);
    }
    
    Shape.prototype.init = function(x, y, i) {
      this.x = x;
      this.y = y;
      this.i = i;
      this.r = 2;
      this.a = rand(0, 360);
      this.rad = this.a * Math.PI / 180;
      this.ga = Math.random() * Math.random() * Math.random();
      this.inA = Math.random();
      this.scaleX = 100 - i / 2;
      this.dist = shapeNum - i;
    };

    Shape.prototype.draw = function() {
      var ctx  = this.ctx;
      ctx.save();
      ctx.fillStyle = 'white';
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = this.ga;
      ctx.translate(Math.sin(this.rad) * this.dist + this.x, this.y);
      ctx.scale(this.scaleX, 1);
      ctx.translate(-Math.sin(this.rad) * this.dist - this.x, -this.y);
      ctx.beginPath();
      ctx.arc(Math.sin(this.rad) * this.dist + this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    Shape.prototype.updateParams = function() {
      this.a += this.inA;
      this.rad = this.a * Math.PI / 180;
    };

    Shape.prototype.render = function() {
      this.updateParams();
      this.draw();
    };
    
    for (var i = 0; i < shapeNum; i++) {
      var s = new Shape(ctx, X / 2, Y - i * 1, i);
      shapes.push(s);
    }

    /********************
      Moon
    ********************/
    
    var radius = 150;

    if (X < 768) {
      radius = 100;
    }

    function drawMoon() {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 100;
      ctx.arc(X / 2, Y / 3, radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    }
    
    /********************
      Kirakira
    ********************/

    var particleNum = 500;
    var particles = [];
    
    function Particle(ctx, x, y) {
      this.ctx = ctx;
      this.init(x, y);
    }
    
    Particle.prototype.init = function(x, y) {
      this.x = x;
      this.y = y;
      this.r = rand(5, 10);
      this.ga = Math.random() * Math.random() * Math.random() * Math.random();
      this.v = {
        x: 0,
        y: -Math.random() * Math.random()
      };
      this.l = rand(10, 50);
    };

    Particle.prototype.draw = function() {
      var ctx  = this.ctx;
      ctx.save();
      ctx.fillStyle = 'white';
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = this.ga;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    Particle.prototype.updateParams = function() {
      this.a += this.inA;
      this.rad = this.a * Math.PI / 180;
      this.l -= 0.1;
      if (this.l < 0) {
        this.init(rand(0, X), rand(Y - Y / 4, Y));
      }
    };

    Particle.prototype.updatePositon = function() {
      this.y += this.v.y;
    };

    Particle.prototype.render = function() {
      this.updatePositon();
      this.updateParams();
      this.draw();
    };
    
    for (var i = 0; i < particleNum; i++) {
      var p = new Particle(ctx, rand(0, X), rand(Y - Y / 4, Y));
      particles.push(p);
    }

    /********************
      Render
    ********************/
    
    function render() {
      ctx.clearRect(0, 0, X, Y);
      drawMoon();
      for (var i = 0; i < shapes.length; i++) {
        shapes[i].render(i);
      }
      for (var i = 0; i < particles.length; i++) {
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
      for (var i = 0; i < shapeNum; i++) {
        var s = new Shape(ctx, X / 2, Y - i * 1, i);
        shapes.push(s);
      }
    }

    window.addEventListener('resize', function() {
      onResize();
    });

  });