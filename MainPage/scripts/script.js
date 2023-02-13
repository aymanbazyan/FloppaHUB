"use strict";
const navBtn = document.querySelector(".nav");
const navIcon = document.querySelector(".nav__button");
const navMenu = document.querySelector(".menu");

navBtn.addEventListener("click", (event) => {
  navMenu.classList.toggle("hidden");
});
