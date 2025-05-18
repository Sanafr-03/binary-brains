// Mobile menu toggle
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

// Binary particles background
        function createBinaryParticles() {
            const clockSection = document.getElementById('binary-clock');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'binary-particle';
                particle.textContent = Math.random() > 0.5 ? '1' : '0';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDuration = `${10 + Math.random() * 20}s`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particle.style.fontSize = `${10 + Math.random() * 20}px`;
                clockSection.appendChild(particle);
            }
        }
        
        // Clock functionality
        let isBinaryMode = true;
        const toggleBtn = document.getElementById('toggleBtn');
        let previousHours = '';
        let previousMinutes = '';
        
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            
            hours = hours % 12;
            hours = hours ? hours : 12;
            
            const hoursStr = isBinaryMode 
                ? hours.toString(2).padStart(4, '0')
                : hours.toString().padStart(2, '0');
            
            const minutesStr = isBinaryMode 
                ? minutes.toString(2).padStart(6, '0')
                : minutes.toString().padStart(2, '0');
            
            updateDigits('hours', hoursStr, previousHours);
            updateDigits('minutes', minutesStr, previousMinutes);
            document.getElementById('ampm').textContent = ampm;
            
            previousHours = hoursStr;
            previousMinutes = minutesStr;
            
            setTimeout(updateClock, 1000);
        }
        
        function updateDigits(elementId, newValue, previousValue) {
            const container = document.getElementById(elementId);
            const digits = Array.from(container.children);
            
            if (digits.length !== newValue.length) {
                container.innerHTML = '';
                for (let i = 0; i < newValue.length; i++) {
                    container.appendChild(createDigitContainer(newValue[i]));
                }
                return;
            }
            
            digits.forEach((digitContainer, i) => {
                const digit = newValue[i];
                const digitElement = digitContainer.querySelector('.clock-digit');
                const front = digitElement.querySelector('.digit-front');
                const back = digitElement.querySelector('.digit-back');
                
                if (previousValue[i] !== digit) {
                    back.textContent = digit;
                    digitElement.classList.add('flip');
                    
                    setTimeout(() => {
                        front.textContent = digit;
                        digitElement.classList.remove('flip');
                    }, 300);
                }
            });
        }
        
        function createDigitContainer(initialValue) {
            const container = document.createElement('div');
            container.className = 'clock-digit-container';
            
            const digit = document.createElement('div');
            digit.className = 'clock-digit';
            
            const front = document.createElement('div');
            front.className = 'digit-face digit-front';
            front.textContent = initialValue;
            
            const back = document.createElement('div');
            back.className = 'digit-face digit-back';
            back.textContent = initialValue;
            
            digit.appendChild(front);
            digit.appendChild(back);
            container.appendChild(digit);
            
            return container;
        }
        
        toggleBtn.addEventListener('click', () => {
            isBinaryMode = !isBinaryMode;
            toggleBtn.textContent = isBinaryMode ? 'Switch to Decimal' : 'Switch to Binary';
            previousHours = '';
            previousMinutes = '';
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createBinaryParticles();
            updateClock();
        });



            




        document.addEventListener('DOMContentLoaded', function() {
            // Make section heading visible
            const sectionHeading = document.querySelector('.section-heading');
            setTimeout(() => {
                sectionHeading.classList.add('visible');
            }, 100);

            // Intersection Observer for scroll animations
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

            // Observe all animated elements
            const animatedElements = document.querySelectorAll('.application-box, .content-box, .image-box');
            animatedElements.forEach(el => observer.observe(el));
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















        document.addEventListener('DOMContentLoaded', function() {
            // Generate random binary lines
            function generateBinaryLines(count, length) {
                let lines = [];
                for (let i = 0; i < count; i++) {
                    let line = '';
                    for (let j = 0; j < length; j++) {
                        line += Math.round(Math.random()) + ' ';
                    }
                    lines.push(line);
                }
                return lines;
            }

            // Initialize binary animations
            const binaryContainers = [
                document.getElementById('binary-animation-1'),
                document.getElementById('binary-animation-2')
            ];

            // Create multiple lines of binary for each card
            binaryContainers.forEach(container => {
                if (!container) return; // Skip if element doesn't exist
                
                const lineCount = Math.floor(container.offsetHeight / 20);
                const binaryLines = generateBinaryLines(lineCount, 50);
                
                binaryLines.forEach(line => {
                    const div = document.createElement('div');
                    div.className = 'binary-line';
                    div.textContent = line;
                    container.appendChild(div);
                });
            });

            // Intersection Observer for animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate title
                        const title = document.querySelector('.section-title');
                        if (title) title.classList.add('visible');
                        
                        // Animate container
                        entry.target.classList.add('visible');
                        
                        // Start decryption animation for each card
                        const cards = entry.target.querySelectorAll('.duo-card');
                        if (!cards) return;
                        
                        cards.forEach((card) => {
                            const binaryAnimation = card.querySelector('.binary-animation');
                            if (!binaryAnimation) return;
                            
                            const binaryLines = binaryAnimation.querySelectorAll('.binary-line');
                            if (!binaryLines) return;
                            
                            let iterations = 0;
                            const totalIterations = 15;
                            const interval = setInterval(() => {
                                binaryLines.forEach(line => {
                                    let newContent = '';
                                    for (let i = 0; i < 50; i++) {
                                        newContent += Math.round(Math.random()) + ' ';
                                    }
                                    line.textContent = newContent;
                                });
                                
                                iterations++;
                                
                                // Gradually fade out
                                if (iterations > totalIterations * 0.7) {
                                    binaryAnimation.style.opacity = 1 - (iterations - totalIterations * 0.7) / (totalIterations * 0.3);
                                }
                                
                                if (iterations > totalIterations) {
                                    clearInterval(interval);
                                    setTimeout(() => {
                                        binaryAnimation.style.display = 'none';
                                    }, 300);
                                }
                            }, 100);
                        });
                    }
                });
            }, { threshold: 0.1 });

            // Observe elements
            const container = document.querySelector('.tech-duos-container');
            if (container) observer.observe(container);
        });