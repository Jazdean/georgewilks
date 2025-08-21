// This file contains the JavaScript code for the webpage. 
// It may include functions to handle user interactions, manipulate the DOM, and implement any dynamic behavior.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
    }

    document.querySelector('.prev').onclick = function() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    };

    document.querySelector('.next').onclick = function() {
        current = (current + 1) % slides.length;
        showSlide(current);
    };

    showSlide(current);
});