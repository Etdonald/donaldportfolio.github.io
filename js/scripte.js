/*=============== le toggle icon navbar =============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== scroll section active lien =================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });


    /*========== sticky navigation bar =================================*/
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== supprimer toggle icon et navbar en click sur navbar link(scroll) =========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*========== scroll reveal =========*/
ScrollReveal({ 
    reset: true,
    distance :'80px',
    duration : 2000,
    delay : 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*========== typed js =========*/
const typed = new Typed('.multiple-text', {
    strings: ['Developpeur Frontend', 'Developpeur Backend'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function toggleText(event) {
    event.preventDefault(); // Empêche le lien de recharger la page
    let moreText = document.getElementById("plus");
    let btnText = document.getElementById("toggleBtn");
    

    if (moreText.style.display === "none") {
        moreText.style.display = "inline"; // Affiche le texte caché
        
        btnText.textContent = "Voir Moins"; // Change le texte du bouton
    } else {
        moreText.style.display = "none"; // Cache à nouveau le texte
        btnText.textContent = "Voir Plus";
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    // Validation simple : vérifier si tous les champs sont remplis
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');
    
    if (!name.value || !email.value || !message.value) {
        e.preventDefault(); // Empêche l'envoi si un champ est vide
        alert('Tous les champs doivent être remplis!');
    }
});


