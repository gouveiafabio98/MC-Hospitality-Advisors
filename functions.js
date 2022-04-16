function mailTo() {
    window.location.href = 'mailto:rita@mchospitalityadvisors.com'
}

function contacts() {
    window.location.href = 'contacts.html'
}

function updateVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

updateVh();

window.addEventListener('resize', (event) => {
    updateVh();
    onScrollMenu();
});


window.addEventListener('load', (event) => {
    document.body.classList.remove("preload");
});

AOS.init();

const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

scroller.on('scroll', (instance) => {
    onScrollMenu(instance.scroll.y);
});

scroller.on('scrollFinished', (instance) => {
    onScrollMenu(instance.scroll.y);
});

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        } else {
            entry.target.classList.remove('aos-animate');
        }
    });
});

document.querySelectorAll('[data-aos]').forEach(aosElem => {
    observer.observe(aosElem)
});

window.onload = function() {
    scroller.update();
}