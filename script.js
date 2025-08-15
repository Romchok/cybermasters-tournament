// CyberHub Dota 2 Tournament - JavaScript

// Countdown Timer Function
function updateCountdown() {
    // Set the target date (August 31, 2025, 10:00 AM)
    const targetDate = new Date('2025-08-31T10:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update main countdown
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // Update small countdown
        document.getElementById('days-small').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours-small').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes-small').textContent = minutes.toString().padStart(2, '0');
    } else {
        // Event has started
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        document.getElementById('days-small').textContent = '00';
        document.getElementById('hours-small').textContent = '00';
        document.getElementById('minutes-small').textContent = '00';
        
        // Show event started message
        showEventStartedMessage();
    }
}

// Show event started message
function showEventStartedMessage() {
    const countdownElements = document.querySelectorAll('.countdown-timer, .countdown-timer-small');
    countdownElements.forEach(element => {
        element.innerHTML = '<div class="text-center"><div class="text-2xl font-bold text-green-400">Турнир начался!</div><div class="text-gray-300">Присоединяйтесь к игре!</div></div>';
    });
}

// Chat Widget Toggle
function toggleChat() {
    const chatPanel = document.getElementById('chat-panel');
    chatPanel.classList.toggle('hidden');
    
    // Add animation class
    if (!chatPanel.classList.contains('hidden')) {
        chatPanel.classList.add('animate-fade-in');
    }
}

// Close chat when clicking outside
document.addEventListener('click', function(event) {
    const chatWidget = document.getElementById('chat-widget');
    const chatPanel = document.getElementById('chat-panel');
    
    if (!chatWidget.contains(event.target) && !chatPanel.classList.contains('hidden')) {
        chatPanel.classList.add('hidden');
    }
});

// Form Submission Handler
function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<div class="loading-spinner mx-auto"></div>';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        showMessage('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}

// Show message function
function showMessage(text, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const message = document.createElement('div');
    message.className = `message ${type} fixed top-4 right-4 z-50 max-w-md`;
    message.textContent = text;
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'ml-2 text-lg font-bold hover:opacity-70';
    closeButton.onclick = () => message.remove();
    message.appendChild(closeButton);
    
    // Add to page
    document.body.appendChild(message);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add animation classes to cards
    const cards = document.querySelectorAll('.group');
    cards.forEach(card => {
        card.classList.add('card-hover');
    });
    
    // Add button classes
    const buttons = document.querySelectorAll('a[href="#register"], button[type="submit"]');
    buttons.forEach(button => {
        button.classList.add('btn-primary');
    });
    
    // Add form input classes
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.classList.add('form-input');
    });
    
    // Add social icon classes
    const socialIcons = document.querySelectorAll('footer svg');
    socialIcons.forEach(icon => {
        icon.parentElement.classList.add('social-icon');
    });
});

// Phone number formatting
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (value.length <= 1) {
            value = '+7 (' + value;
        } else if (value.length <= 4) {
            value = '+7 (' + value.substring(1, 4);
        } else if (value.length <= 7) {
            value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7);
        } else if (value.length <= 9) {
            value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9);
        } else {
            value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
        }
    }
    
    input.value = value;
}

// Add phone formatting to phone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }
});

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.classList.add('border-red-500');
            isValid = false;
        }
    }
    
    return isValid;
}

// Add form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showMessage('Пожалуйста, заполните все обязательные поля корректно.', 'error');
            } else {
                handleFormSubmission(e);
            }
        });
    }
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization: Debounce scroll events
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

// Smooth scroll performance optimization
const optimizedScroll = debounce(() => {
    // Any scroll-based animations or effects can go here
}, 16); // 60fps

window.addEventListener('scroll', optimizedScroll);

// Initialize countdown timer
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add CSS animation classes
    document.body.classList.add('loaded');
});

// Add loading animation class
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Export functions for global use
window.toggleChat = toggleChat;
window.showMessage = showMessage;
window.formatPhoneNumber = formatPhoneNumber;

