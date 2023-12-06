const buttonNext = document.querySelector("#next");
const buttonBack = document.querySelector("#back");
const photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

let i = 0;

buttonNext.addEventListener("click", () => {
  i++;
  if (i > photos.length - 1) {
    i = 0;
  }
  document.querySelector(".pictures").src = photos[i];
});
buttonBack.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = 8;
  }
  document.querySelector(".pictures").src = photos[i];
});
