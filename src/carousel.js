const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function goToSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

// Hier können Sie Buttons oder Pfeile hinzufügen, um zwischen den Bildern zu wechseln
// Beispiel: Wenn Sie auf den rechten Pfeil klicken, rufen Sie goToSlide(currentIndex + 1) auf.

goToSlide(currentIndex); // Zeigt das erste Bild an

// Funktionen zum Navigieren zwischen den Bildern können hinzugefügt werden
