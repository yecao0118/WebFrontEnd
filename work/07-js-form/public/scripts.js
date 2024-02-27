"use strict";

(function () {
    const formEL = document.querySelector('.registration-form');
    const nameEL = document.querySelector('.name-input');
    const nameErrorEL = document.querySelector('.name-error');
    const emailEL = document.querySelector('.email-input');
    const emailErrorEL = document.querySelector('.email-error');
    const confirmEmailEL = document.querySelector('.confirm-input');
    const confirmEmailErrorEL = document.querySelector('.confirm-error');

    function checkNameInput() {
        if (!nameEL.value.trim()) {
            nameErrorEL.innerText = 'Name is required.';
        } else {
            nameErrorEL.innerText = '';
        }
    }
    
    nameEL.addEventListener('input', checkNameInput);

    formEL.addEventListener('submit', (e) => {
        let isValid = true;
        
        if (!checkNameInput()) {
            isValid = false;
        }
           
        if (!emailEL.value.trim()) {
            emailErrorEL.innerText = 'Email is required.';
            isValid = false; 
        } else {
            emailErrorEL.innerText = '';
        }

        if (emailEL.value.trim() !== confirmEmailEL.value.trim()) {
            confirmEmailErrorEL.innerText = 'Emails must match.';
            isValid = false;
        } else {
            confirmEmailErrorEL.innerText = '';
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
})();


