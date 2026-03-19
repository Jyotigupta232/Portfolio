// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // Initialize all features
    createParticles();
    initSmoothScroll();
    initNavbarScroll();
    initMobileMenu();
    initScrollAnimations();
    initCardEffects();
    initThemeToggle();
    initCustomCursor();
    initContactForm();
    initAdvancedAnimations();
});

// ===================================
// Custom Cursor with Glow Effect
// ===================================
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');
    
    if (!cursorDot || !cursorGlow) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move dot immediately with transform for better performance
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
    
    // Smooth glow following with delay
    function updateGlow() {
        glowX += (mouseX - glowX) * 0.2;
        glowY += (mouseY - glowY) * 0.2;
        
        cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;
        
        requestAnimationFrame(updateGlow);
    }
    updateGlow();
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorGlow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorGlow.style.opacity = '0.6';
    });
}

// ===================================
// Theme Toggle
// ===================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        // Save preference
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        
        // Animate toggle
        themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
        
        // Re-initialize Lucide icons after theme change
        setTimeout(() => {
            lucide.createIcons();
        }, 100);
    });
}

// ===================================
// Contact Form Handler
// ===================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const formStatus = document.getElementById('formStatus');
        const originalBtnText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i data-lucide="loader"></i> Sending...';
        submitBtn.disabled = true;
        lucide.createIcons();
        
        // Get form data
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            subject: form.querySelector('#subject').value,
            message: form.querySelector('#message').value
        };
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            formStatus.className = 'form-status success';
            formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            lucide.createIcons();
            
            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }, 2000);
        
        // Error handling example
        // formStatus.className = 'form-status error';
        // formStatus.textContent = '✗ Failed to send message. Please try again.';
    });
}

// ===================================
// Enhanced Particles
// ===================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;  // Reduced from 80 for cleaner look
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 30 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 25) + 's';
        
        // Subtle colors
        const colors = ['rgba(91, 141, 214, 0.3)', 'rgba(45, 212, 191, 0.3)', 'rgba(107, 95, 163, 0.3)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// ===================================
// Smooth Scroll
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.05)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }
        
        lastScroll = currentScroll;
    });
}

// ===================================
// Mobile Menu
// ===================================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.glass-effect, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// Enhanced Card Effects
// ===================================
function initCardEffects() {
    const cards = document.querySelectorAll('.glass-effect');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function(e) {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ===================================
// Advanced Animations
// ===================================
function initAdvancedAnimations() {
    // Active state for navigation links
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Skill tags animation
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #5b8dd6 0%, #6b5fa3 100%)';
            this.style.color = 'white';
            this.style.borderColor = 'transparent';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(91, 141, 214, 0.08)';
            this.style.color = 'var(--text-secondary)';
            this.style.borderColor = 'rgba(91, 141, 214, 0.2)';
        });
    });
    
    // Stagger animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Stagger animations for certificate cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
    
    // Ripple effect for buttons
    document.querySelectorAll('.btn, .contact-btn, .project-link, .submit-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Dynamic CSS for Ripple Effect
// ===================================
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn, .contact-btn, .project-link, .submit-btn {
        position: relative;
        overflow: hidden;
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(10, 14, 39, 0.98);
        padding: 2rem;
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);

// ===================================
// Typing Effect for Hero Text (Optional)
// ===================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===================================
// Console Message
// ===================================
console.log('%c🚀 Enhanced Portfolio by Helium AI', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c✨ Features: Theme Toggle, Custom Cursor, Contact Form, Advanced Animations', 'color: #764ba2; font-size: 14px;');

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScroll);