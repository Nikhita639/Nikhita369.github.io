// Animate sections on scroll
const sections = document.querySelectorAll('.slide-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = "0.1s";
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
