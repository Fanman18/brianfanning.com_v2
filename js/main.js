$(document).ready(function() {
    // put all your jQuery goodness in here.

    $(".nav a").hover(
		function () {
		  $(this).addClass("shadow-bg");
		},
		function () {
		  $(this).removeClass("shadow-bg");
		}
	);

	$(".menu, div.logo").localScroll();

});