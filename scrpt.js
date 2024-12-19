function toggleDetails(element) {
    // Seleciona o próximo elemento (o texto escondido)
    const details = element.nextElementSibling;

    // Alterna entre mostrar e esconder
    if (details.style.display === "block") {
        details.style.display = "none";
        element.innerHTML = "&#9660;"; // Seta para baixo
    } else {
        details.style.display = "block";
        element.innerHTML = "&#9650;"; // Seta para cima
    }
}

function toggleDetails(row) {
    // Seleciona o elemento que contém os detalhes
    const details = row.querySelector('.details');
    const arrow = row.querySelector('.arrow');

    // Alterna entre mostrar e esconder os detalhes
    if (details.style.display === "block") {
        details.style.display = "none";
        arrow.innerHTML = "&#9660;"; // Seta para baixo
    } else {
        details.style.display = "block";
        arrow.innerHTML = "&#9650;"; // Seta para cima
    }
}

function toggleDetails(row) {
    const details = row.querySelector('.details');
    const arrow = row.querySelector('.arrow');

    if (details.classList.contains('open')) {
        // Fechar: transição suave para 0
        details.style.height = details.scrollHeight + "px"; // Define a altura atual
        setTimeout(() => {
            details.style.height = "0"; // Anima a altura até 0
        }, 1); // Pequeno atraso para ativar a transição
        details.addEventListener('transitionend', () => {
            details.classList.remove('open'); // Remove a classe após a transição
        }, { once: true }); // Garante que o evento só dispare uma vez
        arrow.classList.remove('rotate'); // Gira a seta para baixo
    } else {
        // Abrir: transição suave para a altura total
        details.style.height = "0"; // Garante que a altura inicial é 0
        details.classList.add('open'); // Adiciona a classe "open"
        setTimeout(() => {
            details.style.height = details.scrollHeight + "px"; // Ajusta a altura do conteúdo
        }, 1); // Pequeno atraso para garantir a transição
        arrow.classList.add('rotate'); // Gira a seta para cima
    }
}

window.onload = function() {
    const message = document.getElementById('message');
    
    // Mostra a mensagem
    message.classList.add('show');
    
    // Depois de 5 segundos, esconde a mensagem
    setTimeout(function() {
        message.classList.remove('show');
    }, 5000); // 5000ms = 5 segundos
};
