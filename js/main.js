'use strict';

$(document).ready(function () {
  // slick
  $('.slider').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: 'linear'
  });

  // ハンバーガー
  $('.header__hb-btn').click(function () {
    $(this).toggleClass('active');
    $('.header__nav-list').toggleClass('active');
  });
  $('.header__nav-list a').on('click', function () {
    $('.header__hb-btn').removeClass('active');
    $('.header__nav-list').removeClass('active');
  });

  // 要素取得
  const fv = document.getElementById('fv');
  const header = document.querySelector('.header');
  const pageTop = document.querySelector('.page-top');
  const modals = document.querySelectorAll('.modal');
  const modalToggles = document.querySelectorAll('.modal-toggle');
  const modalCloses = document.querySelectorAll('.modal-close');

  // scroll時の制御（ヘッダー＋戻るボタン＋モーダル判定）
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fvHeight = fv ? fv.offsetHeight : 0;

    // ヘッダー
    if (scrollY > fvHeight) {
      header?.classList.add('is-change');
      pageTop?.classList.add('is-change');
    } else {
      header?.classList.remove('is-change');
      pageTop?.classList.remove('is-change');
    }

    // モーダルが開いていれば戻るボタンを隠す
    const isModalOpen = Array.from(modals).some(m => m.style.display === 'block');
    if (isModalOpen) {
      pageTop?.classList.add('hide-while-modal');
    } else {
      pageTop?.classList.remove('hide-while-modal');
    }
  });

  // モーダル開閉処理
  modalToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const modalId = toggle.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
      }
    });
  });

  modalCloses.forEach(close => {
    close.addEventListener('click', () => {
      const modal = close.closest('.modal');
      if (modal) modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  });

  // 背景クリックでモーダル閉じる
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
      document.body.classList.remove('modal-open');
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