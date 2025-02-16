// Adiciona os estilos
const style = document.createElement('style');
style.textContent = `
    .menu-link.active {
        color: #0066cc !important;
        font-weight: bold;
    }
    
    .menu-item {
        position: relative;
        padding: 5px 0;
    }
`;
document.head.appendChild(style);

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
                warning: true // Adiciona flag para mostrar aviso
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