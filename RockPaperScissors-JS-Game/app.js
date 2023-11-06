// first Store variable for using later

// 'I' unterstrich in der Variablen unterscheidet zw. normalen Variablen und DOM
// _span ist ein span tag in html

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Stein";
  if (letter === "p") return "Papier";
  return "Schere";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(1).sub();
  const smallCompWord = "comp".fontsize(1).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
    besiegt 
    ${convertToWord(computerChoice)}${smallCompWord}
   du gewinnst!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300); // 300 Millisekunden bis zum Entfernen des Effekts
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(1).sub();
  const smallCompWord = "comp".fontsize(1).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
      verliert gegen
      ${convertToWord(computerChoice)}${smallCompWord}
     du verlierst`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300); // 300 Millisekunden bis zum Entfernen des Effekts
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(1).sub();
  const smallCompWord = "comp".fontsize(1).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
       ist gleich
      ${convertToWord(computerChoice)}${smallCompWord}
    unentschieden!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300); // 300 Millisekunden bis zum Entfernen des Effekts
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  //   console.log("user choice =>" + userChoice);
  //   console.log("computer choice => " + computerChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}
main();

// IONIC FRAMEWORK FUnction => does not work

// async function presentAlert() {
//   const alert = document.createElement("ion-alert");
//   alert.header = "Alert";
//   alert.subHeader = "Important message";
//   alert.message = "This is an alert!";
//   alert.buttons = ["OK"];

//   document.body.appendChild(alert);
//   await alert.present();
// }
// import { alertController } from "@ionic/core";

// async function presentAlert() {
//   const alert = await alertController.create({
//     header: "Alert",
//     subHeader: "Important message",
//     message: "This is an alert!",
//     buttons: ["OK"],
//   });

//   return alert.present();
// }
// // Das "window" Objekt wird hier verwendet, um die Funktion "presentAlert"
// // global zugänglich zu machen, damit sie im "onclick" Ereignis aufgerufen werden kann.
// window.presentAlert = presentAlert;

// ALERT
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close-button")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  modal.style.alignItems = "center";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
};
