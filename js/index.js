const button = document.getElementById("submit-btn");
const flipCard = document.getElementsByClassName("flip-card-inner")[0];
const ratingNumbers = [...document.getElementsByClassName("number")];
const ratingValue = document.getElementById("selected-rating");
let ratingTemp = 0;

ratingNumbers.forEach((ratingNumber) => {
  ratingNumber.addEventListener("click", () => {
    ratingNumbers.forEach((el) => el.classList.remove("number--active"));
    ratingNumber.classList.add("number--active");
    ratingTemp = ratingNumber.innerHTML * 1;
    ratingValue.innerHTML = `&nbsp;${ratingNumber.innerHTML}&nbsp;`;
  });
});

button.addEventListener("click", () => {
  if (ratingTemp > 0) {
    flipCard.classList.add("flip-card-inner-rotate");
  }
});
