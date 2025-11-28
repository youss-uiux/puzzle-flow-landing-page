// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('email');
            const email = emailInput.value;
            
            if (email) {
                // Show success message
                const formGroup = contactForm.querySelector('.form-group');
                const originalContent = formGroup.innerHTML;
                
                formGroup.innerHTML = '<p style="color: #10b981; font-size: 1.125rem; padding: 1rem;">✓ Merci ! Nous vous contacterons bientôt à ' + escapeHtml(email) + '</p>';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    formGroup.innerHTML = originalContent;
                    emailInput.value = '';
                    // Re-attach event listener since we replaced the content
                    attachFormSubmit();
                }, 5000);
            }
        });
    }

    // Helper function to escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Function to re-attach form submit handler
    function attachFormSubmit() {
        const newForm = document.getElementById('contactForm');
        if (newForm) {
            newForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = document.getElementById('email');
                const email = emailInput.value;
                
                if (email) {
                    const formGroup = newForm.querySelector('.form-group');
                    formGroup.innerHTML = '<p style="color: #10b981; font-size: 1.125rem; padding: 1rem;">✓ Merci ! Nous vous contacterons bientôt à ' + escapeHtml(email) + '</p>';
                }
            });
        }
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .step, .benefits-list li').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
