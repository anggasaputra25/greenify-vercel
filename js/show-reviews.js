function showReviews(reviews, btn) {
    // Sembunyikan semua review terlebih dahulu
    const allReviews = document.querySelectorAll(".component-review");
    allReviews.forEach(review => {
        review.classList.remove("hidden");
        review.classList.remove("flex");
        review.classList.add("hidden");
    });

    // Tampilkan review yang dipilih
    reviews.forEach(className => {
        const reviewElement = document.querySelector(`.${className}`);
        if (reviewElement) {
            reviewElement.classList.remove("hidden");
            reviewElement.classList.add("flex");
        }
    });
    
    // Reset semua tombol
    const allButtons = document.querySelectorAll(".review-btn");
    allButtons.forEach(btn => {
        btn.classList.remove("bg-[#00855E]");
        btn.classList.add("bg-gray-300");
    });

    // Warnai tombol aktif
    if (document.querySelector(`.${btn}`)) {
        document.querySelector(`.${btn}`).classList.remove("bg-gray-300");
        document.querySelector(`.${btn}`).classList.add("bg-[#00855E]");
    }
}