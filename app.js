const HTML = document.querySelector("html");

window.addEventListener("load", () => {
    const header = document.querySelector(".header");
    let menuMobileBtn = document.querySelector(".menuMobile__btn");
    if (menuMobileBtn) {
        menuMobileBtn.addEventListener("click", () => {
            header.classList.toggle("menuMobile__open");

            if (header.classList.contains("menuMobile__open")) {
                HTML.style.overflow = "hidden";
            } else {
                HTML.style.overflow = "inherit";
            }
        });
    }

    let pepitos = document.querySelector(".pepitos");
    if (pepitos) {
        let slider = new Swiper(pepitos, {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});
