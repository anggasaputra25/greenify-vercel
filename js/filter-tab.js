document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('#btn-filter');
    const courseCards = document.querySelectorAll('#course-content');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button style
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-[#00855E]', 'text-white');
                btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:bg-gray-50');
            });
            
            button.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:bg-gray-50');
            button.classList.add('bg-[#00855E]', 'text-white');
            
            // Get filter value
            const filterValue = button.textContent.trim();
            
            // Filter courses with animation
            courseCards.forEach(card => {
                const levelBadge = card.querySelector('#level-badge');
                
                if (!levelBadge) return;
                
                const cardLevel = levelBadge.textContent.trim();
                
                if (filterValue === 'All' || cardLevel === filterValue) {
                    // Show card with fade in
                    gsap.to(card, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        onStart: () => {
                            card.style.display = 'block';
                        }
                    });
                } else {
                    // Hide card with fade out
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.3,
                        ease: "power2.in",
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
});