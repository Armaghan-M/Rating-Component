let btn = document.querySelector(".btn");
let firstContainer = document.querySelector(".container");
let secondContainer = document.querySelector(".second-container");

btn.addEventListener("click", function () {
  firstContainer.style.display = "none";
  secondContainer.style.display = "flex";
});
