console.log("cars.js");
/* const student = {
  name: "Jonas",
  eyes: 2,
  img:
    "https://kea.dk/slir/w1536-c100x65/images/DA/Uddannelser/studeliv/studieliv-paa-kea-1.jpg",
};

//1. grab the template
const templ = document.querySelector("template").content;
//2. clone it
const clone = templ.cloneNode(true);
//3. change some content
clone.querySelector("h1").textContent = student.name;
clone.querySelector("p span").textContent = `Eyes: ${student.eyes}`;
clone.querySelector("img").src = student.img;
//4. Find the parent
const mainEl = document.querySelector("main");
//5. append it
mainEl.appendChild(clone); */

const car = {
  make: "Peugeot",
  model: "5008",
  price: 40000,
};
const template = document.querySelector("#carTemplate").content;
const clone = template.cloneNode(true);
clone.querySelector("h1").textContent = `${car.make} - ${car.model}`;
clone.querySelector(".price span").textContent = car.price;
document.querySelector("#cars").appendChild(clone);
