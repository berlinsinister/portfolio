let magentas = document.querySelectorAll('.magenta');
let cyans = document.querySelectorAll('.cyan');

let willkommen = document.querySelector('.willkommen');

let arrows = document.querySelectorAll('.arrow');

let lettersCyan = document.querySelectorAll('.letter-cyan');

let contactLinks = document.querySelectorAll('.contact-link');
let listLinks = document.querySelectorAll('.link-li');

let audio = document.querySelector('#audio');

let delay = 2000;
let random;

// fixed delay
setInterval(() => {
    for (let magenta of magentas)
        magenta.classList.toggle('decoration-blink');
    for (arrow of arrows)
        arrow.classList.toggle('arrow-blink');
}, delay / 4);

// random delay
setInterval(() => {
    random = Math.floor(Math.random() * 10);
    // console.log(random);
    for (let cyan of cyans)
        cyan.classList.toggle('decoration-blink');
    for (let cyan of lettersCyan) {
        cyan.classList.toggle('letter-blink');
    }
}, delay / random);

willkommen.addEventListener('mouseenter', () => {
    willkommen.classList.add('mouseenter-x');
    setTimeout(() => {
        willkommen.classList.add('mouseenter-y');
    }, 100);
    setTimeout(() => {
        willkommen.classList.remove('mouseenter-x');
        willkommen.classList.remove('mouseenter-y');
    }, 200);
});

audio.volume = 0.5;

for (arrow of arrows) {
    arrow.addEventListener('click', () => {
        audio.play();
    });
}

// click on contact
let fa = '<i class="fa fa-angle-right"></i>';
let falen = fa.length;
for (let link of contactLinks) {
    link.addEventListener('mouseover', () => {
        audio.play();
    });
}

// phone show
let phone = document.querySelector('#phone');
phone.addEventListener('mouseover', () => {
    phone.innerHTML = '593 95 17 33';
});

phone.addEventListener('mouseout', () => {
    let img = '<img src="images/contacts/tel.png" alt="phone">';
    phone.innerHTML = img + 'call me';
});

for (let link of listLinks) {
    link.addEventListener('mouseover', () => {
        link.innerHTML = fa + link.innerHTML;
        audio.play();
    });
    link.addEventListener('mouseout', () => {
        link.innerHTML = link.innerHTML.slice(falen);
    });
}

// projects slider
let active = 0;
let projects = document.querySelectorAll('.single-project');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

// console.log(projects, leftArrow, rightArrow);

leftArrow.addEventListener('click', () => {
    projects[active].classList.remove('active');
    projects[active].classList.add('hidden');
    if (active - 1 == -1)
        active = projects.length - 1;
    else
        active--;
    projects[active].classList.add('active');
    projects[active].classList.remove('hidden');
});

rightArrow.addEventListener('click', () => {
    projects[active].classList.remove('active');
    projects[active].classList.add('hidden');
    if (active + 1 == projects.length)
        active = 0;
    else
        active++;
    projects[active].classList.add('active');
    projects[active].classList.remove('hidden');
});