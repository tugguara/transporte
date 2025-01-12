export const menuLinks = {
    Onibusurbano: {
        titulo: "Ônibus Urbanos",
        links: [
            {
                nome: "L25 Jardim do Vale",
                url: "https://tugguara.github.io/transporte/l25%20zerbini%20copy/",
                active: false
            },
            {
                nome: "L26 Adhemar de Barros",
                url: "https://tugguara.github.io/transporte/l26%20adhema/",
                active: false
            },
            {
                nome: "L00 Vila Paraiba",
                url: "https://tugguara.github.io/transporte/",
                active: false
            }
        ]
    },
    Van: {
        titulo: "Van",
        links: [
            {
                nome: "ALT10 JD DO VALE",
                url: "https://tugguara.github.io/transporte/",
                active: false
            }
        ]
    },
    Emtu: {
        titulo: "EMTU",
        links: [
            {
                nome: "5312 Lorena x Guaratinguetá",
                url: "https://tugguara.github.io/transporte/",
                active: false
            }
        ]
    }
};

// Função para marcar o link ativo
export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
    const currentUrl = window.location.pathname; // Pega o caminho da URL
    const currentHash = window.location.hash; // Pega o hash da URL (se existir)
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

            // Verificar se a URL do link corresponde ao caminho atual (sem considerar o protocolo e domínio)
            const linkUrlPath = new URL(link.url).pathname; // Pega o caminho da URL do link
            if (currentUrl === linkUrlPath) {
                a.classList.add('active');
                // Ao clicar, adicionar o hash (#) na URL
                a.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.location.hash = ''; // Adiciona # na URL sem recarregar a página
                    a.classList.add('active');
                });
            }

            li.appendChild(a);
            list.appendChild(li);
        });

        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}
