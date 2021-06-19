$(function() {
  //change nav when scrolling
  $(document).scroll(function() {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.parent().height());
    $('header > h1').toggleClass('mediaQueryScroll', $(this).scrollTop() > $nav.parent().height());
  });

  // Smooth scroll
  $('nav a').click(function(e) {
    e.preventDefault();
    var $thisTarget = $(this).attr('href'),
      $targetOffset = $($thisTarget).offset().top
                      - $('nav').height();
    $('html, body').animate({
      scrollTop: $targetOffset
    }, 800);
  });

  //sub-nav menus
  $('.detailsContainer').children().hover(function () {
    $(this).parent().children().last().addClass("detailsActive");
    $(this).parent().children().first().css("backgroundColor", "rgba(233, 233, 233, 0.8)");
  },function () {
    $(this).parent().children().first().css("backgroundColor", "initial");
    $(this).parent().children().last().removeClass("detailsActive");
  })
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}