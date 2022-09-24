"use strict";

const unreadMsgs = document.querySelectorAll(".notification-box.unread");
const readBtn = document.querySelector(".read-all");
const numberOfNotification = document.querySelector(".notification-num");

numberOfNotification.textContent = `${unreadMsgs.length}`;

const newUreadMsgs = [];

readBtn.addEventListener("click", function (e) {
  unreadMsgs.forEach((unread) => {
    unread.classList.remove("unread");
  });
  unreadMsgs.forEach((unread) => {
    if (unread.classList.contains("unread")) {
      newUread.push(unread);
    }
  });
  numberOfNotification.textContent = `${newUreadMsgs.length}`;
});
