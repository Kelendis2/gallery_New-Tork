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
  "10.jpg",
];

let i = 0;

buttonNext.addEventListener('click', ()=>{
  i++;
  document.querySelector('#pictures').src = photos[i]

})
buttonBack.addEventListener('click', ()=>{
  i--;
  document.querySelector("#pictures").src = photos[i]

})
