const hamburguer = document.getElementById("hamburguer");
const nav = document.querySelector("nav.item-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  nav.classList.toggle("active");
});
