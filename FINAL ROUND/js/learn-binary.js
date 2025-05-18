 // Intersection Observer for section animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('exiting');
                } else {
                    entry.target.classList.add('exiting');
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Binary Table Interaction
        const bitValues = document.querySelectorAll('.bit-value');
        const decimalResult = document.getElementById('decimal-result');
        
        bitValues.forEach(bit => {
            bit.addEventListener('click', () => {
                // Toggle between 0 and 1 with animation
                bit.classList.toggle('active');
                bit.textContent = bit.textContent === '0' ? '1' : '0';
                
                // Add pulse animation
                bit.style.animation = 'none';
                void bit.offsetWidth; // Trigger reflow
                bit.style.animation = 'pulse 0.5s ease';
                
                updateDecimalValue();
            });
        });
        
        function updateDecimalValue() {
            let decimal = 0;
            bitValues.forEach(bit => {
                const value = parseInt(bit.textContent);
                const placeValue = parseInt(bit.getAttribute('data-value'));
                decimal += value * placeValue;
            });
            
            // Animate the decimal result change
            decimalResult.style.transform = 'scale(1.1)';
            setTimeout(() => {
                decimalResult.textContent = decimal;
                decimalResult.style.transform = 'scale(1)';
            }, 200);
        }
        
        // AND Gate Bulb Logic
        const andSwitchA = document.getElementById('and-switchA');
        const andSwitchB = document.getElementById('and-switchB');
        const andBulb = document.getElementById('and-bulb');
        
        function updateAndBulb() {
            const aOn = andSwitchA.checked;
            const bOn = andSwitchB.checked;
            
            if (aOn && bOn) {
                andBulb.classList.add('on');
                andBulb.classList.remove('or-on');
            } else {
                andBulb.classList.remove('on');
                andBulb.classList.remove('or-on');
            }
        }
        
        andSwitchA.addEventListener('change', updateAndBulb);
        andSwitchB.addEventListener('change', updateAndBulb);
        
        // OR Gate Bulb Logic
        const orSwitchA = document.getElementById('or-switchA');
        const orSwitchB = document.getElementById('or-switchB');
        const orBulb = document.getElementById('or-bulb');
        
        function updateOrBulb() {
            const aOn = orSwitchA.checked;
            const bOn = orSwitchB.checked;
            
            if (aOn || bOn) {
                orBulb.classList.add('or-on');
                orBulb.classList.remove('on');
            } else {
                orBulb.classList.remove('or-on');
                orBulb.classList.remove('on');
            }
        }
        
        orSwitchA.addEventListener('change', updateOrBulb);
        orSwitchB.addEventListener('change', updateOrBulb);
        
        // Converter
        const conversionType = document.getElementById('conversion-type');
        const inputValue = document.getElementById('input-value');
        const inputLabel = document.getElementById('input-label');
        const convertBtn = document.getElementById('convert-btn');
        const result = document.getElementById('result');
        const resultValue = document.getElementById('result-value');
        
        // Update converter based on type
        function updateConverterType() {
            if (conversionType.value === 'binary-to-decimal') {
                inputLabel.textContent = 'Binary Number (6 bits max):';
                inputValue.placeholder = 'e.g., 101010';
                inputValue.maxLength = 6;
            } else {
                inputLabel.textContent = 'Decimal Number (0-63):';
                inputValue.placeholder = 'e.g., 42';
                inputValue.maxLength = 2;
            }
            inputValue.value = '';
            result.classList.remove('show');
        }
        
        conversionType.addEventListener('change', updateConverterType);
        
        // Real-time conversion as user types
        inputValue.addEventListener('input', () => {
            if (inputValue.value.length > 0) {
                performConversion();
            } else {
                result.classList.remove('show');
            }
        });
        
        // Button click conversion
        convertBtn.addEventListener('click', () => {
            // Button press animation
            convertBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                convertBtn.style.transform = 'scale(1)';
            }, 200);
            
            performConversion();
        });
        
        function performConversion() {
            if (conversionType.value === 'binary-to-decimal') {
                convertBinaryToDecimal();
            } else {
                convertDecimalToBinary();
            }
        }
        
        function convertBinaryToDecimal() {
            const binaryStr = inputValue.value.trim();
            
            // Validate binary input
            if (!/^[01]+$/.test(binaryStr)) {
                showError('Please enter a valid binary number (only 0s and 1s)');
                return;
            }
            
            if (binaryStr.length > 6) {
                showError('Maximum 6 bits allowed');
                return;
            }
            
            // Convert binary to decimal
            let decimal = 0;
            for (let i = 0; i < binaryStr.length; i++) {
                const bit = parseInt(binaryStr[binaryStr.length - 1 - i]);
                decimal += bit * Math.pow(2, i);
            }
            
            resultValue.textContent = decimal;
            result.classList.add('show');
        }
        
        function convertDecimalToBinary() {
            const decimalStr = inputValue.value.trim();
            const decimal = parseInt(decimalStr);
            
            // Validate decimal input
            if (isNaN(decimal) || decimal < 0 || decimal > 63) {
                showError('Please enter a valid decimal number between 0 and 63');
                return;
            }
            
            // Convert decimal to binary
            let binary = '';
            let num = decimal;
            
            if (num === 0) {
                binary = '0';
            } else {
                while (num > 0) {
                    binary = (num % 2) + binary;
                    num = Math.floor(num / 2);
                }
            }
            
            // Pad with leading zeros to make it 6 bits if needed
            while (binary.length < 6) {
                binary = '0' + binary;
            }
            
            resultValue.textContent = binary;
            result.classList.add('show');
        }
        
        function showError(message) {
            resultValue.textContent = message;
            result.style.color = 'var(--red)';
            result.style.borderLeftColor = 'var(--red)';
            result.classList.add('show');
            
            setTimeout(() => {
                result.style.color = '';
                result.style.borderLeftColor = 'var(--blue)';
            }, 2000);
        }
        
        // Initialize
        updateConverterType();

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