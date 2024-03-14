"use strict";
(function () {
    const modalEl = document.querySelector('.modal');
    const openEls = document.querySelectorAll('.open-modal');
    const closeEl = document.querySelector('.close-modal');
    const formEl = document.querySelector('.modal-form');
    const emailEl = document.querySelector('.email');
    const emailErrorEl = document.querySelector('.email-error');
    const confirmEl = document.querySelector('.confirm-email');
    const confirmErrorEl = document.querySelector('.confirm-error');
    
    
    const hamburgerEl = document.querySelector(".hamburger");
    const menuEl = document.querySelector(".nav-menu");

    hamburgerEl.addEventListener('click', function() {
        menuEl.classList.toggle('active');
    });

    function validateEmail() {
        const value = emailEl.value;
        if (value === '') {
            emailErrorEl.textContent = 'This field is required';
            return false;
        } else if (!value.includes('@')) {
            emailErrorEl.textContent = 'This field be a valid email address including a @';
            return false;
        } else {
            emailErrorEl.textContent = '';
            return true;
        }
    }

    function validateConfirmEmail() {
        if (confirmEl.value === '') {
            confirmErrorEl.textContent = 'This field is required';
            return false;
        } else if (confirmEl.value !== emailEl.value) {
            confirmErrorEl.textContent = 'This field must match the provided email address';
            return false;
        } else {
            confirmErrorEl.textContent = '';
            return true;
        }
    }

    openEls.forEach(openEl => {
        openEl.addEventListener('click', () => {
            modalEl.showModal();
        });
    }); 

    closeEl.addEventListener('click', () => {
        modalEl.close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalEl.close();
        }
    });

    emailEl.addEventListener('input', validateEmail);

    confirmEl.addEventListener('input', validateConfirmEmail);

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

    const isEmailValid = validateEmail();
    const isConfirmValid = validateConfirmEmail();

    if (isEmailValid && isConfirmValid) {
        formEl.submit();
        modalEl.close();
    } else {
        console.log('Form Not Submitted');
    }
});

})();
