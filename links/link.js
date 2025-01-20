export const menuLinks = {
    infos: {
        titulo: "Portal de Informações",
        links: [
            {
                nome: "MENU",
                url: "https://tugguara.github.io/transporte/",
                active: false
            },
            {
                nome: "INTEGRAÇÃO",
                url: "",
                active: false
            },
            {
                nome: "NOS AJUDE",
                url: "https://tugguara.github.io/transporte/informacao/nos%20ajude/",
                active: false
            }
        ]
    },
    Onibusurbano: {
        titulo: "Ônibus Urbanos",
        links: [
            {
                nome: "L25 Jardim do Vale",
                url: "https://tugguara.github.io/transporte/l25%20zerbini/",
                active: false
            },
            {
                nome: "L26 Adhemar de Barros",
                url: "https://tugguara.github.io/transporte/l26%20adhemar/",
                active: false
            }
        ]
    },
    Van: {
        titulo: "Van",
        links: [
            {
                nome: "ALT10 JD DO VALE",
                url: "https://tugguara.github.io/transporte/alt10/",
                active: false
            }
        ]
    },
    Emtu: {
        titulo: "EMTU",
        links: [
            {
                nome: "5312 Lorena x Guaratinguetá",
                url: "",
                active: false
            }
        ]
    }
};

// Função para marcar o link ativo
export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
    const currentUrl = window.location.href; // Obtém a URL atual da página
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

            // Marcar o link como ativo se a URL do link for igual à URL atual
            if (currentUrl === link.url) {
                a.classList.add('active');
                // Ao clicar, alterar a URL para incluir o '#'
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
    
    const fareNotice = document.createElement('div');
    fareNotice.className = 'fare-notice';
    fareNotice.style.textAlign = 'center';
    fareNotice.style.padding = '15px';
    fareNotice.style.marginTop = '20px';
    fareNotice.style.fontWeight = 'bold';
    fareNotice.style.lineHeight = '1.5'; // Add some spacing between lines
    fareNotice.innerHTML = 
        'Tarifa de Ônibus<br>' +
        'Vale transporte: R$6,00<br>' +
        'Passe comum: R$5,50<br>' +
        'Pix/dinheiro: R$5,50<br>' +
        'Passe escolar: R$2,75';
    menuContent.appendChild(fareNotice);
}
