const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click",activeLink));

var screen_width = window.innerWidth;
document.getElementById("left_user").style.width = screen_width + "px";
















