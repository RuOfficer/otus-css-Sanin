let modal = document.getElementById("modal");
let btn = document.getElementById("openModal");
let close = document.getElementsByClassName("btn--btnClose")[0];
let form = document.getElementById("form");
btn.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
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
