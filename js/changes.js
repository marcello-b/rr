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


// Mostra Fit

function mostraFit(bikefit){
    var destino = bikefit;
    var foco = 'focus-' + bikefit;
    document.getElementById("completo").style.display="none";
    document.getElementById("focus-completo").style.display="none";
    document.getElementById("simples").style.display="none";
    document.getElementById("focus-simples").style.display="none";
    document.getElementById("selin").style.display="none";
    document.getElementById("focus-selin").style.display="none";
    document.getElementById(destino).style.display="block";
    document.getElementById(foco).style.display="block";
  }


// Mostra treino

function mostraTreino(treino){
    var destino = treino;
    var foco = 'focus-' + treino;
    document.getElementById("intervalado").style.display="none";
    document.getElementById("focus-intervalado").style.display="none";
    document.getElementById("simulado").style.display="none";
    document.getElementById("focus-simulado").style.display="none";
    document.getElementById("continuo").style.display="none";
    document.getElementById("focus-continuo").style.display="none";
    document.getElementById("corrida").style.display="none";
    document.getElementById("focus-corrida").style.display="none";
    document.getElementById(destino).style.display="block";
    document.getElementById(foco).style.display="block";
  }




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

 

