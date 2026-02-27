// GSAP Animations and Vanilla JS functionality

document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const tl = gsap.timeline();
    tl.from('.hero-logo', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
        .from('.subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from('.cta-btn', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

    // Parallax background
    gsap.to('#parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Fade-in sections on scroll
    const sections = gsap.utils.toArray('.section');
    sections.forEach(section => {
        gsap.from(section.querySelectorAll('.glass-card, .video-wrapper, .section-title'), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
