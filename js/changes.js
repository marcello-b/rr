$(window).ready(function () {
    $('#fh5co-header-section').css('background-color','rgba(6, 36, 57, 0.0)');
    new WOW().init();
});

$(window).scroll(function () {
   if ($(window).scrollTop() >= 100) {
       $('#fh5co-header-section').css('background-color','rgba(6, 36, 57, 1)');
   } else {
       $('#fh5co-header-section').css('background-color','rgba(6, 36, 57, 0.0)');
   }
});

/* WOW
 ========================================================*/
 ;
 (function ($) {
     var o = $('html');
 
     if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
         if (o.hasClass('desktop')) {
             include('js/wow.js');
 
             $(document).ready(function () {
                 new WOW().init();
             });
         }
     }
 })(jQuery);