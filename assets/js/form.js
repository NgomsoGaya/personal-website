document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData);
            
            // Basic validation
            if(!formValues.name || !formValues.email || !formValues.message) {
                alert('Please fill out all required fields');
                return;
            }
            
            // Here you would typically send the form data to your server
            // For demonstration, we'll log it and show a success message
            console.log('Form submitted:', formValues);
            
            // Show success message
            contactForm.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <h3>Thank you for your message!</h3>
                    <p>I'll get back to you as soon as possible.</p>
                </div>
            `;
            
            // In a real implementation, you would use fetch() to submit to a backend:
            /*
            fetch('your-form-handler-url', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle success
                contactForm.innerHTML = `<div>Thank you for your message!</div>`;
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            });
            */
        });
    }
});