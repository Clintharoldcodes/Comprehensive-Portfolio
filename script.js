// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Animate stats counting
const stats = document.querySelectorAll('.stats div span');

stats.forEach(stat => {
    const value = +stat.textContent;
    stat.textContent = '0';
    let count = 0;
    const speed = 20; // lower is faster
    const interval = setInterval(() => {
        count++;
        stat.textContent = count;
        if (count >= value) clearInterval(interval);
    }, speed);
});
