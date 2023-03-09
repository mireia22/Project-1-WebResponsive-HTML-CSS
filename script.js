const toggleBtn = document.querySelector(".burgerbtn");
const dropDownMenu = document.querySelector(".dropdown-menu");
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};
