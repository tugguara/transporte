export const menuLinks = {
    Onibusurbano: {
        titulo: "Ônibus Urbanos",
        links: [
            {
                nome: "L25 Jardim do Vale",
                url: "https://tugguara.github.io/transporte/l25%20zerbini%20copy/",
            },
            {
                nome: "L26 Adhemar de Barros",
                url: "https://tugguara.github.io/transporte/l26%20adhema/",
            },
            {
                nome: "L29 Adhemar de Barros",
                url: "https://claude.ai/chat/a9225805-ec8b-48d1-b8a8-b397b2671f88",
            },
            {
                nome: "L00 Vila Paraiba",
                url: "https://claude.ai/chat/a9225805-ec8b-48d1-b8a8-b397b2671f88",
            }
        ]
    },
    Van: {
        titulo: "Van",
        links: [
            {
                nome: "ALT10 JD DO VALE",
                url: "https://tugguara.github.io/transporte/",
            }
        ]
    },
    Emtu: {
        titulo: "EMTU",
        links: [
            {
                nome: "5312 Lorena x Guaratinguetá",
                url: "https://tugguara.github.io/transporte/",
            }
        ]
    }
};

export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
    // Pega a URL completa atual
    const currentUrl = window.location.href;
    
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
            // Usa exatamente a URL definida no objeto
            a.href = link.url;
            a.textContent = link.nome;
            a.className = 'menu-link';
            
            // Compara com a URL completa
            if (currentUrl === link.url) {
                a.classList.add('active');
                a.style.color = '#0066cc';
                a.style.fontWeight = 'bold';
            }
            
            li.appendChild(a);
            list.appendChild(li);
        });
        
        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}

document.addEventListener('DOMContentLoaded', populateMenu);