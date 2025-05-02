  $(document).ready(function () {
    let current = 0;
    const slides = $('.slide');
    const slideCount = slides.length;
    const interval = 5000; // 3秒ごと
  
    function showNextSlide() {
      slides.eq(current).fadeOut(1000).removeClass('active');
      current = (current + 1) % slideCount;
      slides.eq(current).fadeIn(1000).addClass('active');
    }
  
    // 最初のスライド表示
    slides.eq(current).fadeIn(1000);
  
    // 自動再生
    setInterval(showNextSlide, interval);
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