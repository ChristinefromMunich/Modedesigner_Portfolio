// JavaScript Document
$(document).ready(function(){
    //zum internen Link sliden ---------------------------------------------------------------
    $('nav a').click(function(){
        var link = $(this).attr('href');//in 'link' Wert von href des geklickten Links
        $('html,body').animate({scrollTop:($(link).offset().top - 40)},1000);
    });
    //aktuellem Link class akt zuweisen ---------------------------------------------------
    $('nav li:first-of-type a').addClass('akt'); //wenn noch nichts geklickt bekommt, dann erstes a .akt
    $('nav a').click(function(){
        $('nav a').removeClass('akt');    //allen a .akt entzogen
        $(this).addClass('akt');          //das angklickte a bekommt das .akt
    });
});
