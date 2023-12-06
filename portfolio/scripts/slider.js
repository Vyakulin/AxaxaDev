const swiper = new Swiper('.swiper-projects', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1180: {
            spaceBetween: 30,
        },
        824: {
            spaceBetween: 15,
        },
        668: {
            spaceBetween: 10,
        },
        310: {
            spaceBetween: 0,
        }
    },
    grabCursor: true
});

const swiper2 = new Swiper('.swiper-reviews', {
    effect: 'coverflow',
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true
});