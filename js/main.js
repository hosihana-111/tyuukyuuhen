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
  header.classList.toggle("scroll-nav", window.scrollY > 800);
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
// const modalBtns = document.querySelectorAll(".modal-toggle");
// modalBtns.forEach(function (btn) {
//   btn.onclick = function () {
//     var modal = btn.getAttribute('data-modal');
//     document.getElementById(modal).style.display = "block";
//   };
// });
// const closeBtns = document.querySelectorAll(".modal-close");
// closeBtns.forEach(function (btn) {
//   btn.onclick = function () {
//     var modal = btn.closest('.modal');
//     modal.style.display = "none";
//   };
// });

// window.onclick = function (event) {
//   if (event.target.className === "modal") {
//     event.target.style.display = "none";
//   }
// };
const modalBtns = document.querySelectorAll(".modal-toggle");
const closeBtns = document.querySelectorAll(".modal-close");

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.classList.add('modal-open'); // 追加：スクロール禁止
  };
});

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    const modal = btn.closest('.modal');
    modal.style.display = "none";
    document.body.classList.remove('modal-open'); // 追加：スクロール復活
  };
});

// 背景クリックで閉じる
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.classList.remove('modal-open'); // 追加：スクロール復活
  }
};




//TOPに戻るボタン
const scrollTopBtn = document.querySelector('.page-top');
const modals = document.querySelectorAll('.modal');
const modalToggles = document.querySelectorAll('.modal-toggle');
const modalCloses = document.querySelectorAll('.modal-close');

// モーダルを開くとき
modalToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const modalId = toggle.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
      scrollTopBtn.classList.add('hide-while-modal');
    }
  });
});

// モーダルを閉じるとき
modalCloses.forEach(close => {
  close.addEventListener('click', (e) => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
    // スクロール位置が100px以上なら表示復帰
    if (window.scrollY > 100) {
      scrollTopBtn.classList.remove('hide-while-modal');
    }
  });
});

// TOPに戻るボタンの表示制御
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add('visible');
    // モーダルが開いていない場合のみ表示
    if (![...modals].some(m => m.style.display === 'block')) {
      scrollTopBtn.classList.remove('hide-while-modal');
    }
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});


//プライバシーポリシー
//   document.querySelector('.toggle-policy').addEventListener('click', function () {
//   const box = document.querySelector('.privacy-policy-box');
//   box.classList.toggle('expanded');
//   this.textContent = box.classList.contains('expanded') ? '閉じる' : '全文を読む';
// });

const toggleBtn = document.querySelector('.toggle-policy');
if (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    const box = document.querySelector('.privacy-policy-box');
    box.classList.toggle('expanded');
    this.textContent = box.classList.contains('expanded') ? '閉じる' : '全文を読む';
  });
}