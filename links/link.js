export const menuLinks = {
    Osso: {
        titulo: "Ôssso",
        links: [
            {
                nome: "aggggggg",
                url: "https://www.google.com/",
                active: true
            },
            {
                nome: "dsajadaj",
                url: "https://www.google.com/",
                active: false
            },
            {
                nome: "tst",
                url: "https://www.google.com/",
                active: false
            }
        ]
    },
    test2: {
        titulo: "teste2",
        links: [
            {
                nome: "tets",
                url: "https://www.google.com/",
                active: false
            },
            {
                nome: "test",
                url: "https://www.google.com/",
                active: false
            }
        ]
    }
};

import { menuLinks } from './links.js';

export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
    console.log("carregando");
    
    menuContent.innerHTML = '';
    
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
            a.href = link.url;
            a.textContent = link.nome;
            a.className = 'menu-link';
            
            if (link.active) {
                a.classList.add('active');
            }
            
            li.appendChild(a);
            list.appendChild(li);
        });
        
        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}