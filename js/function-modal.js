function showModal(){
    const modal = document.getElementById("modal");
    const formContainer = document.getElementById("modal-form");
    
    // Set display flex dan initial state
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    
    // Set initial state untuk animasi
    gsap.set(modal, { opacity: 0 });
    gsap.set(formContainer, { scale: 0.8, opacity: 0 });
    
    // Animate modal background
    gsap.to(modal, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    });
    
    // Animate form container dengan slight delay
    gsap.to(formContainer, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.2)",
        delay: 0.1
    });
}

function closeModal(){
    const modal = document.getElementById("modal");
    const formContainer = document.getElementById("modal-form");
    
    // Animate out
    gsap.to(formContainer, {
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in"
    });
    
    gsap.to(modal, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const formContainer = document.getElementById("modal-form");

    modal.addEventListener('click', closeModal);

    formContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});