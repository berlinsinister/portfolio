let heart = document.querySelector('.heart');
let arrows = document.querySelectorAll('.arrow');
let links = document.querySelectorAll('.link');
let listlinks = document.querySelectorAll('.link-li');
let audio = document.querySelector('#audio');
let heartbeat = document.querySelector('#heartbeat-audio');
let delay = 400;
let beat = false;

heart.addEventListener('click', () => {
    beat = !beat;
    beat === true ? heartbeat.play() : heartbeat.pause();
});

setInterval(() => {
    heart.classList.toggle('heart-blink');
    for (arrow of arrows)
        arrow.classList.toggle('arrow-blink');
}, delay);

audio.volume = 0.5;

for (arrow of arrows) {
    arrow.addEventListener('click', () => {
        audio.play();
    });
}

let fa = '<i class="fa fa-angle-right"></i>';
let falen = fa.length;
for (let link of links) {
    link.addEventListener('mouseover', () => {
        link.innerHTML = fa + link.innerHTML;
        audio.play();
    });
    link.addEventListener('mouseout', () => {
        link.innerHTML = link.innerHTML.slice(falen);
    });
}

for (let link of listlinks) {
    link.addEventListener('mouseover', () => {
        link.innerHTML = fa + link.innerHTML;
        audio.play();
    });
    link.addEventListener('mouseout', () => {
        link.innerHTML = link.innerHTML.slice(falen);
    });
}