"use strict";

function displayElement(element) {
  console.log( element.textContent);
}

function listMethods(elementId) {
  let lis = elementId.querySelectorAll(" ul li ");
  console.log(lis);
  //   lis.forEach(displayElement);
  let h2 = elementId.querySelector("h2");
  console.log(h2.textContent);
  for (let i = 0; i < lis.length; i++) {
    displayElement(lis[i]);
  }
}
listMethods(info);
// listMethods("info");
// listMethods("newarray");

// TODO: Create listMethods function

// ----for myself-------//
//   for (let fruit of fruits) {
//     alert( fruit );
//   }
