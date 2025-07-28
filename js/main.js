'use strict';

$(document).ready(function () {
  // =============================
  // slick 初期化
  // =============================
  $('.slider').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: 'linear'
  });

   // =============================
  // ハンバーガーメニュー操作
  // =============================
  $('.header__hamburger').click(function () {
    $(this).toggleClass('active');
    $('.header__nav-list').toggleClass('active');
    $('.overlay').toggleClass('is-active'); // ← 追加：オーバーレイ切り替え
     $('.page-top').toggleClass('hide-while-modal', $(this).hasClass('active'));
  });

  // メニュー内リンクをクリックしたらメニューとオーバーレイを閉じる
  $('.header__nav-list a').on('click', function () {
    $('.header__hamburger').removeClass('active');
    $('.header__nav-list').removeClass('active');
    $('.overlay').removeClass('is-active'); // ← 追加
    $('.page-top').removeClass('hide-while-modal');
  });

  // オーバーレイをクリックしたらメニューとオーバーレイを閉じる
  $('.overlay').on('click', function () {
    $('.header__hamburger').removeClass('active');
    $('.header__nav-list').removeClass('active');
    $(this).removeClass('is-active'); // 自分自身を非表示
    $('.page-top').removeClass('hide-while-modal');
  });



  // =============================
  // スクロールによるヘッダー・戻るボタン制御
  // =============================

const fv = document.getElementById('fv');
const header = document.querySelector('.header');
const pageTop = document.querySelector('.page-top');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (fv) {
    const fvBottom = fv.offsetTop + fv.offsetHeight;

    // ヘッダー：fvの高さだけを基準に（必要であれば）
    if (scrollY > fvBottom) {
      header?.classList.add('is-change');
      pageTop?.classList.add('is-change');
    } else {
      header?.classList.remove('is-change');
      pageTop?.classList.remove('is-change');
    }
  }
});

// フッターに重ならないようにフッター上で止める
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  if (!pageTop || !footer) return;

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const footerTop = footer.getBoundingClientRect().top + scrollY;
  const pageTopHeight = pageTop.offsetHeight;

  
});




 // =============================
// モーダル開閉制御（＋戻るボタン非表示）
// =============================
const modals = document.querySelectorAll('.modal');
const modalToggles = document.querySelectorAll('.modal-toggle');
const modalCloses = document.querySelectorAll('.modal-close');

modalToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const modalId = toggle.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');

      // ① ヘッダーをモーダルの下に移動
      // header?.classList.add('is-modal-open');

      // ② トップボタンを即時非表示（クラス & スタイルで確実に）
      pageTop.style.display = 'none';
      pageTop.classList.add('hide-while-modal');
    }
  });
});

modalCloses.forEach(close => {
  close.addEventListener('click', () => {
    const modal = close.closest('.modal');
    if (modal) modal.style.display = 'none';
    document.body.classList.remove('modal-open');

    // ① ヘッダーを元に戻す
    // header?.classList.remove('is-modal-open');

    // ② トップボタンを再表示
    pageTop.classList.remove('hide-while-modal');
    pageTop.style.display = '';
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    document.body.classList.remove('modal-open');

    // ① ヘッダーを元に戻す
    // header?.classList.remove('is-modal-open');

    // ② トップボタンを再表示
    pageTop.classList.remove('hide-while-modal');
    pageTop.style.display = '';
  }
});


  // プライバシーポリシー展開
  const toggleBtn = document.querySelector('.toggle-policy');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const box = document.querySelector('.privacy-policy-box');
      box.classList.toggle('expanded');
      this.textContent = box.classList.contains('expanded') ? '閉じる' : '全文を読む';
    });
  }

  // AOS初期化
  AOS.init();
});