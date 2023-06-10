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
 if (i> photos.length - 1){
  i=0
 }
  i++;
  document.querySelector("#pictures").src = photos[i]
  if (i < 0){
    i = photos.length-1
   }
})
buttonBack.addEventListener('click', ()=>{
  i--;

  document.querySelector("#pictures").src = photos[i]

})
