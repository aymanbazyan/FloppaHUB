"use strict";

const user = document.querySelectorAll(".user");
const chat = document.querySelector(".master__chat");
const defaultText = document.querySelector(".master__chat__default");

const removeDefault = function () {
  chat.classList.remove("default");
  defaultText.classList.add("hidden");
};

for (let i = 0; i < user.length; i++) {
  user[i].addEventListener("click", removeDefault);
}
