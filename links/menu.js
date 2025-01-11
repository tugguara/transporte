export function initializeMenu() {
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    const closeButton = document.getElementById('close-menu');

    menuButton.addEventListener('click', () => {
        sideMenu.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        sideMenu.classList.add('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
            sideMenu.classList.add('hidden');
        }
    });
}