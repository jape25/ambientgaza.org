/**
 * Main JavaScript for Ambient Gaza website
 */

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize sticky navigation
    initStickyNav();

    // Add smooth scrolling for anchor links
    initSmoothScroll();

    // Initialize GDPR notice
    initGdprNotice();
});

/**
 * Initialize sticky navigation behavior
 */
function initStickyNav() {
    const nav = document.querySelector('.sticky-buttons');

    // Show/hide nav based on scroll position
    window.addEventListener('scroll', function () {
        // Only show sticky nav when scrolled down past hero section
        if (window.scrollY > window.innerHeight * 0.8) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize GDPR cookie notice
 */
function initGdprNotice() {
    const gdprNotice = document.querySelector('.gdpr-notice');
    const acceptButton = document.querySelector('.gdpr-accept');

    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        // Show the notice after a short delay
        setTimeout(() => {
            gdprNotice.classList.add('visible');
        }, 1000);
    }

    // Handle accept button click
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            gdprNotice.classList.remove('visible');
        });
    }
} 