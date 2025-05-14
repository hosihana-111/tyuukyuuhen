  // カルーセル
$(document).ready(function () {
  if (window.innerWidth <= 767) {
    // SP用スライダーを初期化
    $('.slider-sp').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      arrows: false,
      cssEase: 'linear'
    });
  } else {
    // PC用スライダーを初期化
    $('.slider-pc').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      arrows: false,
      cssEase: 'linear'
    });
  }
});

//ヘッダー追従
window.addEventListener("scroll", function () {
  // ヘッダーを変数の中に格納する
  const header = document.querySelector(".header");
  // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});
 
 
 // ハンバーガー   
$("#hamburger-block").click(function() {
  $(".nav-sp").toggle(300); // メニュー表示/非表示
  $(".hamburger").toggleClass("active"); // ハンバーガー見た目切り替え
});


  // モーダル

    const modalImg = document.querySelectorAll(".modal-toggle");
  modalImg.forEach(function (img) {
    img.onclick = function () {
      var modal = img.getAttribute('data-modal'); 
      document.getElementById(modalId).style.display = "block";
    };
  });
  
  const closeBtns = document.querySelectorAll(".modal-close");
  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      var modal = btn.closest('.modal');
      modal.style.display = "none";
    };
  });
  
  // モーダル背景クリックで閉じる
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };

  $(".target").click(function() {
  $(this).css('color','red');
});

//TOPに戻る
const scrollTopBtn = document.querySelector('.page-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 900) {
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