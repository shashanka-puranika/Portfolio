// Portfolio JavaScript
class Portfolio {
    constructor() {
        this.initTheme();
        this.initNavigation();
        this.initAnimations();
        this.initContactForm();
        this.initScrollEffects();
    }

    // Theme Management
    initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('.theme-icon');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Get saved theme or use system preference
        let currentTheme = this.getStoredTheme() || (prefersDark ? 'dark' : 'light');
        this.applyTheme(currentTheme);
        this.updateThemeIcon(themeIcon, currentTheme);

        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.applyTheme(currentTheme);
            this.updateThemeIcon(themeIcon, currentTheme);
            this.saveTheme(currentTheme);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                currentTheme = e.matches ? 'dark' : 'light';
                this.applyTheme(currentTheme);
                this.updateThemeIcon(themeIcon, currentTheme);
            }
        });
    }

    getStoredTheme() {
        try {
            // Use a simple variable instead of localStorage for sandboxed environment
            return window.portfolioTheme || null;
        } catch (e) {
            return null;
        }
    }

    saveTheme(theme) {
        try {
            // Use a simple variable instead of localStorage for sandboxed environment
            window.portfolioTheme = theme;
        } catch (e) {
            // Silently fail if storage is not available
        }
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    updateThemeIcon(icon, theme) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Navigation
    initNavigation() {
        const navbar = document.getElementById('navbar');
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Scroll effect for navbar
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', this.throttle(handleScroll, 16));

        // Mobile menu toggle
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Smooth scroll to sections
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Scroll Animations
    initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with data-animate attribute
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }

    // Contact Form
    initContactForm() {
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            try {
                // Simulate form submission (replace with actual endpoint)
                await this.simulateFormSubmission(data);
                
                // Show success message
                this.showNotification('Message sent successfully! Thank you for reaching out.', 'success');
                form.reset();
            } catch (error) {
                // Show error message
                this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            } finally {
                // Reset button state
                btnText.classList.remove('hidden');
                btnLoading.classList.add('hidden');
                submitBtn.disabled = false;
            }
        });
    }

    // Simulate form submission (replace with actual implementation)
    simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate successful submission
                console.log('Form data:', data);
                resolve();
            }, 1500);
        });
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close">&times;</button>
            </div>
        `;

        // Add styles for notification
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--glass-bg);
                backdrop-filter: var(--glass-backdrop);
                border: 1px solid var(--glass-border);
                border-radius: var(--radius-lg);
                padding: var(--space-16) var(--space-20);
                box-shadow: var(--shadow-lg);
                z-index: 10000;
                transform: translateX(400px);
                transition: transform var(--duration-normal) var(--ease-standard);
                max-width: 400px;
            }
            .notification--success {
                border-color: rgba(34, 197, 94, 0.3);
            }
            .notification--error {
                border-color: rgba(239, 68, 68, 0.3);
            }
            .notification__content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: var(--space-12);
            }
            .notification__message {
                color: var(--color-text);
                font-size: var(--font-size-sm);
            }
            .notification__close {
                background: none;
                border: none;
                color: var(--color-text-secondary);
                cursor: pointer;
                font-size: var(--font-size-lg);
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--radius-base);
                transition: all var(--duration-fast) var(--ease-standard);
            }
            .notification__close:hover {
                background: var(--color-secondary);
                color: var(--color-text);
            }
        `;

        if (!document.querySelector('#notification-styles')) {
            style.id = 'notification-styles';
            document.head.appendChild(style);
        }

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        // Auto remove after 5 seconds
        const autoRemove = setTimeout(() => {
            this.removeNotification(notification);
        }, 5000);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoRemove);
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Scroll Effects
    initScrollEffects() {
        const heroSection = document.querySelector('.hero');
        const particles = document.querySelectorAll('.particle');

        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (heroSection && scrolled < window.innerHeight) {
                particles.forEach((particle, index) => {
                    const speed = (index + 1) * 0.1;
                    particle.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
                });
            }
        };

        window.addEventListener('scroll', this.throttle(handleParallax, 16));
    }

    // Utility function for throttling
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Performance optimization: Preload critical resources
function preloadResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    preloadResources();
    new Portfolio();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.classList.add('page-hidden');
    } else {
        // Resume animations when page becomes visible
        document.body.classList.remove('page-hidden');
    }
});

// Add CSS for page visibility optimization
const visibilityStyle = document.createElement('style');
visibilityStyle.textContent = `
    .page-hidden * {
        animation-play-state: paused !important;
    }
`;
document.head.appendChild(visibilityStyle);

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Portfolio;
}