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
// slider IMG

const slider = document.querySelector(".slider input");
const dragLine = document.querySelector(".slider input");
slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
};
