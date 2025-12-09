function smoothScroll(targetElement) {
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        const sideMenu = document.getElementById('sideMenu');
        const overlay = document.getElementById('overlay');
        if (sideMenu && sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu-icon');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    
    if (menuIcon && sideMenu && overlay) {

        function openMenu() {
            sideMenu.classList.add('open');
            overlay.classList.add('show');
        }

        function closeMenu() {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
        }

        menuIcon.addEventListener('click', openMenu);
        
        overlay.addEventListener('click', closeMenu);

        const sideMenuLinks = sideMenu.querySelectorAll('a');
        sideMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});

document.querySelectorAll('.side-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            smoothScroll(targetElement);
        });
    });

function redirectToAccount() {
    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
        window.location.href = "accmanage.html";
    } else {
        window.location.href = "login.html";
    }
}

