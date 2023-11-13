// Key concepts covered: -getElementByID() -parseInt  -Math.sin  -getComputedStyle  -Math.PI -requestAnimationFrame -includes()  -frame()

// const mario = document.getElementById("mario");
// const imgMario = mario.querySelector("img");
// let isJumping = false;

// function stopMario() {
//   if (!isJumping) {
//     imgMario.src = "../Mario/assets/mario-stand.gif";
//   }
// }

// function jumpMario() {
//   if (isJumping)
//     // Verhindern, dass Mario im Sprung steuert

//     isJumping = true;
//   imgMario.src = "../Mario/assets/mario-stand.gif"; // Bild zu einem springenden Mario ändern
//   let start = null;
//   const jumpHeight = 100; // Die Höhe des Sprungs
//   const duration = 500; // Dauer des Sprungs in Millisekunden
//   const originalY = parseInt(window.getComputedStyle(mario).bottom, 10);

//   // Math.sin() um eine wellenförmige oder oszillierende Bewegung zu erzeugen, basierend auf dem Fortschritt (progress) eines Vorgangs im Verhältnis zur Gesamtdauer (duration) dieses Vorgangs.
//   function frame(timestamp) {
//     if (!start) start = timestamp;
//     const progress = timestamp - start;
//     const peak = Math.sin((progress / duration) * Math.PI); // Sinusförmige Bewegung für einen natürlichen Sprung
//     mario.style.bottom = `${originalY + peak * jumpHeight}px`;

//     if (progress < duration) {
//       requestAnimationFrame(frame);
//     } else {
//       mario.style.bottom = `${originalY}px`;
//       isJumping = false; // Mario ist zurück am Boden
//       stopMario(); // Rückkehr zu der stehenden Mario-Grafik
//     }
//   }

//   requestAnimationFrame(frame);
// }

// function moveMario(event) {
//   if (isJumping) return; // Verhindert die Bewegung, während Mario springt

//   let currentLeft = parseInt(window.getComputedStyle(mario).left, 10);

//   switch (event.key) {
//     case "ArrowRight":
//       mario.style.left = `${currentLeft + 10}px`;
//       imgMario.style.transform = "scale(1, 1)"; // Mario zeigt nach rechts
//       if (!imgMario.src.includes("mario-walk.gif")) {
//         imgMario.src = "./assets/mario-walk.gif";
//       }
//       break;
//     case "ArrowLeft":
//       mario.style.left = `${currentLeft - 10}px`;
//       imgMario.style.transform = "scale(-1, 1)"; // Mario zeigt nach links
//       if (!imgMario.src.includes("mario-walk.gif")) {
//         imgMario.src = "./assets/mario-walk.gif";
//       }
//       break;
//     case "ArrowUp":
//       jumpMario();
//       break;
//   }
// }

// document.addEventListener("keydown", moveMario);
// document.addEventListener("keyup", stopMario);
// *************************************************************************************
// *************************************************************************************
// Sprite Animation
// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");

// const canvasWidth = (canvas.width = 600);
// const canvasHeight = (canvas.height = 600);

// const playerImage = new Image();
// playerImage.src = "./assets/shadow_dog.png";
// const spriteWidth = 575;
// const spriteHeight = 523; // Gesamt 5230 px Höhe, dann 5230/10Reihen img = 523
// let frameX = 0;
// let frameY = 5;
// let gameFrame = 0;
// const staggerFrames = 5; // damit die Animation normal abgespielt wird und nicht zu schnell

// let x = 0; ctx.fillRect(x,50,100,100); x++; move Animation

// function animate() {
//   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// ctx.fillRect(100, 50, 100, 100);

