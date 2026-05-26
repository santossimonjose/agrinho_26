// script.js - Agro Forte 2026

document.addEventListener('DOMContentLoaded', function() {

    // ===================== SMOOTH SCROLL =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================== MENU MOBILE (HAMBURGUER) =====================
    const nav = document.querySelector('nav');
    const ul = document.querySelector('nav ul');

    // Cria o botão hambúrguer
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.fontSize = '2rem';
    hamburger.style.cursor = 'pointer';
    hamburger.style.display = 'none';

    nav.appendChild(hamburger);

    // Responsivo
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            ul.style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            ul.style.display = 'flex';
        }
    }

    hamburger.addEventListener('click', () => {
        if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'flex';
            ul.style.flexDirection = 'column';
            ul.style.position = 'absolute';
            ul.style.top = '70px';
            ul.style.left = '0';
            ul.style.width = '100%';
            ul.style.background = '#2e7d32';
            ul.style.padding = '20px';
        } else {
            ul.style.display = 'none';
        }
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    // ===================== BOTÃO VOLTAR AO TOPO =====================
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '30px';
    backToTop.style.right = '30px';
    backToTop.style.width = '50px';
    backToTop.style.height = '50px';
    backToTop.style.borderRadius = '50%';
    backToTop.style.background = '#4caf50';
    backToTop.style.color = 'white';
    backToTop.style.fontSize = '1.5rem';
    backToTop.style.border = 'none';
    backToTop.style.cursor = 'pointer';
    backToTop.style.display = 'none';
    backToTop.style.zIndex = '1000';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===================== ANIMAÇÃO DAS CARDS =====================
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    console.log('✅ Script do Agrinho 2026 carregado com sucesso!');
});
