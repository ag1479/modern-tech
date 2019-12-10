$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $("#back-to-top-btn").fadeIn(1000);
    } else {
      $("#back-to-top-btn").fadeOut(1000);
    }
  });

  $("#back-to-top-btn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 20);
  });
});