// x-Achse, destination-X, destination-Y
// ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
// Img with position direktion
//   ctx.drawImage(
//     playerImage,
//     frameX * spriteWidth,
//     frameY * spriteHeight,
//     spriteWidth,
//     spriteHeight,
//     0,
//     0,
//     spriteWidth,
//     spriteHeight
//   );
//   if (gameFrame % staggerFrames == 0) {
//     // 17%5 =2
//     if (frameX < 4) frameX++;
//     else frameX = 0;
//   }
//   gameFrame++;
//   requestAnimationFrame(animate);
// }
// animate();

// Sprite Animation Advance Methode

// Background
const canVas = document.getElementById("canvas2");
const ctx2 = canVas.getContext("2d");
const CANVAS_WIDTH = (canVas.width = 800);
const CANVAS_HEIGHT = (canVas.height = 700);
let gameSpeed = 15;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "./assetslayer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./assets/backgroundLayers/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./assets/backgroundLayers/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./assets/backgroundLayers/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "./assets/backgroundLayers/layer-5.png";

let x = 0;
let x2 = 2400;

function animation() {
  ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx2.drawImage(backgroundLayer4, x, 0);
  ctx2.drawImage(backgroundLayer4, x2, 0);
  if (x < -2400) x = 0;
  else x -= gameSpeed;
  if (x2 < -2400) x = 0;
  else x2 -= gameSpeed;
  requestAnimationFrame(animate);
}
animate();

// DOG Animation
// let playerState = "sit";
// const dropdown = document.getElementById("animations");
// dropdown.addEventListener("change", function (e) {
//   // call back function
//   playerState = e.target.value;
// });

// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");
// const canvasWidth = (canvas.width = 600);
// const canvasHeight = (canvas.height = 600);

// const playerImage = new Image(); // gleich wie document.createElement("img")
// playerImage.src = "./assets/shadow_dog.png";
// const spriteWidth = 575;
// const spriteHeight = 523; // Gesamt 5230 px Höhe, dann 5230/10Reihen img = 523

// let gameFrame = 0;
// const staggerFrames = 5; // damit die Animation normal abgespielt wird und nicht zu schnell
// const spriteAnimations = [];
// const animationStates = [
//   {
//     name: "idle",
//     frames: 7,
//   },
//   {
//     name: "jump",
//     frames: 7,
//   },
//   {
//     name: "fall",
//     frames: 7,
//   },
//   {
//     name: "run",
//     frames: 9,
//   },
//   {
//     name: "dizzy",
//     frames: 11,
//   },
//   {
//     name: "sit",
//     frames: 5,
//   },
//   {
//     name: "roll",
//     frames: 7,
//   },
//   {
//     name: "bite",
//     frames: 7,
//   },
//   {
//     name: "ko",
//     frames: 7,
//   },
//   {
//     name: "getHit",
//     frames: 4,
//   },
// ];
// animationStates.forEach((state, index) => {
//   let frames = {
//     loc: [],
//   };
//   for (let j = 0; j < state.frames; j++) {
//     let positionX = j * spriteWidth;
//     let positionY = index * spriteHeight;
//     frames.loc.push({ x: positionX, y: positionY });
//   }
//   spriteAnimations[state.name] = frames;
// });
// // console.log(animationStates);

// // let x = 0; ctx.fillRect(x,50,100,100); x++; move Animation

// function animate() {
//   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//   let position =
//     Math.floor(gameFrame / staggerFrames) %
//     spriteAnimations[playerState].loc.length; //excessing SpriteAnimation 6 Frames counting from 1/5 = 0.2, 2/5=0.4, 3/5 =0.6
//   let frameX = spriteWidth * position;
//   let frameY = spriteAnimations[playerState].loc[position].y;

//   ctx.drawImage(
//     playerImage,
//     frameX,
//     frameY,
//     spriteWidth,
//     spriteHeight,
//     0,
//     0,
//     spriteWidth,
//     spriteHeight
//   );
//   if (gameFrame % staggerFrames == 0) {
//     // 17%5 =2
//     if (frameX < 4) frameX++;
//     else frameX = 0;
//   }
//   gameFrame++;
//   requestAnimationFrame(animate);
// }
// animate();
