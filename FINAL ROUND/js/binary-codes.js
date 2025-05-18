       // Simple hover effects for icons
        document.addEventListener('DOMContentLoaded', function() {
            const icons = document.querySelectorAll('.icon, .code-icon, .interpreter-title i');
            if (icons) {
                icons.forEach(icon => {
                    icon.addEventListener('mouseenter', function() {
                        this.style.transform = 'scale(1.2) rotate(10deg)';
                        this.style.color = 'var(--red)';
                    });
                    icon.addEventListener('mouseleave', function() {
                        this.style.transform = '';
                        this.style.color = '';
                    });
                });
            }
            
            // Add hover effect for code boxes
            const codeBoxes = document.querySelectorAll('.code-box');
            if (codeBoxes) {
                codeBoxes.forEach(box => {
                    box.addEventListener('mouseenter', function() {
                        this.style.transform = 'translateY(-10px) scale(1.02)';
                        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
                    });
                    box.addEventListener('mouseleave', function() {
                        this.style.transform = '';
                        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                    });
                });
            }
            
            // Add hover effect for interpreter box
            const interpreterBox = document.querySelector('.interpreter-box');
            if (interpreterBox) {
                interpreterBox.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
                });
                interpreterBox.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                });
            }
        });

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on links
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});

// Back to Top Button Functionality
        const backToTopButton = document.getElementById('backToTop');
        
        // Set animation delays for each binary digit
        document.querySelectorAll('.binary-digit').forEach((digit, index) => {
            digit.style.setProperty('--order', index);
        });
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Randomize binary digits periodically
        setInterval(() => {
            const digits = document.querySelectorAll('.binary-digit');
            digits.forEach(digit => {
                digit.textContent = Math.random() > 0.5 ? '1' : '0';
            });
        }, 1500);