let lastScrollPosition = 0; // Tracks the last scroll position
const header = document.querySelector('.header'); // Header element

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
        // Scrolling down
        header.classList.add('hide');
    } else {
        // Scrolling up
        header.classList.remove('hide');
    }

    lastScrollPosition = currentScrollPosition;
});
