"use strict";

let tweetlist = "https://kea-alt-del.dk/twitter/api/";
let template = document.querySelector("#tweetTemplate").content;
let parent = document.querySelector("#parent");

function getData(link) {
  fetch(link)
    .then(res => res.json())
    .then(show);
}
function show(json) {
  console.log(json);
  const myentries = Object.entries(json);
  const myArray = myentries[0];
  console.log(myArray);
  const mySarray = myArray[1];
  console.log(mySarray);

  mySarray.forEach(function(tweet) {
    let clone = template.cloneNode(true);
    let user = clone.querySelector("#user span");
    let text = clone.querySelector("#text");
    let date = clone.querySelector("#date span");
    user.textContent = tweet.user.name;
    date.textContent = tweet.created_at;
    text.textContent = tweet.text;
    parent.appendChild(clone);
  });
}
getData(tweetlist);
