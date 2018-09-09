const lis = document.querySelectorAll("li");

function checkReview(i) {
  const text = i;
  const rev = text.querySelector("span");
  const review = rev.textContent;

  console.log(review);
  if (review < 5) {
    i.remove();
  }
}

lis.forEach(checkReview);

// function displayDataBar(item, index) {
//   item.style.height = dataArray[index] + "px";
// }
