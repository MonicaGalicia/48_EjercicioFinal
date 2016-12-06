$(document).ready( function(){
	$(".js-menu").hide();
	console.log("el documento esta listo");

$('.js-show-recipe').click(function() {
   $('div.page').addClass("make");
   $('div.page').addClass("active");
   $(".js-show-make").removeClass("active");

});

$('.js-show-make').click(function() {
    $('div.page').removeClass("make");
    $('div.page').addClass("active");
    $(".js-show-recipe").removeClass("active");
 
});

$('.js-back').click(function() {
   window.location = 'index.html';
    
});





});







