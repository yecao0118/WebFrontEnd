"use strict";

(function () {
    const buttonEl = document.querySelector("button");
    const menuEl = document.querySelector(".dropdown-content");

    function toggleMenu() {
        menuEl.classList.toggle("open");
    }
    
    buttonEl.addEventListener('click', toggleMenu);
})();

