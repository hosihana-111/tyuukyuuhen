  // カルーセル
$(document).ready(function() {
    if (window.innerWidth <= 767) {
      $('.slider-sp').css('display', 'block');
      $('.slider-sp').slick({
        autoplay: true,       
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
        cssEase: 'linear'
      });
    } else {
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
  const header = document.querySelector(".header");
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});
 
 
 // ハンバーガー   
$("#hamburger-block").click(function() {
  $(".nav-sp").toggle(300); // メニュー表示/非表示
  $(".hamburger").toggleClass("active"); // ハンバーガー見た目切り替え
});


    // モーダルを開く
  document.querySelectorAll(".bg-item .img-box > img").forEach((img) => {
    img.addEventListener("click", () => {
      const modalImgSrc = img.getAttribute("data-modal-img"); // 別画像
      const caption = img.getAttribute("alt");

      // モーダル表示
      const modal = document.querySelector(".modal-block");
      modal.style.display = "flex";
      modal.querySelector("#popup").setAttribute("src", modalImgSrc);
      modal.querySelector(".caption").textContent = caption;
    });
  });

  // モーダルの背景クリックで閉じる
  document.querySelector(".modal-block").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.style.display = "none";
    }
  });

  // 閉じるボタンがある場合（例：spanタグ）に閉じる
  document.querySelector(".img-section > span").addEventListener("click", () => {
    document.querySelector(".modal-block").style.display = "none";
  });



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