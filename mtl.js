$(document).ready(function() {
	
	$.getJSON("data.json", function(data) {
		
		// STAY section
		// main title
		$("#stay > .title > div > h1").html(data.stay.title);
		
		var span = "span4";
		
		// Plateau
		$("#stay > .hoods").append("<div class=\"plateau " + span + "\">");
		$("#stay > .hoods > .plateau").append("<h4>" + data.stay.neighbourhoods.plateau.name + "</h4>");
		for (var i = 0; i < data.stay.neighbourhoods.plateau.about.length; i++) {
			$("#stay > .hoods > .plateau").append("<p>" + data.stay.neighbourhoods.plateau.about[i] + "</p>");
		};
		// Mile-End
		$("#stay > .hoods").append("<div class=\"mile " + span + "\">");
		$("#stay > .hoods > .mile").append("<h4>" + data.stay.neighbourhoods.mileend.name + "</h4>");
		for (var i = 0; i < data.stay.neighbourhoods.mileend.about.length; i++) {
			$("#stay > .hoods > .mile").append("<p>" + data.stay.neighbourhoods.mileend.about[i] + "</p>");
		};
		
	});
});