$(window).ready(function () {
    $('#fh5co-header-section').css('background-color','rgba(6, 36, 57, 0.0)');
});

$(window).scroll(function () {
   if ($(window).scrollTop() >= 100) {
       $('#fh5co-header-section').css('background-color','rgba(6, 36, 57, 1)');
   } else {
       $('#fh5co-header-section').css('background-color','rgba(6, 36, 57, 0.0)');
   }
});

