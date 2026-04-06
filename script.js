// ============================================
// DARK MODE TOGGLE
// ============================================
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

// Initialize dark mode from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    initializeParticles();
});

// ============================================
// PARTICLE BACKGROUND INITIALIZATION
// ============================================
const particlesCanvas = document.getElementById('particles-js');

function initializeParticles() {
    if (!window.particlesJS || !particlesCanvas) {
        return;
    }

    const isDarkMode = body.classList.contains('dark-mode');
    const particleColor = isDarkMode ? ['#a5b4fc', '#60a5fa', '#22c55e'] : ['#ffffff', '#93c5fd', '#22c55e'];

    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 900 } },
            color: { value: particleColor },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0.2 } },
            size: { value: 3, random: true, anim: { enable: false } },
            line_linked: {
                enable: true,
                distance: 120,
                color: isDarkMode ? '#94a3b8' : '#c7d2fe',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.8,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.25 } },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true
    });
}

function triggerHeroIntro() {
    document.body.classList.add('page-loaded');
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// NAVBAR ACTIVE LINK & SHADOW
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
let modalNav = null;

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Add shadow to navbar on scroll
    if (window.scrollY > 10) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
menuToggle.addEventListener('click', () => {
    if (!modalNav) {
        modalNav = document.createElement('div');
        modalNav.classList.add('modal-nav');
        
        const navLinksClone = navLinks.forEach(link => {
            const clonedLink = link.cloneNode(true);
            modalNav.appendChild(clonedLink);
        });
        
        document.body.appendChild(modalNav);
        
        // Close modal when link is clicked
        modalNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                modalNav.classList.remove('active');
            });
        });
    }
    
    modalNav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (modalNav && !e.target.closest('.modal-nav') && !e.target.closest('.menu-toggle')) {
        modalNav.classList.remove('active');
    }
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// TYPING ANIMATION
// ============================================
const typingText = document.querySelector('.typing-text');
const roles = ['AI&ML Engineer', 'Software Engineer', 'Web Developer', 'Tech Enthusiast'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeAnimation, 2000); // Pause before deleting
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeAnimation, typingSpeed);
}

if (typingText) {
    typeAnimation();
}

// ============================================
// FADE-IN ON SCROLL ANIMATION
// ============================================
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

document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// ============================================
// FORM SUBMISSION
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const message = this.querySelector('#message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields!');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        // Create mailto link (for now, since no backend)
        const mailtoLink = `mailto:mohit@example.com?subject=Message from ${name}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
        
        // Show success message
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        button.style.background = '#22c55e';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 3000);
        
        // Uncomment the line below if you want to open email client
        // window.location.href = mailtoLink;
    });
}

// ============================================
// AUTO-EXPAND TEXTAREA
// ============================================
const textarea = document.getElementById('message');
if (textarea) {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
const lazyImages = document.querySelectorAll('img');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function createScrollToTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.classList.add('scroll-to-top');
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary);
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            z-index: 999;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
        }
        
        .scroll-to-top.show {
            display: flex;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-5px);
            background: var(--accent);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createScrollToTopButton();
    initializeParticles();
});

window.addEventListener('load', () => {
    triggerHeroIntro();
});

// ============================================
// CHATBOT INTERACTION LOGIC
// ============================================
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotPanel = document.querySelector('.chatbot-panel');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotForm = document.querySelector('.chatbot-form');
const chatbotInput = document.querySelector('.chatbot-input');

const chatbotResponses = [
    {
        triggers: ['who are you', 'who is mohit', 'tell me about you'],
        response: 'I am Mohit Kumar’s AI assistant. I help recruiters learn about skills, projects, and contact information quickly.'
    },
    {
        triggers: ['skills', 'what are your skills', 'tell me your skills'],
        response: 'Mohit is skilled in HTML, CSS, JavaScript, React, Vue, Node.js, Express, Python, MongoDB, and responsive UI design.'
    },
    {
        triggers: ['show projects', 'projects', 'project'],
        response: 'Check out the featured project cards below: <a href="#projects" class="chat-link">View Projects</a>.'
    },
    {
        triggers: ['contact', 'how can i contact', 'email', 'phone'],
        response: 'You can send a message using the contact form or write to mohit@example.com for a quick response.'
    },
    {
        triggers: ['resume', 'download resume'],
        response: 'Use the Download Resume button in the About section to grab Mohit’s resume instantly.'
    }
];

function appendChatMessage(text, sender, allowHtml = false) {
    if (!chatbotMessages) return;
    const message = document.createElement('div');
    message.className = `chatbot-message ${sender}`;
    if (allowHtml) {
        message.innerHTML = text;
    } else {
        message.textContent = text;
    }
    chatbotMessages.appendChild(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addTypingIndicator() {
    if (!chatbotMessages) return null;
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chatbot-message bot chatbot-typing';
    typingBubble.innerHTML = '<span></span><span></span><span></span>';
    chatbotMessages.appendChild(typingBubble);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return typingBubble;
}

function findBotResponse(question) {
    const lowerCaseQuestion = question.toLowerCase();
    for (const answer of chatbotResponses) {
        if (answer.triggers.some(trigger => lowerCaseQuestion.includes(trigger))) {
            return answer.response;
        }
    }
    return 'I’m here to help! Try asking: “Who are you?”, “What are your skills?”, or “Show projects.”';
}

function handleChatSubmission(userText) {
    if (!userText || !userText.trim()) {
        return;
    }

    appendChatMessage(userText, 'user');
    const typingBubble = addTypingIndicator();
    const responseText = findBotResponse(userText);
    
    setTimeout(() => {
        if (typingBubble) {
            typingBubble.remove();
        }
        appendChatMessage(responseText, 'bot', true);
    }, 900);
}

function openChat() {
    if (!chatbotPanel) return;
    chatbotPanel.classList.add('open');
    if (chatbotInput) {
        chatbotInput.focus();
    }
    if (chatbotMessages && chatbotMessages.children.length === 0) {
        appendChatMessage('Hi there! I am Mohit’s assistant. Ask me about skills, projects, or contact details.', 'bot');
    }
}

function closeChat() {
    if (!chatbotPanel) return;
    chatbotPanel.classList.remove('open');
}

if (chatbotToggle && chatbotPanel) {
    chatbotToggle.addEventListener('click', () => {
        if (chatbotPanel.classList.contains('open')) {
            closeChat();
        } else {
            openChat();
        }
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', closeChat);
}

if (chatbotForm) {
    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!chatbotInput) return;
        const userText = chatbotInput.value;
        handleChatSubmission(userText);
        chatbotInput.value = '';
    });
}

// Close chatbot when clicking outside the panel
document.addEventListener('click', (e) => {
    if (chatbotPanel && chatbotPanel.classList.contains('open') && !e.target.closest('.chatbot-widget')) {
        closeChat();
    }
});

// ============================================
// PREVENT SPAM SUBMISSIONS
let formSubmitAllowed = true;

if (contactForm) {
    contactForm.addEventListener('submit', function() {
        if (!formSubmitAllowed) {
            alert('Please wait before submitting again!');
            return false;
        }
        
        formSubmitAllowed = false;
        setTimeout(() => {
            formSubmitAllowed = true;
        }, 2000); // 2 second cooldown
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && modalNav) {
        modalNav.classList.remove('active');
    }
});

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================
// Add focus visible styles
const style = document.createElement('style');
style.textContent = `
    *:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce scroll events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Throttle resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// INITIALIZATION
// ============================================
console.log('Portfolio website loaded successfully!');
console.log('Dark mode available. Click the moon icon to toggle.');

