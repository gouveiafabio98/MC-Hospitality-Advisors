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

function blockScroll() {
    if (menu.status)
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    else
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
}