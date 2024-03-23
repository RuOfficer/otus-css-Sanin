let modal = document.getElementById("modal");
let btn = document.getElementById("openModal");
let close = document.getElementsByClassName("btn--color-grey")[0];
let submit = document.getElementsByClassName("btn--color-black");
let form = document.getElementById("form");
btn.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
};
submit.onclick = function () {
  modal.style.display = "block";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").ariaValueMax;
  let email = document.getElementById("email").ariaValueMax;
});
