// Intersection Observer for animations
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-section');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Fade-in effect
document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.transition = "opacity 1s";
        el.style.opacity = 1;
    }, 300);
});
