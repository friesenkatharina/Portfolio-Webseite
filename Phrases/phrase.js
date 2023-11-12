// 1.
const citeElement = document.querySelector("cite");
console.log(citeElement);

// 2.

const parentElements = [];
let currentElement = citeElement;

while (currentElement.parentElement) {
  const parentName = currentElement.parentElement.nodeName.toLocaleLowerCase();

  parentElements.unshift(parentName);
  currentElement = currentElement.parentElements;
}
window.addEventListener("scroll", () => {
  document.querySelector("#Home").style.marginTop = `${window.scrollY}px`;
});

// mobile nav
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
