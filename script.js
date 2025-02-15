document.addEventListener('DOMContentLoaded', function() {
    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.search-bar-container');
    let formBtn = document.querySelector('#login-btn');
    let loginForm = document.querySelector('.login-form-container');
    let formClose = document.querySelector('#form-close');
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let videoBtn = document.querySelectorAll('.vid-btn');

    // Itinerary related elements
    let itineraryBtns = document.querySelectorAll('.itinerary-btn');
    let itineraryContainer = document.querySelector('.itinerary-container');
    let itineraryClose = document.querySelector('#itinerary-close');

    window.onscroll = () => {
        searchBtn.classList.remove('fa-times');
        searchBar.classList.remove('active');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
    }

    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    searchBtn.addEventListener('click', () => {
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
    });

    formBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
    });

    formClose.addEventListener('click', () => {
        loginForm.classList.remove('active');
    });

    videoBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            document.querySelector('#video-slider').src = src;
            
            // Update text content when video changes
            let index = Array.from(videoBtn).indexOf(btn);
            updateSlide(index);
        });
    });

    // Add auto-sliding functionality
    function autoSlide() {
        let activeBtn = document.querySelector('.controls .active');
        let nextBtn = activeBtn.nextElementSibling || document.querySelector('.controls .vid-btn');
        nextBtn.click();
    }

    // Start auto-sliding
    setInterval(autoSlide, 5000);

    // Function to update text slides
    function updateSlide(index) {
        let slides = document.querySelectorAll('.content .slide');
        document.querySelector('.content .slide.active').classList.remove('active');
        slides[index].classList.add('active');
    }

    // Initialize first slide
    updateSlide(0);

    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    var swiper = new Swiper(".brand-slider", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            450: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    // Itinerary functionality
    if (itineraryBtns && itineraryContainer && itineraryClose) {
        itineraryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let package = btn.getAttribute('data-package');
                document.querySelectorAll('.itinerary-details').forEach(details => {
                    details.classList.remove('active');
                });
                let selectedPackage = document.getElementById(package);
                if (selectedPackage) {
                    selectedPackage.classList.add('active');
                }
                itineraryContainer.classList.add('active');
            });
        });

        itineraryClose.addEventListener('click', () => {
            itineraryContainer.classList.remove('active');
        });
    }
});













