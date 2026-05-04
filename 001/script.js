// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation effects
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenBottom = window.innerHeight;
        
        if (sectionTop < screenBottom) {
            section.classList.add('visible');
        }
    });
});

// Initialize gallery items with animation
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add text to gallery items in case images are missing
    galleryItems.forEach((item, index) => {
        const sectionTitle = item.closest('.section').querySelector('h2').textContent;
        const galleryType = sectionTitle.includes('Педагогическая') ? 'teaching' : 
                           sectionTitle.includes('ИТ-компетенции') ? 'comp' : 'service';
        
        // Create text content if image is missing
        const img = item.querySelector('img');
        if (!img || !img.complete || (img.naturalWidth === 0 && img.naturalHeight === 0)) {
            const textContent = document.createElement('span');
            textContent.textContent = `${sectionTitle.charAt(0)}${index + 1}`;
            textContent.style.textAlign = 'center';
            textContent.style.padding = '10px';
            item.innerHTML = '';
            item.appendChild(textContent);
        }
        
        item.style.opacity = '0';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease`;
        
        setTimeout(() => {
            item.style.opacity = '1';
        }, 500 + (index * 100));
    });
    
    // Add animation to aspect cards
    const aspectCards = document.querySelectorAll('.aspect-card');
    
    aspectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 50));
    });
    
    // Add particle effect to background
    createFloatingParticles();
    
    // Make sure sections are visible on load if they are in viewport
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top <= window.innerHeight * 0.75) {
            section.classList.add('visible');
        }
    });
});

// Create floating particles for high-tech effect
function createFloatingParticles() {
    const body = document.body;
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Random gradient color
        const colors = [
            'radial-gradient(circle, rgba(161,196,253,0.8) 0%, rgba(194,233,251,0.5) 100%)',
            'radial-gradient(circle, rgba(123,104,238,0.8) 0%, rgba(155,89,182,0.5) 100%)',
            'radial-gradient(circle, rgba(92,169,221,0.8) 0%, rgba(90,193,142,0.5) 100%)'
        ];
        const colorIndex = Math.floor(Math.random() * colors.length);
        particle.style.background = colors[colorIndex];
        
        body.appendChild(particle);
    }
}

// Add active state to navigation when scrolling to sections
window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add dynamic copyright year
document.querySelector('.copyright').innerHTML = `&copy; ${new Date().getFullYear()} Иван Петров. Все права защищены.`;

// Handle image loading errors by showing placeholder text
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            const parent = this.parentElement;
            const altText = this.alt || 'Изображение';
            
            // Remove the broken image
            this.remove();
            
            // Add placeholder text
            const placeholder = document.createElement('span');
            placeholder.textContent = altText;
            placeholder.style.display = 'flex';
            placeholder.style.justifyContent = 'center';
            placeholder.style.alignItems = 'center';
            placeholder.style.height = '100%';
            placeholder.style.padding = '10px';
            placeholder.style.textAlign = 'center';
            
            parent.appendChild(placeholder);
        });
    });
});