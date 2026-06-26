document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if (mobileMenuBtn && mobileNavOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileNavOverlay.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavOverlay.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Header Background on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.faq-answer').style.maxHeight = null;
            }

            // Toggle current item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.querySelector('.form-success-msg');
    const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form processing
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Show success message
                successMsg.classList.remove('hidden');
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = 'Solicitar Orçamento';
                submitBtn.disabled = false;

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }
});
