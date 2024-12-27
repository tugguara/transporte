const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");

// Abrir o menu ao clicar no botão "hambúrguer"
menuButton.addEventListener("click", function () {
    sideMenu.classList.add("visible");
});

// Fechar o menu ao clicar no botão "X"
closeButton.addEventListener("click", function () {
    sideMenu.classList.remove("visible");
});
