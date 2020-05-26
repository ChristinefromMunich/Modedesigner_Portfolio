// JavaScript Document,
$(document).ready(function(){
    /* ein-/ausblenden des backtop-buttons --------------------------*/
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('#backtop').fadeIn(1000);
        }
        else {
            $('#backtop').fadeOut(1000);
        }
    });
    /* sprung backtop verlangsamen --------------------------*/
    $('#backtop a').click(function(){
        $('html,body').animate({scrollTop:0},1000);
        return false; //schließt die Funktion ab (sonst erscheint der Pfeil nochmal kurz)
    });

});
