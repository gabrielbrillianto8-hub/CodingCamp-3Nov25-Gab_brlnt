function welcomeMessage() {

    let name = prompt("Please enter your name:");


    if (name && name.trim() !== "") {

        document.getElementById('welcome-speech').innerHTML = 'Hello ' + name + ', Welcome to Gabi Helm Care !';
    } else {

        document.getElementById('welcome-speech').innerHTML = 'Welcome to Gabi Helm Care !';
    }
}


function validateForm(event) {

    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;


    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill out all required fields.');
        isValid = false;
    }

    if (!emailInput.value.includes('@')) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        event.target.submit();
    }

    return isValid;
}


document.addEventListener('DOMContentLoaded', function() {
    welcomeMessage();


    const contactForm = document.querySelector('#message-us-page form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});