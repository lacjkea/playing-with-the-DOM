const btn = document.querySelector("button");
btn.addEventListener("click", clicked);

function clicked() {
  console.log("clicked");
  const header = document.querySelector("h2");
  header.textContent = "Hello";
  header.classList.toggle("highlighted");
}

const addEl = document.querySelector("#add");
addEl.addEventListener("click", addClicked);

function addClicked() {
  console.log("addClicked");
  const myNewEl = document.createElement("h1");
  myNewEl.textContent = "great";
  const mainEl = document.querySelector("main");
  mainEl.appendChild(myNewEl);
}
