
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const nav = document.querySelector('nav ul');
        const burger = document.querySelector('.burger');
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        alert('Thanks for your message! We\'ll get back to you soon.');
        contactForm.reset();
    });

    // Mobile menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Scroll to top button
    window.onscroll = function() {
        const scrollBtn = document.getElementById("scrollTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
