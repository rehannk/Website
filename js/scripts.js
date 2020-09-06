$(document).ready(function () {
    var typed = new Typed(".animateText", {
      strings: ["Developer", "Coffee Lover", "Dark Theme Coder"],
      backSpeed: 60,
      smartBackspace: true,
      backDelay: 1000,
      startDelay: 1000,
      typeSpeed: 60,
      loop: true,
    });
  
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
        $(".goTop").fadeIn();
        $(".hero").fadeOut();
      } else {
        $(".navbar").removeClass("sticky");
        $(".goTop").fadeOut();
        $(".hero").fadeIn();
      }
    });
  
    $(".goTop").click(function () {
      scroll(0, 0);
    });
  
    $(".menu-toggler").click(function () {
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  
    $(".navbar-menu > a").click(function () {
      $(".menu-toggler").removeClass("active");
      $(".navbar-menu").removeClass("active");
    });
  
    $(".works").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: { enabled: true },
    });
  });
  
