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

/*FILTROS ACTIVOS*/
let mixerPortfolio = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 300
    }
});

const linkProject = document.querySelectorAll('.item-filtros');

function activeProject(){
    linkProject.forEach(l=>l.classList.remove('filtro-activo'))
    this.classList.add('filtro-activo')
}

linkProject.forEach(l=>l.addEventListener('click', activeProject))

/*MANDAR MAILS*/
const contactForm = document.getElementById('contact'),
      contactName = document.getElementById('contact-name'),
      contactMail = document.getElementById('contact-email'), 
      contactNumber = document.getElementById('contact-number'), 
      contactSub = document.getElementById('contact-subject'),
      contactText = document.getElementById('contact-text')

const sendEmail = (e)=>{
    e.preventDefault()
}

contactForm.addEventListener('submit', sendEmail)