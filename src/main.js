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
