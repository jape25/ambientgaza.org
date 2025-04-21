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

    // Initialize social sharing
    initSocialSharing();
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

/**
 * Initialize social sharing functionality
 */
function initSocialSharing() {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const shareText = encodeURIComponent("Ambient Gaza: an immersive music project weaving soundscapes from Gaza as an act of non-erasure and solidarity.");

    // Twitter share
    document.getElementById('shareTwitter').addEventListener('click', function () {
        window.open(`https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}`, '_blank');
    });

    // Facebook share
    document.getElementById('shareFacebook').addEventListener('click', function () {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank');
    });

    // Telegram share
    document.getElementById('shareTelegram').addEventListener('click', function () {
        window.open(`https://t.me/share/url?url=${pageUrl}&text=${shareText}`, '_blank');
    });

    // WhatsApp share
    document.getElementById('shareWhatsapp').addEventListener('click', function () {
        window.open(`https://api.whatsapp.com/send?text=${shareText} ${pageUrl}`, '_blank');
    });

    // Copy link
    document.getElementById('copyLink').addEventListener('click', function () {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = window.location.href;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Show feedback
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            this.innerHTML = originalText;
        }, 2000);
    });
} 