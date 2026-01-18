/* --- Menu Mobile --- */
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

/* --- Dark Mode Toggle --- */
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Checar preferência salva
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    // Troca ícone
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

/* --- Animação Scroll (Intersection Observer) --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.hidden-element').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});