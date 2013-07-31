$(document).ready(function() {
    // put all your jQuery goodness in here.

	$(".menu, div.logo").localScroll();

	$.getJSON('data/portfolio.json', function(data) {
        var output="<ul class='grid cs-style-4'>";
        for (var i in data.sites) {
            output+="<li>";
            output+="<img src='/img/portfolio/" + data.sites[i].thumb + "' alt='" + data.sites[i].sitename + "' title='" + data.sites[i].sitename + "' />";
            output+="<div class='grid-info " + data.sites[i].category + "'>";
            output+="<h3>" + data.sites[i].sitename + "</h3>";
            output+="<span>" + data.sites[i].copy + "</span><br />";
            output+="<a href='" + data.sites[i].url + "'>Take a look</a>";
            output+="</div>";
            output+="</li>";
        }

        output+="</ul>";
        document.getElementById("work").innerHTML=output;
    });

    $(".revolve").add("<i class='tag'></i>");

});