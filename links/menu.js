import { menuLinks } from './link.js';  // Agora você importa corretamente

export function populateMenu() {
    const menuContent = document.getElementById('menu-content'); 
    console.log("carregando");
    
    menuContent.innerHTML = '';  // Limpa o conteúdo atual do menu
    
    // Obter a URL atual para saber em qual página estamos
    const currentUrl = window.location.href;
    
    Object.values(menuLinks).forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'menu-section';
        
        const title = document.createElement('h2');
        title.textContent = section.titulo;
        title.className = 'menu-title';
        sectionDiv.appendChild(title);

        const list = document.createElement('ul');
        list.className = 'menu-list';
        
        // Iterando pelos links da seção
        section.links.forEach(link => {
            const li = document.createElement('li');
            li.className = 'menu-item';
            
            const a = document.createElement('a');
            a.href = link.url;  // Usando a URL do link
            a.textContent = link.nome;
            a.className = 'menu-link';
            
            // Verifica se o link é o ativo e marca como tal
            // Verifica se o link atual corresponde à URL da página
            if (currentUrl.includes(link.url)) {
                a.classList.add('active');
                link.active = true;
            } else {
                link.active = false;
            }

            // Impede o recarregamento se o link for o ativo
            a.addEventListener('click', (event) => {
                if (link.active) {
                    event.preventDefault();  // Impede o comportamento padrão do link (recarregar a página)

                    // Atualiza a URL para incluir o hash (#) sem recarregar a página
                    history.pushState(null, null, '#');
                }
            });

            li.appendChild(a);
            list.appendChild(li);
        });
        
        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}
