$(document).ready(function() {
	
	$.getJSON("data.json", function(data) {
		
		var span = "span4";
		var first = "first";
		var second = "second";
		
		// STAY section
		$("#stay > .title > div > h1").html(data.stay.title);
		
		$("#stay > .hoods").append("<div class=\"row first\">");
			// Plateau
			$("#stay > .hoods > .first").append("<div class=\"plateau " + span + "\">");
			$("#stay > .hoods  > .first > .plateau").append("<h4>" + data.stay.neighbourhoods.plateau.name + "</h4>");
			for (var i = 0; i < data.stay.neighbourhoods.plateau.about.length; i++) {
				$("#stay > .hoods > .first > .plateau").append("<p>" + data.stay.neighbourhoods.plateau.about[i] + "</p>");
			};
			// Mile-End
			$("#stay > .hoods > .first ").append("<div class=\"mile " + span + "\">");
			$("#stay > .hoods > .first > .mile").append("<h4>" + data.stay.neighbourhoods.mileend.name + "</h4>");
			for (var i = 0; i < data.stay.neighbourhoods.mileend.about.length; i++) {
				$("#stay > .hoods > .first > .mile").append("<p>" + data.stay.neighbourhoods.mileend.about[i] + "</p>");
			};
			// Petite Italie
			$("#stay > .hoods > .first ").append("<div class=\"italie " + span + "\">");
			$("#stay > .hoods > .first > .italie").append("<h4>" + data.stay.neighbourhoods.italie.name + "</h4>");
			for (var i = 0; i < data.stay.neighbourhoods.italie.about.length; i++) {
				$("#stay > .hoods > .first > .italie").append("<p>" + data.stay.neighbourhoods.italie.about[i] + "</p>");
			};
		
		$("#stay > .hoods").append("<div class=\"row second\">");
			// Saint-Henri
			$("#stay > .hoods > .second").append("<div class=\"henri " + span + "\">");
			$("#stay > .hoods > .second > .henri").append("<h4>" + data.stay.neighbourhoods.henri.name + "</h4>");
			for (var i = 0; i < data.stay.neighbourhoods.henri.about.length; i++) {
				$("#stay > .hoods > .second > .henri").append("<p>" + data.stay.neighbourhoods.henri.about[i] + "</p>");
			};
			// Vieux-Port
			$("#stay > .hoods > .second ").append("<div class=\"vieux " + span + "\">");
			$("#stay > .hoods > .second > .vieux").append("<h4>" + data.stay.neighbourhoods.vieux.name + "</h4>");
			for (var i = 0; i < data.stay.neighbourhoods.vieux.about.length; i++) {
				$("#stay > .hoods > .second > .vieux").append("<p>" + data.stay.neighbourhoods.vieux.about[i] + "</p>");
			};
		
		// FOOD section
		$("#food > .title > div > h1").html(data.food.title);
		
		// Québécois
		$("#food > .cuisines").append("<div class=\"quebec row\">" + "<div class=\"span12\">");
		$("#food > .cuisines > .quebec > div").append("<h3>" + data.food.cuisines.quebec.name + "</h3>");
		for (var i = 0; i < data.food.cuisines.quebec.about.length; i++) {
			$("#food > .cuisines > .quebec > div").append("<p>" + data.food.cuisines.quebec.about[i] + "</p>");
		};
		
		
	});
});