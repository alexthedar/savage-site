// sticky nav
(function (window) {
  var nav = document.getElementsByTagName("nav")[0];
  var header = document.getElementsByTagName('header')[0];
   var distanceToTop = nav.getBoundingClientRect().top;
  window.addEventListener("scroll", function(){
    if(window.scrollY > distanceToTop){
      nav.classList.add("main-nav-scrolled");
      header.style.display = "none";
    } else {
      nav.classList.remove("main-nav-scrolled");
      header.style.display = "block";

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
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){
//         $('header').addClass("sticky");
//     }
//     else{
//         $('header').removeClass("sticky");
//     }
// });
// console.log(window.innerHeight)
