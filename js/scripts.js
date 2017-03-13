// sticky nav
(function (window) {
  var nav = document.getElementsByTagName("nav")[0];
  // var header = document.getElementsByTagName('header')[0];
   var distanceToTop = nav.getBoundingClientRect().top;
  window.addEventListener("scroll", function(){
    if(window.scrollY > distanceToTop){
      nav.classList.add("main-nav-scrolled");
      // header.style.display = "none";
    } else {
      nav.classList.remove("main-nav-scrolled");
      // header.style.display = "block";

    }
  });
})(window);

(function (window, $){


  // $('a').click(function(e){
  //   e.preventDefault();
  // });

  $('#menu-icon').click(function(e){
    e.preventDefault();
    $('nav ul').toggle('display');
  });


})(window, $);

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-80
        }, 1000);
        return false;
      }
    }
  });
});
