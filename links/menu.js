import { menuLinks } from './link.js';

export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
    console.log("carregando");
    
    menuContent.innerHTML = '';
    
    const currentUrl = window.location.pathname;

    Object.values(menuLinks).forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'menu-section';
        
        const title = document.createElement('h2');
        title.textContent = section.titulo;
        title.className = 'menu-title';
        sectionDiv.appendChild(title);

        const list = document.createElement('ul');
        list.className = 'menu-list';
        
        section.links.forEach(link => {
            const li = document.createElement('li');
            li.className = 'menu-item';
            
            const a = document.createElement('a');
            a.textContent = link.nome;
            a.className = 'menu-link';

            // Verifica se é o L22 Nova Guará
            if (link.nome === "L22 Nova Guará") {
                // Remove o href para evitar navegação
                a.style.cursor = 'pointer';
                // Adiciona o evento de clique
                a.onclick = () => alert('Não disponível');
                
                // Cria o span de aviso
                const warningIcon = document.createElement('span');
                warningIcon.textContent = ' ⚠️';
                warningIcon.style.marginLeft = '5px';
                warningIcon.title = 'Linha não disponível';
                
                // Adiciona o link e o ícone ao li
                li.appendChild(a);
                li.appendChild(warningIcon);
            } else {
                // Para os outros links, mantém o comportamento normal
                a.href = link.url;
                
                try {
                    const linkUrlPath = new URL(link.url).pathname;
                    if (currentUrl === linkUrlPath) {
                        a.classList.add('active');
                        link.active = true;
                        
                        a.addEventListener('click', (event) => {
                            event.preventDefault();
                            history.pushState(null, null, `${link.url}#`);
                        });
                    } else {
                        link.active = false;
                    }
                } catch (e) {
                    console.error('URL inválida:', link.url);
                }
                
                li.appendChild(a);
            }
            
            list.appendChild(li);
        });
        
        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}

document.addEventListener('DOMContentLoaded', populateMenu);