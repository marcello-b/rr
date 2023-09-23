$(function () {
   $(document).scroll(function () {
      var $nav = $(".fh5co-bg-color");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
   });
});
