const container = document.querySelector(".container");
const acomodation = document.querySelector(".acomodation");
const resturants = document.querySelector(".resturants");
const spa = document.querySelector(".spa");
const wedings = document.querySelector(".wedings");
const services = document.querySelector(".services");

container.addEventListener("click", function () {
  acomodation.style.transitionDuration = "1s";
  resturants.style.transitionDuration = "1s";
  spa.style.transitionDuration = "1s";
  wedings.style.transitionDuration = "1s";
  services.style.transitionDuration = "1s";
});

acomodation.addEventListener("click", function () {
  resturants.style.left = "60%";
  spa.style.left = "70%";
  wedings.style.left = "80%";
  services.style.left = "90%";
});

resturants.addEventListener("click", function () {
  resturants.style.left = "10%";
  spa.style.left = "70%";
  wedings.style.left = "80%";
  services.style.left = "90%";
});

spa.addEventListener("click", function () {
  resturants.style.left = "10%";
  spa.style.left = "20%";
  wedings.style.left = "80%";
  services.style.left = "90%";
});

wedings.addEventListener("click", function () {
  resturants.style.left = "10%";
  spa.style.left = "20%";
  wedings.style.left = "30%";
  services.style.left = "90%";
});

services.addEventListener("click", function () {
  resturants.style.left = "10%";
  spa.style.left = "20%";
  wedings.style.left = "30%";
  services.style.left = "40%";
});
