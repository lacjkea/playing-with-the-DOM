const btnEl = document.querySelector("button");
btnEl.addEventListener("click", clicked);

function clicked() {
  const myTemplate = document.querySelector("template").content;
  console.log(myTemplate);
  const clone = myTemplate.cloneNode(true);
  clone.querySelector("h2").textContent = "Break time";
  const mainEl = document.querySelector("main");
  mainEl.appendChild(clone);
}
