let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => item.classList.remove("Active"));
    this.classList.add("Active");
}
list.forEach((item) => item.addEventListener("click", activeLink));