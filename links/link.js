// Primeiro, adicione um data-page em cada página HTML
// Por exemplo: <body data-page="l25-jardim-do-vale">

export const menuLinks = {
    Onibusurbano: {
        titulo: "Ônibus Urbanos",
        links: [
            {
                nome: "L25 Jardim do Vale",
                url: "https://tugguara.github.io/transporte/l25%20zerbini%20copy/",
                pageId: "l25-jardim-do-vale"  // Identificador único para cada página
            },
            {
                nome: "L26 Adhemar de Barros",
                url: "https://tugguara.github.io/transporte/l26%20adhema/",
                pageId: "l26-adhemar"
            },
            {
                nome: "L00 Vila Paraiba",
                url: "https://tugguara.github.io/transporte/",
                pageId: "l00-vila-paraiba"
            }
        ]
    },
    Van: {
        titulo: "Van",
        links: [
            {
                nome: "ALT10 JD DO VALE",
                url: "https://tugguara.github.io/transporte/",
                pageId: "alt10-jd-vale"
            }
        ]
    },
    Emtu: {
        titulo: "EMTU",
        links: [
            {
                nome: "5312 Lorena x Guaratinguetá",
                url: "https://tugguara.github.io/transporte/",
                pageId: "5312-lorena-guara"
            }
        ]
    }
};

export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
    const currentPage = document.body.dataset.page; // Pega o identificador da página atual
    
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
            
            // Verifica se é a página atual
            if (link.pageId === currentPage) {
                a.classList.add('active');
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