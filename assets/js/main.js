document.addEventListener("DOMContentLoaded", function () {

    /**
    * =======================================================================
    * Tooltips
    * =======================================================================
    */

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    /**
    * =======================================================================
    * Sliders 
    * =======================================================================
    */

    // Slider Hero 
    const swiperHero = new Swiper('.slider-hero', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true, 
        
        navigation: {
            nextEl: '.custom-hero-next',
            prevEl: '.custom-hero-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Slider costumers homepage
    const wrapperSliderCostumers = document.querySelector('.slider-costumers .swiper-wrapper');
    
    if (wrapperSliderCostumers) {
        const slides = wrapperSliderCostumers.querySelectorAll('.swiper-slide');
        // Automatically clones slides if there are too few (<12) to ensure Swiper's infinite loop works with centeredSlides
        if (slides.length > 0 && slides.length < 12) {
            for (let i = 0; i < 2; i++) {
                slides.forEach(slide => {
                    const clone = slide.cloneNode(true);
                    wrapperSliderCostumers.appendChild(clone);
                });
            }
        }
    }

    const sliderCostumers = new Swiper('.slider-costumers', {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 5.5,
                spaceBetween: 24,
            }
        }
    });


    // Slider promos
    const wrapperSliderPromos = document.querySelector('.swiper-promo .swiper-wrapper');
 
    let shouldLoop = true;

    if (wrapperSliderPromos) {
        const slides = wrapperSliderPromos.querySelectorAll('.swiper-slide');
        
        if (slides.length <= 4) {
            shouldLoop = false;
        }
        else if (slides.length > 0 && slides.length < 10) {
            slides.forEach(slide => {
                const clone = slide.cloneNode(true);
                wrapperSliderPromos.appendChild(clone);
            });
        }
    }
    const swiperPromo = new Swiper('.swiper-promo', {
        loop: shouldLoop,
        loopAdditionalSlides: 4, 
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.custom-next-promo',
            prevEl: '.custom-prev-promo',
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                centeredSlides: true,
            },
            576: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
                centeredSlides: false,
            }
        },
        on: {
            init: function () {
                if (this.params.loop) {
                    const swiper = this;
                    setTimeout(() => {
                        swiper.slidePrev(0);
                        setTimeout(() => {
                            swiper.slideNext(0);
                        }, 10);
                    }, 50);
                }
            }
        }
    });
});