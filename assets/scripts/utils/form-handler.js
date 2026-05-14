// Form Handling Utilities
import { CONFIG } from '../core/config.js';

export class FormHandler {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupContactForm();
    }
    
    setupContactForm() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(contactForm);
            });
        }
    }
    
    async handleContactForm(form) {
        const formData = this.getFormData(form);
        const validation = this.validateForm(formData);
        
        if (!validation.isValid) {
            this.showNotification(validation.message, 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        this.setButtonLoading(submitBtn, true);
        
        try {
            // Simulate form submission (replace with actual API call)
            await this.submitForm(formData);
            
            // Show success message
            this.showNotification('تم إرسال رسالتك بنجاح! سأرد عليك قريباً.', 'success');
            
            // Reset form
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showNotification('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.', 'error');
        } finally {
            // Reset button state
            this.setButtonLoading(submitBtn, false, originalText);
        }
    }
    
    getFormData(form) {
        const formData = new FormData(form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        return data;
    }
    
    validateForm(data) {
        if (!data.name || !data.email || !data.subject || !data.message) {
            return {
                isValid: false,
                message: 'يرجى ملء جميع الحقول المطلوبة'
            };
        }
        
        if (!this.isValidEmail(data.email)) {
            return {
                isValid: false,
                message: 'يرجى إدخال بريد إلكتروني صحيح'
            };
        }
        
        if (data.name.length < 2) {
            return {
                isValid: false,
                message: 'يجب أن يكون الاسم على الأقل حرفين'
            };
        }
        
        if (data.message.length < 10) {
            return {
                isValid: false,
                message: 'يجب أن تكون الرسالة على الأقل 10 أحرف'
            };
        }
        
        return {
            isValid: true,
            message: ''
        };
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    async submitForm(data) {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% success rate)
                if (Math.random() > 0.1) {
                    resolve({ success: true });
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }
    
    setButtonLoading(button, isLoading, originalText = '') {
        if (isLoading) {
            button.disabled = true;
            button.textContent = 'جاري الإرسال...';
            button.style.opacity = '0.7';
        } else {
            button.disabled = false;
            button.textContent = originalText;
            button.style.opacity = '1';
        }
    }
    
    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Apply styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform ${CONFIG.ANIMATIONS.normal} ease;
            max-width: 300px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        `;
        
        // Set background color based on type
        switch(type) {
            case 'success':
                notification.style.background = CONFIG.COLORS.success;
                break;
            case 'error':
                notification.style.background = CONFIG.COLORS.error;
                break;
            case 'warning':
                notification.style.background = CONFIG.COLORS.warning;
                break;
            default:
                notification.style.background = CONFIG.COLORS.info;
        }
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    // Add input validation feedback
    setupInputValidation() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateInput(input);
            });
            
            input.addEventListener('input', () => {
                this.clearInputError(input);
            });
        });
    }
    
    validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'هذا الحقل مطلوب';
        } else if (input.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'يرجى إدخال بريد إلكتروني صحيح';
        } else if (input.type === 'text' && value && value.length < 2) {
            isValid = false;
            errorMessage = 'يجب أن يكون على الأقل حرفين';
        } else if (input.tagName === 'TEXTAREA' && value && value.length < 10) {
            isValid = false;
            errorMessage = 'يجب أن تكون على الأقل 10 أحرف';
        }
        
        if (!isValid) {
            this.showInputError(input, errorMessage);
        }
        
        return isValid;
    }
    
    showInputError(input, message) {
        input.classList.add('error');
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: var(--color-error);
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        
        input.parentNode.appendChild(errorElement);
    }
    
    clearInputError(input) {
        input.classList.remove('error');
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
}
