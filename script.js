'use strict';

// Hamburger Menu Toggle Functionality
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Form Validation Functionality
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    let isValid = true;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Basic Validation
    if (!email.includes('@')) {
        isValid = false;
        alert('Please enter a valid email address.');
    }
    if (password.length < 6) {
        isValid = false;
        alert('Password must be at least 6 characters long.');
    }

    if (!isValid) {
        event.preventDefault();
    }
});
