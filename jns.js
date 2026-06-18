 
 function openExpandedViewer(element) {
            const sourceImage = element.querySelector('img').src;
            const lightbox = document.getElementById('photoLightbox');
            const lightboxImg = document.getElementById('lightboxImage');
            
            lightboxImg.src = sourceImage;
            lightbox.classList.remove('hidden');
            
            // Subtle timeout to let the scale animation kick in smoothly
            setTimeout(() => {
                lightboxImg.classList.remove('scale-95');
                lightboxImg.classList.add('scale-100');
            }, 10);
        }

        function closeExpandedViewer() {
            const lightbox = document.getElementById('photoLightbox');
            const lightboxImg = document.getElementById('lightboxImage');
            
            lightboxImg.classList.remove('scale-100');
            lightboxImg.classList.add('scale-95');
            
            setTimeout(() => {
                lightbox.classList.add('hidden');
            }, 150);
        }
    function toggleNavbar() {
        const wrapper = document.getElementById('top-navbar-wrapper');
        const icon = document.getElementById('toggle-icon');
        const text = document.getElementById('toggle-text');
        
        wrapper.classList.toggle('navbar-hidden');
        
        if (wrapper.classList.contains('navbar-hidden')) {
            icon.style.transform = 'rotate(180deg)';
            text.innerText = 'Show Menu';
            // Reduce root scroll offset when menu is tucked away
            document.documentElement.style.setProperty('--scroll-padding', '30px');
        } else {
            icon.style.transform = 'rotate(0deg)';
            text.innerText = 'Hide Menu';
            // Reset to default root scroll offset
            document.documentElement.style.removeProperty('--scroll-padding');
        }
    }