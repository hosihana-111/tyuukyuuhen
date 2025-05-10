  // カルーセル
  
    $('.slides').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      arrows: false,
      cssEase: 'linear'
    });
  
 
 
 // ハンバーガー   
 $("#hamburger-block").click( 
  function() {
    $(".nav-sp").toggle(300)
  }
);
$("#hamburger-block").click(
  function() {
  $(".nav-sp").toggle(300)
  $(".hamburger").toggleClass("active")
  }
  );


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