 $(document).ready(function(){



$(".menu ").mouseenter(
	function(e){
	$(".menu").children(":nth-child(2)").hide();
	$(this).children(":nth-child(2)").fadeIn();
});

$(".menu a:first-of-type").click(
	function(e){
	$(".menu").removeClass("current-menu-item");
	$(this).parent().addClass("current-menu-item");
});

$("#mobile-button").click(
	function(e){
	$(".menu-container").show();
});

});

