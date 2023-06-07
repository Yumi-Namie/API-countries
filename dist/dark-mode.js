"use strict";
const btnDark = document.querySelector('.btn-dark-theme');
if (btnDark) {
    btnDark.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            btnDark.innerHTML = `
        <i class="far fa-sun"></i>
        Light Mode
      `;
        }
        else {
            btnDark.innerHTML = `
        <i class="far fa-moon"></i>
        Dark Mode
      `;
        }
    });
}
