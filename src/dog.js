// Sprite Animation Advance Methode
let playerState = "sit";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function (e) {
  // call back function
  playerState = e.target.value;
});

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvasWidth = (canvas.width = 1000);
const canvasHeight = (canvas.height = 1000);

const playerImage = new Image();
playerImage.src = "./ASSETS/pics/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523; // Gesamt 5230 px Höhe, dann 5230/10Reihen img = 523

let gameFrame = 0;
const staggerFrames = 5; // damit die Animation normal abgespielt wird und nicht zu schnell
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 7,
  },
  {
    name: "getHit",
    frames: 4,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});
// console.log(animationStates);

// let x = 0; ctx.fillRect(x,50,100,100); x++; move Animation

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].loc.length; //excessing SpriteAnimation 6 Frames counting from 1/5 = 0.2, 2/5=0.4, 3/5 =0.6
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  if (gameFrame % staggerFrames == 0) {
    // 17%5 =2
    if (frameX < 4) frameX++;
    else frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
