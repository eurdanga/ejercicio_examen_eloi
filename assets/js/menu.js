 $(document).ready(function(){



$(".menu ").mouseenter(
	function(e){
	$(".menu").children(":nth-child(2)").hide();
	$(this).children(":nth-child(2)").fadeIn();
});

$('.menu').mouseleave(function(e) {
	
	$(this).children(":nth-child(2)").fadeOut();
});

$(".menu a").click(
	function(e){
	$(".menu").removeClass("current-menu-item");
	$(this).parent().addClass("current-menu-item");
});

$("#mobile-button").click(
	function(e){
	$("#menu-container").show();
	$("#mobile-button").hide();
	$("#mobile-close").show();


});

$("#mobile-close").click(
	function(e){
	$("#menu-container").hide();
	$("#mobile-button").show();
	$("#mobile-close").hide();


});






});

