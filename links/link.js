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
                nome: "L22 Nova Guará",
                url: "https://tugguara.github.io/transporte/l25%20zerbini/",
                active: false,
                warning: true // Adiciona flag para identificar que precisa de aviso
            },
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

export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
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
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            
            const a = document.createElement('a');
            a.textContent = link.nome;
            a.className = 'menu-link';
            
            if (link.warning) {
                // Para link com aviso
                a.style.cursor = 'pointer';
                a.onclick = (e) => {
                    e.preventDefault();
                    alert('Não disponível');
                };
                
                // Adiciona ícone de aviso
                const warningSpan = document.createElement('span');
                warningSpan.textContent = ' ⚠️'; // Emoji de aviso
                warningSpan.style.marginLeft = '5px';
                warningSpan.style.color = '#ffa500'; // Cor laranja
                li.appendChild(a);
                li.appendChild(warningSpan);
            } else {
                // Para links normais
                a.href = link.url;
                li.appendChild(a);
                
                if (currentUrl === link.url) {
                    a.classList.add('active');
                    a.addEventListener('click', (event) => {
                        event.preventDefault();
                        window.location.hash = '';
                        a.classList.add('active');
                    });
                }
            }
            
            list.appendChild(li);
        });
        
        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}

document.addEventListener('DOMContentLoaded', populateMenu);