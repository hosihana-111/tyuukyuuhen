'use strict';
    // カルーセル
  $(document).ready(function() {
     
      $('.slider').slick({
         autoplay: true,
        infinite: true,
         autoplaySpeed: 5000,
         arrows: false,
          cssEase: 'linear'
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