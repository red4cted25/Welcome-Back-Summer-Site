window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 150) { 
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; 
    } else {
        header.style.backgroundColor = 'transparent';
    }
});