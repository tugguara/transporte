import { menuLinks } from './links.js';

function preencherMenu() {
    const menu = document.getElementById('side-menu');
    
    // Limpa o conteúdo atual do menu, mantendo o botão de fechar
    const closeButton = menu.querySelector('#close-menu');
    menu.innerHTML = '';
    menu.appendChild(closeButton);

    // Preenche o menu com os links do arquivo links.js
    Object.values(menuLinks).forEach(secao => {
        // Cria o título da seção
        const titulo = document.createElement('h2');
        titulo.textContent = secao.titulo;
        menu.appendChild(titulo);

        // Cria a lista de links
        const lista = document.createElement('ul');
        secao.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.nome;
            if (link.active) {
                a.classList.add('active');
            }
            li.appendChild(a);
            lista.appendChild(li);
        });
        menu.appendChild(lista);
    });
}

// Inicializa o menu quando o documento carregar
document.addEventListener('DOMContentLoaded', preencherMenu);