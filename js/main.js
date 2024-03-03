const btns = document.querySelectorAll(".header__dot");
const infoHits = document.querySelectorAll(".info-hint");

btns.forEach((item) => {
  item.addEventListener("click", () => {
    const infoHit = item.querySelector(".info-hint");

    infoHit.classList.toggle("info-hint-open");
    console.log("hi");
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        infoHit.classList.remove("info-hint-open");
      }
    });
  });
});

// Есть второй вариант,смотри "Мебельный магазин-автора"

// document.addEventListener("click",()=>{
//     console.log("click")
//     infoHits.forEach(item=>{
//         item.classList.remove("info-hint-open");
//     })
// })

// swiper

const swiper = new Swiper(".swiper", {
  // Navigation arrows
  loop: true,
  slidesPerView: 1,
  spaceBetween: 42,
  freeMode: true,

  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
  },
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

const tabs = document.querySelectorAll(".tab-control_btn");
const tabsProducts = document.querySelectorAll("[data-tab-value]");
const tabsAll = document.querySelector("[data-tab-value]");
const mobilBtnOpen = document.querySelector(".nav__btn");
const mobilMenu = document.querySelector(".mobile-nav-wrapper");
const mobilBtnClouse = document.querySelector(".mobile-nav-btn-close");

// Открыте и закрыте мобильного меню

mobilBtnOpen.addEventListener("click", () => {
  mobilMenu.classList.add("mobile-nav-wrapper--open");
  console.log("mobil");
});
mobilBtnClouse.addEventListener("click", () => {
  mobilMenu.classList.remove("mobile-nav-wrapper--open");
  console.log("mobil");
});
//

tabs.forEach((item) => {
  item.addEventListener("click", () => {
    const header__dot = document.querySelectorAll(".tab-control_btn");
    header__dot.forEach((item) => {
      item.classList.remove("tab-control_btn--active");
    });
    // скрывает все товары
    item.classList.add("tab-control_btn--active");
    console.log("tabi", item.dataset.tab);
    tabsProducts.forEach((elem) => {
      if (item.dataset.tab === "all") {
        elem.classList.remove("card__off");
      } else {
        if (elem.dataset.tabValue === item.dataset.tab) {
          elem.classList.remove("card__off");
        } else {
          elem.classList.add("card__off");
        }
      }

      // console.log(elem.dataset.tabValue)
    });
    swiper.update();
  });
});

// tabs.forEach(item=>{
//     item.addEventListener("click", ()=>{
//         const header__dot = document.querySelectorAll('.tab-control_btn');
//         for (let i = 0; i < header__dot.length; i++) {
//         header__dot[i].classList.remove("tab-control_btn--active");
// }       item.classList.add("tab-control_btn--active")
//         console.log("tabs")
//     })
// })
