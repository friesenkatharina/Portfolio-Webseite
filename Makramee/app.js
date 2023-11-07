// https://gsap.com/docs/v3/Installation

const navBtn = document.querySelector(".nav-btn");
const navOpen = document.querySelector(".nav-open");
const timeLine = gsap.timeline({ paused: true, reversed: true });

timeLine
  .to(".cover", {
    duration: 1,
    width: "60%",
    ease: "power2.out",
  })
  .to(
    "nav",
    {
      duration: 1,
      height: "100%",
      ease: "power2.out",
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function () {
        navOpen.style.pointerEvents = "auto";
        console.log("done");
      },
    }
  );

navBtn.addEventListener("click", (e) => {
  if (timeLine.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(timeLine);
});

// else statement
function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
