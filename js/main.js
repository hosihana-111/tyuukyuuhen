'use strict';
//    カルーセル
//  $(document).ready(function() {
//      if (window.innerWidth <= 767) {
//       $('.slider-sp').css('display', 'block');
//        $('.slider-sp').slick({
//          autoplay: true,       
//          infinite: true,
//         autoplaySpeed: 5000,
//          arrows: false,
//          cssEase: 'linear'
//        });
//      } else {
//        $('.slider-pc').slick({
//         autoplay: true,
//          infinite: true,
//         autoplaySpeed: 5000,
//         arrows: false,
//          cssEase: 'linear'
//        });
//      }
//    });
$(document).ready(function () {
  let currentMode = '';

  function initializeSlider() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 767 && currentMode !== 'SP') {
      // PCスライダーを破棄
      if ($('.slider-pc').hasClass('slick-initialized')) {
        $('.slider-pc').slick('unslick');
      }

      // SPスライダーを表示＆初期化
      $('.slider-sp').css('display', 'block');
      if (!$('.slider-sp').hasClass('slick-initialized')) {
        $('.slider-sp').slick({
          autoplay: true,
          infinite: true,
          autoplaySpeed: 5000,
          arrows: false,
          cssEase: 'linear'
        });
      }

      currentMode = 'SP';
    } else if (windowWidth > 767 && currentMode !== 'PC') {
      // SPスライダーを破棄
      if ($('.slider-sp').hasClass('slick-initialized')) {
        $('.slider-sp').slick('unslick');
      }

      // PCスライダーを初期化
      if (!$('.slider-pc').hasClass('slick-initialized')) {
        $('.slider-pc').slick({
          autoplay: true,
          infinite: true,
          autoplaySpeed: 5000,
          arrows: false,
          cssEase: 'linear'
        });
      }

      currentMode = 'PC';
    }
  }

  // 初期化
  initializeSlider();

  // ウィンドウリサイズ時に再判定
  $(window).on('resize', function () {
    initializeSlider();
  });
});

//ヘッダー追従
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});
 
 
 // ハンバーガー  
$(function(){

  $('.header__hb-btn').click(function(){
    $(this).toggleClass('active');
    $('.header__nav-list').toggleClass('active')
  });
}) ;
 

// $("#hamburger-block").click(function() {
//   $(".nav-sp").toggle(300); // メニュー表示/非表示
//   $(".hamburger").toggleClass("active"); // ハンバーガー見た目切り替え
// });

//モーダル
const modalBtns = document.querySelectorAll(".modal-toggle");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  };
});
const closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

   


//TOPに戻るボタン
const scrollTopBtn = document.querySelector('.page-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });