let body = document.querySelector("body");
let modal = document.getElementById("modal");
let btn = document.getElementById("openModal");
let close = document.getElementsByClassName("btn--color-grey")[0];
let submit = document.getElementsByClassName("btn--color-black");

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    body.classList.add("modal-open");
  }
});
function openModal() {
  body.classList.add("modal-open");
}
function closeModal() {
  body.classList.remove("modal-open");
}

btn.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
};
