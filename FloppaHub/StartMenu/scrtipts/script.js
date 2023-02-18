"use strict";

const left = document.querySelector(".hero__left");
const right = document.querySelector(".hero__right");

const leftBox = document.querySelector(".hero__left-flexbox");
const rightBox = document.querySelector(".hero__right-flexbox");

left.addEventListener("mouseover", (event) => {
  leftBox.classList.remove("hidden");
});

right.addEventListener("mouseover", (event) => {
  rightBox.classList.remove("hidden");
});

left.addEventListener("mouseout", (event) => {
  leftBox.classList.add("hidden");
});

right.addEventListener("mouseout", (event) => {
  rightBox.classList.add("hidden");
});
