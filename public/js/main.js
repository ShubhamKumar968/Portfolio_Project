document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // THEME & ACCENT MANAGEMENT
    // ==========================================
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const accentPickerBtn = document.getElementById('accentPickerBtn');
    const accentDropdown = document.getElementById('accentDropdown');
    const accentDots = document.querySelectorAll('.accent-dot');

    const updateThemeIcon = (theme) => {
        if (!themeIcon) return;
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-sun';
            if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        }
    };

    const updateActiveAccentDot = (accent) => {
        accentDots.forEach(dot => {
            if (dot.dataset.accent === accent) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const currentAccent = document.documentElement.getAttribute('data-accent') || 'green';
    updateThemeIcon(currentTheme);
    updateActiveAccentDot(currentAccent);

    // Theme Mode Toggle Handler
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', activeTheme);
            localStorage.setItem('portfolio_theme', activeTheme);
            updateThemeIcon(activeTheme);
        });
    }

    // Accent Picker Dropdown Toggle Handler
    if (accentPickerBtn && accentDropdown) {
        accentPickerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            accentDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!accentDropdown.contains(e.target) && e.target !== accentPickerBtn) {
                accentDropdown.classList.remove('active');
            }
        });

        // Accent Selection Handler
        accentDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const selectedAccent = dot.dataset.accent;
                document.documentElement.setAttribute('data-accent', selectedAccent);
                localStorage.setItem('portfolio_accent', selectedAccent);
                updateActiveAccentDot(selectedAccent);
                accentDropdown.classList.remove('active');
            });
        });
    }

    // Navbar Sticky & Scroll Top Button Visibility
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // Scroll to Top action
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile Hamburger Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close mobile drawer when clicking a navigation link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // Typed.js Animation for Hero Section
    if (typeof Typed !== 'undefined') {
        const typedTarget = document.getElementById('typedElement');
        if (typedTarget) {
            new Typed('#typedElement', {
                strings: [
                    "Software Engineer",
                    "Full Stack Web Developer",
                    "Competitive Programmer",
                    "Problem Solver",
                    "Tech Explorer"
                ],
                typeSpeed: 70,
                backSpeed: 45,
                backDelay: 1800,
                loop: true
            });
        }

        // Typed-2 element if present in About section
        const typed2Target = document.querySelector('.typing-2');
        if (typed2Target) {
            new Typed('.typing-2', {
                strings: [
                    "Software Developer",
                    "Problem Solver",
                    "Full Stack Engineer",
                    "Technology Enthusiast"
                ],
                typeSpeed: 70,
                backSpeed: 45,
                backDelay: 1800,
                loop: true
            });
        }
    }

    // ==========================================
    // SKILLS MARQUEE PAUSE ON CLICK / TOGGLE
    // ==========================================
    const skillsTrack = document.getElementById('skillsMarqueeTrack');
    if (skillsTrack) {
        const marqueeCards = skillsTrack.querySelectorAll('.marquee-card');
        
        marqueeCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                // Toggle paused state on the track
                const isPaused = skillsTrack.classList.toggle('paused');
                
                // Highlight clicked card
                marqueeCards.forEach(c => c.classList.remove('active-card'));
                if (isPaused) {
                    card.classList.add('active-card');
                }
            });
        });

        // Resume marquee when clicking outside skills track
        document.addEventListener('click', (e) => {
            if (!skillsTrack.contains(e.target)) {
                skillsTrack.classList.remove('paused');
                marqueeCards.forEach(c => c.classList.remove('active-card'));
            }
        });
    }

    // ==========================================
    // PROJECT CARD INTERACTIVE DETAILS TOGGLE
    // ==========================================
    const raniProjectCards = document.querySelectorAll('.rani-project-card');
    raniProjectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent toggling if user clicked an action button (Play / Code)
            if (e.target.closest('.rani-action-circle')) return;

            // Toggle active details view (slides description from left, tech stack from right)
            card.classList.toggle('active-details');
        });
    });

    // ==========================================
    // STANDALONE /PROJECTS REAL-TIME SEARCH FILTER
    // ==========================================
    const projectSearchInput = document.getElementById('projectSearchInput');
    const searchableProjects = document.querySelectorAll('.searchable-project');
    const noSearchProjects = document.getElementById('noSearchProjects');

    // Live search filter in full projects gallery overlay
    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let matches = 0;

            searchableProjects.forEach(card => {
                const title = card.dataset.title || '';
                const desc = card.dataset.desc || '';
                const tags = card.dataset.tags || '';

                if (title.includes(query) || desc.includes(query) || tags.includes(query)) {
                    card.style.display = '';
                    matches++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noSearchProjects) {
                noSearchProjects.style.display = matches === 0 ? 'block' : 'none';
            }
        });
    }

    // AJAX Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const contactFormAlert = document.getElementById('contactFormAlert');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Disable submit button & show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Sending Message...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
            }

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (contactFormAlert) {
                    contactFormAlert.style.display = 'block';
                    if (result.success) {
                        contactFormAlert.className = 'form-alert alert-success';
                        contactFormAlert.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${result.message}`;
                        contactForm.reset();
                    } else {
                        contactFormAlert.className = 'form-alert alert-error';
                        contactFormAlert.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${result.message || 'Submission failed'}`;
                    }
                }
            } catch (error) {
                if (contactFormAlert) {
                    contactFormAlert.style.display = 'block';
                    contactFormAlert.className = 'form-alert alert-error';
                    contactFormAlert.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Network error. Please check your connection and try again.';
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
                }
            }
        });
    }
});
