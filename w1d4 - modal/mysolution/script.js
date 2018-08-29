"use strict";

let button = document.querySelector(".button");
let closeButton = document.querySelector("#closebutton");
let modalContainer = document.querySelector("#modal_container");

button.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);

function showModal() {
  console.log("Show modal");
  modalContainer.classList.add("reveal");
  modalContainer.classList.remove("hidden");
}

function hideModal() {
  console.log("Hide modal");
  modalContainer.classList.remove("reveal");
  modalContainer.classList.add("hidden");
}
