/*FUNCIONALIDAD DEL ICONO DE MENU*/

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.nabvar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle(fa-xmark);
    navBar.classList.toggle('active');
};

let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigh = sec.offsetHeigh;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigh){
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