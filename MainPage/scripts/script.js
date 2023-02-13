"use strict";
const navBtn = document.querySelector(".nav");
const navIcon = document.querySelector(".nav__button");
const navMenu = document.querySelector(".menu");
const navItem = document.querySelectorAll(".menu__list-item");

const navIconBefore = window.getComputedStyle(navIcon, "::before");
const navIconAfter = window.getComputedStyle(navIcon, "::after");

navBtn.addEventListener("click", (event) => {
  // navMenu.classList.toggle("hidden");

  navIcon.classList.toggle("nav__button-clicked");

  navMenu.classList.toggle("translateX");
});

navItem.forEach((btn) => {
  btn.addEventListener("click", (Event) => {
    navMenu.classList.toggle("translateX");
    navIcon.classList.toggle("nav__button-clicked");
  });
});
