import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

//console.log('Hello world');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",    // 讓每個 slide 自己決定寬度
  slidesOffsetBefore: 16,   // 左邊空白
  //slidesOffsetAfter: 16,    // 右邊空白
  spaceBetween: 8,
  //每個內容之間的間隔為 16px 。

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  pagination: {
    el: '.swiper-pagination', //指定分頁器的 DOM 容器。
    type: 'bullets', //分頁器用「小圓點」顯示。
    clickable: true, //→ 允許使用者直接點擊圓點切換。
  },
  breakpoints: {
    992: { // >=992px (桌機)
      //slidesOffsetBefore: 312, // 左邊空白
      spaceBetween: 16,
    }
  }

});