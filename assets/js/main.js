// main.js - Basic site functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .hero-buttons a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process links that point to an ID on the page
            if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Project buttons - can add click handlers for "View Project" buttons
    const projectButtons = document.querySelectorAll('.project-content .btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // If you want to open detailed project pages, you'd add logic here
            // For example:
            // const projectId = this.dataset.projectId;
            // window.location.href = `pages/project-details.html?id=${projectId}`;
        });
    });
});