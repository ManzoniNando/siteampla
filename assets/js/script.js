/* --- 1. Menu Mobile (Abrir/Fechar) --- */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Fechar menu ao clicar em um link (mobile)
const navLink = document.querySelectorAll('.nav-list a');
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* --- 2. Dark/Light Mode --- */
const themeButton = document.getElementById('theme-button');
const iconSun = document.querySelector('.icon-sun');
const iconMoon = document.querySelector('.icon-moon');
const darkTheme = 'dark-mode';

// Verificar se o usuário já escolheu um tema antes
const selectedTheme = localStorage.getItem('selected-theme');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Aplica o tema salvo se existir
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    toggleIcons(selectedTheme === 'dark');
}

// Função para alternar ícones
function toggleIcons(isDark) {
    if(isDark) {
        iconSun.style.display = 'block'; // Mostra Sol
        iconMoon.style.display = 'none'; // Esconde Lua
    } else {
        iconSun.style.display = 'none'; // Esconde Sol
        iconMoon.style.display = 'block'; // Mostra Lua
    }
}

themeButton.addEventListener('click', () => {
    // Adiciona ou remove a classe dark-mode
    document.body.classList.toggle(darkTheme);
    const isDark = document.body.classList.contains(darkTheme);
    
    // Troca os ícones
    toggleIcons(isDark);

    // Salva a escolha no navegador
    localStorage.setItem('selected-theme', getCurrentTheme());
});

/* --- 3. Animação ao Scroll (Fade In) --- */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Dispara quando 10% do elemento estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-element');
            observer.unobserve(entry.target); // Para de observar após animar
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));