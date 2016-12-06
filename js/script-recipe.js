$(document).ready( function(){
	$(".js-menu").hide();

	console.log("el documento esta listo");

$('.js-show-recipe').click(function() {
   $('div.page').addClass("make");
   
});

$('.js-show-make').click(function() {
    $('div.page').removeClass("make");
    
});

});




