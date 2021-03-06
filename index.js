let audio = document.querySelector('#audio');
let delay = 2000;
let random;

audio.volume = 0.5;

// fixed delay on magentas
let magentas = document.querySelectorAll('.magenta');
setInterval(() => {
    for (let magenta of magentas)
        magenta.classList.toggle('decoration-blink');
    for (arrow of arrows)
        arrow.classList.toggle('arrow-blink');
}, delay / 4);

// random delay on cyans
let cyans = document.querySelectorAll('.cyan');
let lettersCyan = document.querySelectorAll('.letter-cyan');
setInterval(() => {
    random = Math.floor(Math.random() * 10);
    // console.log(random);
    for (let cyan of cyans)
        cyan.classList.toggle('decoration-blink');
    for (let cyan of lettersCyan) {
        cyan.classList.toggle('letter-blink');
    }
}, delay / random);

// on main image mouse over
let willkommen = document.querySelector('.willkommen');
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

// click on decoration links
let decorationLinks = document.querySelectorAll('.decoration-link');
for (let link of decorationLinks) {
    link.addEventListener('click', () => {
        audio.play();
    });
}

// click on arrows
let arrows = document.querySelectorAll('.arrow');
for (arrow of arrows) {
    arrow.addEventListener('click', () => {
        audio.play();
    });
}

// click on navigation links
let navigationLinks = document.querySelectorAll('.navigation-link');
for (let link of navigationLinks) {
    link.addEventListener('click', () => {
        audio.play();
    });
}

// mouseover and mouseout on list links
let listLinks = document.querySelectorAll('.link-li');
for (let link of listLinks) {
    link.addEventListener('mouseover', () => {
        if (link.innerHTML[0] != fa[0]) // for rocket logo
            link.innerHTML = fa + link.innerHTML;
        audio.play();
    });
    link.addEventListener('mouseout', () => {
        link.innerHTML = link.innerHTML.slice(falen);
    });
}

// mouseover on contact links
let contactLinks = document.querySelectorAll('.contact-link');
let fa = '<i class="fa fa-angle-right"></i>';
let falen = fa.length;
for (let link of contactLinks) {
    link.addEventListener('mouseover', () => {
        audio.play();
    });
}

// phone show
let phone = document.querySelector('#phone');
let img = '<img src="images/contacts/tel.png" alt="phone">';
phone.addEventListener('mouseover', () => {
    phone.innerHTML = img + '593 95 17 33';
});

phone.addEventListener('mouseout', () => {
    phone.innerHTML = img + 'call me';
});

// projects slider
let active = 0;
let projects = document.querySelectorAll('.single-project');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

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

// show right navigation bar on scroll
let navigation = document.querySelector('#navigation');
window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y >= 500) {
        navigation.classList.add('navigation');
        navigation.classList.remove('hidden');
    } else {
        navigation.classList.remove('navigation');
        navigation.classList.add('hidden');
    }
});