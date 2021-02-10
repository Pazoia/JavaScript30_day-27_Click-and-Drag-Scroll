const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function handleClicked(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function handleLeave() {
    isDown = false;
    slider.classList.remove('active');
}

function scrolling(e) {
    if (!isDown) return; // stop the fun from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', handleClicked);
slider.addEventListener('mouseleave', handleLeave);
slider.addEventListener('mouseup',handleLeave);
slider.addEventListener('mousemove', scrolling);
