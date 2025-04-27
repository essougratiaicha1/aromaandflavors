// Menu filtering
document.addEventListener('DOMContentLoaded', function() {
    // Form validation for reservation
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const persons = document.getElementById('persons').value;
            
            if (!date || !time || !persons) {
                alert('Veuillez remplir tous les champs');
                return;
            }
            
            // Animation for success
            this.classList.add('form-submitted');
            alert('Réservation effectuée avec succès!');
        });
    }

    // Newsletter form animation
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Merci de votre inscription à notre newsletter!');
                this.reset();
            }
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu item hover effect
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Category switching
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuSections = document.querySelectorAll('.menu-category');

    // Show Apéritifs by default
    document.getElementById('aperitifs').classList.add('active');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            menuSections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });

    // Form submission and success message
    const form = document.getElementById('reservation-form');
    const successMessage = document.getElementById('success-message');

    function showSuccessMessage() {
        successMessage.classList.remove('hidden');
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(-20px)';
        
        // Trigger animation
        setTimeout(() => {
            successMessage.style.transition = 'all 0.5s ease';
            successMessage.style.opacity = '1';
            successMessage.style.transform = 'translateY(0)';
        }, 10);

        // Hide message after 5 seconds
        setTimeout(() => {
            hideSuccessMessage();
        }, 5000);
    }

    function hideSuccessMessage() {
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 500);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        setTimeout(() => {
            showSuccessMessage();
            form.reset();
        }, 1000);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Hide the form
        form.style.display = 'none';
        // Show the success message
        successMessage.classList.remove('hidden');
    });
});

// Add scroll reveal animation
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.menu-category, .hero-section, .container');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}