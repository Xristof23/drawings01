const prevButton = document.querySelector('[data-js="draw-button"]');
prevButton.addEventListener("click", () => {
  console.log("Go to previous question");
});

const bookmarkButton = document.querySelector('[data-js="bm-button"]');
bookmarkButton.addEventListener("click", () => {
  console.log("Bookmark question");
});

const nextButton = document.querySelector('[data-js="next-button"]');
nextButton.addEventListener("click", () => {
  document.getElementById("question01").style.display = "none";
  document.getElementById("question02").style.display = "block";
  console.log("Go to next question");
});
