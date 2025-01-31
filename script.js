// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Modal Handling for Services
function openModal(serviceTitle) {
    const modal = document.getElementById('service-modal');
    const serviceTitleElement = document.getElementById('service-title');
    const serviceDescriptionElement = document.getElementById('service-description');

    serviceTitleElement.textContent = serviceTitle;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('service-modal').style.display = 'none';
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
