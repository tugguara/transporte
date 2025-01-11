// Função para manipulação do menu
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");

// Função para exibir ou esconder o menu
menuButton.addEventListener("click", function () {
    sideMenu.classList.add("visible");
});

closeButton.addEventListener("click", function () {
    sideMenu.classList.remove("visible");
});

// Função para mostrar a mensagem com atraso
window.onload = function () {
    const message = document.getElementById('message');

    if (message) {
        // Mostrar a mensagem com transição
        message.classList.add('show');
        
        // Após 5 segundos, esconder a mensagem
        setTimeout(function () {
            message.classList.remove('show');
        }, 5000);
    }
};

export function populateMenu() {
    // Código para preencher o menu com os links
}
