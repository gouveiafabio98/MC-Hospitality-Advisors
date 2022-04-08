function mailTo() {
    window.location.href = 'mailto:rita@mchospitalityadvisors.com'
}

function updateVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

updateVh();

window.addEventListener('resize', updateVh);