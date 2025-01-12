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
                nome: "L00 Vila Paraiba",
                url: "https://tugguara.github.io/transporte/",
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
    // Pega apenas o caminho da URL atual (depois do domínio)
    const currentPath = window.location.pathname;
    
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
            
            // Extrai o caminho da URL do link
            const linkPath = new URL(link.url).pathname;
            
            // Compara os caminhos
            if (currentPath.includes(linkPath) || linkPath.includes(currentPath)) {
                a.classList.add('active');
                // Adiciona o estilo azul diretamente
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

// Inicializa o menu quando a página carregar
document.addEventListener('DOMContentLoaded', populateMenu);