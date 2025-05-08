// Simple script for the Brainrot landing page

document.addEventListener('DOMContentLoaded', function() {
    // Check if the video element exists and handle fallback if needed
    const appDemo = document.getElementById('app-demo');
    
    if (appDemo && appDemo.tagName === 'VIDEO') {
        // Add error handler to show fallback image if video fails to load
        appDemo.addEventListener('error', function() {
            const fallbackImg = document.createElement('img');
            fallbackImg.src = 'images/app-screenshot.jpg';
            fallbackImg.alt = 'Brainrot App Screenshot';
            fallbackImg.style.width = '100%';
            fallbackImg.style.height = '100%';
            fallbackImg.style.objectFit = 'cover';
            
            appDemo.parentNode.replaceChild(fallbackImg, appDemo);
        });
    }
    
    // Subtle parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const iphone = document.querySelector('.iphone');
        
        if (iphone) {
            const moveValue = scrollPosition * 0.05;
            iphone.style.transform = `translateY(${moveValue}px)`;
        }
    });
});
