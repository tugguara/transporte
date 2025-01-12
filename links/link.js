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

export function populateMenu() {
    const menuContent = document.getElementById('menu-content');
    const currentUrl = window.location.href; // Get the full current URL
    
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
            
            // Compare the cleaned URLs to handle trailing slashes and encoding differences
            const cleanCurrentUrl = cleanUrl(currentUrl);
            const cleanLinkUrl = cleanUrl(link.url);
            
            if (cleanCurrentUrl === cleanLinkUrl) {
                a.classList.add('active');
                link.active = true;
            }
            
            li.appendChild(a);
            list.appendChild(li);
        });
        
        sectionDiv.appendChild(list);
        menuContent.appendChild(sectionDiv);
    });
}

// Helper function to clean URLs for comparison
function cleanUrl(url) {
    try {
        const parsed = new URL(url);
        // Remove trailing slashes and decode the pathname
        return decodeURIComponent(parsed.pathname.replace(/\/+$/, ''))
            .toLowerCase() // Make comparison case-insensitive
            .replace(/\s+/g, ''); // Remove whitespace
    } catch (e) {
        console.error('Invalid URL:', url);
        return '';
    }
}

// Call populateMenu when the page loads
document.addEventListener('DOMContentLoaded', populateMenu);

// Update active state when hash changes
window.addEventListener('hashchange', populateMenu);