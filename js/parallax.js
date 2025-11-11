// Hero Section Leaves
const leafRight = document.querySelector('#leafRight');
const leafLeft = document.querySelector('#leafLeft');

window.addEventListener('scroll', () => {
    // Ambil posisi scroll saat ini
    let scrollYPos = window.scrollY;

    // Atur kecepatan gerak masing-masing daun
    let translateY = scrollYPos/2;
    let rotate = scrollYPos/5;

    // Terapkan transformasi
    leafRight.style.transform = `translateY(-${translateY}px) rotate(-${rotate}deg)`;
    leafLeft.style.transform = `translateY(-${translateY}px) rotate(-${rotate}deg)`;
});

//Feature Section Plant
const plantFeature = document.querySelector('#plantFeature');
window.addEventListener('scroll', () => {
    const rect = features.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Cek apakah section features sedang terlihat di layar
    const inView = rect.top < windowHeight && rect.bottom > 0;

    if(inView){
        // Ambil posisi scroll saat ini
        let scrollYPos = window.scrollY;
    
        // Atur kecepatan gerak masing-masing daun
        let scale = scrollYPos/2000;
    
        // Terapkan transformasi
        plantFeature.style.transform = `scale(${scale})`;
    }
});


// Reviews Section Leaves
const rleafRight = document.querySelector('#rleafRight');
const rleafLeft = document.querySelector('#rleafLeft');

window.addEventListener('scroll', () => {
    const rect = reviews.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Cek apakah section reviews sedang terlihat di layar
    const inView = rect.top < windowHeight && rect.bottom > 0;

    if(inView){
        // Ambil posisi scroll saat ini
        let scrollYPos = window.scrollY;
    
        // Atur kecepatan gerak masing-masing daun
        let rotate = scrollYPos/5;
    
        // Terapkan transformasi
        rleafRight.style.transform = `rotate(${rotate}deg)`;
        rleafLeft.style.transform = `rotate(${rotate}deg)`;
    }

});