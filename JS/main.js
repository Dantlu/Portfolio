/*FUNCIONALIDAD DEL ICONO DE MENU*/

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.nabvar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
};

let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .stack-container, .portfolio-box, .contact form', { origin:'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});

const typed = new Typed('.multiple-text',{
    strings: ['Analista de Datos', 'Desarrollador'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});