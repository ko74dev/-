document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    const buttons = document.querySelectorAll('.btn-open');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.service-card');
            const title = card.querySelector('h3').textContent;
            alert('Открытие материалов: ' + title + '\n\nЗдесь можно добавить модальное окно или переход на страницу с материалами.');
        });
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('Галерея: Здесь можно открыть полноразмерное изображение в модальном окне.');
        });
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const cards2 = document.querySelectorAll('.card');
    cards2.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
});