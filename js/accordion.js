document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Set initial state for all sections except first one
    document.querySelectorAll('.accordion-content').forEach((content, index) => {
        if (index !== 0) {
            gsap.set(content, { height: 0, opacity: 0, overflow: 'hidden' });
        }
    });
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const icon = header.querySelector('.accordion-icon');
            
            const isOpen = !content.classList.contains('hidden');
            
            if (isOpen) {
                // Close accordion
                gsap.to(content, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () => {
                        content.classList.add('hidden');
                    }
                });
                
                // Rotate icon
                gsap.to(icon, {
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                
                // icon.classList.remove('fa-chevron-down');
                // icon.classList.add('fa-chevron-right');
            } else {
                // Open accordion
                content.classList.remove('hidden');
                
                gsap.fromTo(content, 
                    { height: 0, opacity: 0 },
                    {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    }
                );
                
                // Rotate icon
                gsap.to(icon, {
                    rotation: 90,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            }
        });
    });
});