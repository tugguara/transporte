import { menuLinks } from './link.js';  // Agora você importa corretamente

export function populateMenu() {
    const menuContent = document.getElementById('menu-content'); 
    console.log("carregando");

    menuContent.innerHTML = '';  // Limpa o conteúdo atual do menu
    
    // Obter a URL atual para saber em qual página estamos
    const currentUrl = window.location.pathname;  // Use pathname para comparar apenas o caminho da URL

    Object.values(menuLinks).forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'menu-section';
        
        const title = document.createElement('h2');
        title.textContent = section.titulo;
        title.className = 'menu-title';
        sectionDiv.appendChild(title);

        const list = document.createElement('ul');
        list.className = 'menu-list';
        
        // Iterando pelos links da seção
        section.links.forEach(link => {
            const li = document.createElement('li');
            li.className = 'menu-item';
            
            const a = document.createElement('a');
            a.href = link.url;  // Usando a URL do link
            a.textContent = link.nome;
            a.className = 'menu-link';
            
            // Verifica se o link atual corresponde à URL da página
            const linkUrlPath = new URL(link.url).pathname; // Obtém o caminho da URL do link
            if (currentUrl === linkUrlPath) {
                a.classList.add('active');
                link.active = true;
            } else {
                link.active = false;
            }

            // Impede o recarregamento se o link for o ativo
            a.addEventListener('click', (event) => {
                if (link.active) {
                    event.preventDefault();  // Impede o comportamento padrão do link (recarregar a página)

                    // Atualiza a URL para incluir o hash (#) sem recarregar a página
                    history.pushState(null, null, `${link.url}#`);
                }
            });

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
