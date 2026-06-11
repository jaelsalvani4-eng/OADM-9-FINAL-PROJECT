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