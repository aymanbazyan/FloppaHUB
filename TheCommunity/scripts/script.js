"use strict";

/////////////////////////// chats messages
const acc00001 = {
  messagesDel: [],
  messagesRec: ["hello"],
};

////////////// remove default page

const users = document.querySelectorAll(".user");
const chat = document.querySelector(".master__chat");
const globalChat = document.querySelector(".master__chat__global");
const defaultText = document.querySelector(".master__chat__default");
const messages = document.querySelector(".master__chat__messages");

const removeDefault = function () {
  chat.classList.remove("default-background");
  defaultText.classList.add("hidden");
  globalChat.classList.remove("hidden");
  messages.classList.remove("hidden");
};

users.forEach((user) => user.addEventListener("click", removeDefault));

//////// send messages
const messagesBox = document.querySelector(".master__chat__messages-box");
const input = document.querySelector(".master__chat__global-input");
const inputSubmit = document.querySelector(".master__chat__global-submit");

// update older messages
const updateMessages = function () {
  const message = `
        <div class="master__chat__messages-received-box">
          <img src="content/pfp/pfp00001.png" alt="profile pic" />
          <li class="master__chat__messages message-1">
          ${acc00001.messagesRec}
          </li>
        </div>
 
    `;

  messagesBox.insertAdjacentHTML("beforeend", message);
};
updateMessages();

// send new messages
const sendMessage = function () {
  const date = new Date();
  const dateFormatted = new Intl.DateTimeFormat("en-GB").format(date);

  const message = `
  <li class="master__chat__messages message-2">
  ${input.value}
   <span>
   ${dateFormatted}:${date.getMinutes()}
   </span>
  </li>
    `;

  messagesBox.insertAdjacentHTML("beforeend", message);

  acc00001.messagesDel.push(input.value);
  input.value = "";
};

inputSubmit.addEventListener("click", () => {
  sendMessage();
});

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

///////// options
/*
// dark / light
const master = document.querySelector(".master");

const modeBtns = document.querySelectorAll("master__settings-setting-btn");
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");

const checkBtn = function () {
  if (darkBtn.checked) {
    master.style.backgroundColor = "#333";
    master.style.color = "#eee";
  }
};

modeBtns.forEach((btn) => {
  btn.addEventListener("click", checkBtn);
});
// background-color: #333;
// color: #eee;
*/
