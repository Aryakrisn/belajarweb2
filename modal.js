var modal = document.querySelector(".modal-container");
var button = document.querySelector("button");
var btnClose = document.querySelector("span");
modal.style.display = "none";
if (button) {
  button.addEventListener("click", function () {
    modal.style.display = "flex";
  });
}
if (btnClose) {
  btnClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
}
