const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
let selectRating = "";
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", function () {
    selectRating = event.target.innerText || event.target.parentNode.innerText;
    removeActive();

    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
btnEl.addEventListener("click", function (e) {
  if (selectRating !== "") {
    containerEl.innerHTML = `
    
    <strong style="display: flex; justify-content: center; align-items: center;">  <img src = "https://cdn-icons-png.flaticon.com/512/4522/4522274.png " width= "20%" class= "thank"></strong>
    <br> <br>
   
    <strong style= "font-size:25px;"> Feedback :${selectRating} </strong>
    <p style= "font-size:20px;">We'll use your Feedback to improve our customer support </p>
    `;
  }
});
