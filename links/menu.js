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
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            
            const a = document.createElement('a');
            a.textContent = link.nome;
            a.className = 'menu-link';

            // Tratamento especial para o link com warning
            if (link.warning) {
                a.style.cursor = 'pointer';
                a.onclick = (e) => {
                    e.preventDefault();
                    alert('Não disponível');
                };
                
                const warningSpan = document.createElement('span');
                warningSpan.textContent = ' ⚠️';
                warningSpan.style.marginLeft = '5px';
                warningSpan.style.color = '#ffa500';
                li.appendChild(a);
                li.appendChild(warningSpan);
            } else {
                a.href = link.url;
                
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
                
                li.appendChild(a);
            }
            
            list.appendChild(li);
        });
        
        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}

document.addEventListener('DOMContentLoaded', populateMenu);