const main = document.querySelector("main");

const msg = "HAPPY BIRTHDAY";
const colors = ["red", "blue", "green", "yellow", "#03045e", "lightblue"];
const speed = 500;
const btn = document.querySelector("div");

const random = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

for (let i = 0; i < msg.length; i++) {
  const span = document.createElement("span");
  main.appendChild(span);
  span.innerText = msg[i];
  setInterval(() => {
    span.style.color = random();
  }, speed);
}

btn.addEventListener("click", () => {
  window.location = "https://youtu.be/IlbsCYr59DU";
});

//Legacy code

// const randomLetColor = function (letter) {};
// const svg = document.getElementsByClassName("logo");
// console.log(svg);
// const colors = ["red", "blue", "green", "yellow", "#03045e"];

// function click() {
//   const rando = () => {
//     return colors[Math.floor(Math.random() * colors.length)];
//   };
//   document.documentElement.style.cssText = `--ellipse:${rando()};
//   --rectangle:${rando()};`;
//   console.log(1);
// }
