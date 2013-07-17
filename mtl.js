$(document).ready(function() {
	
	$.getJSON("data.json", function(data) {	
		
		// EAT ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#eat").append("<div class=\"title row\"><div class=\"span12\"><h1>" + data.eat.title);
		
		$("#eat").append("<div class=\"quebec\">").html();
		$("#eat").append("<div class=\"france\">");
		$("#eat").append("<div class=\"poutine\">");
		
		// Québec --------------------------------------
		
		function quebecData(rowNumber) {
			$("#eat > .quebec > ." + rowNumber).append("<div class=\"span4 block" + i + "\">");
			$("#eat > .quebec > ." + rowNumber + " > .block" + i).append("<h5>" + data.eat.cuisines.quebec.restaurants[i].name);
			$("#eat > .quebec > ." + rowNumber + " > .block" + i).append("<p>" + data.eat.cuisines.quebec.restaurants[i].hood);
			$("#eat > .quebec > ." + rowNumber + " > .block" + i).append("<p>" + data.eat.cuisines.quebec.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.quebec.restaurants[i].notes.length; j++) {
				$("#eat > .quebec > ." + rowNumber + " > .block" + i).append("<p>" + data.eat.cuisines.quebec.restaurants[i].notes[j]);
			}
			$("#eat > .quebec > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#eat > .quebec > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.quebec.restaurants[i].url.link + "\">" + data.eat.cuisines.quebec.restaurants[i].url.text);
			$("#eat > .quebec > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.quebec.restaurants[i].address.link + "\">" + data.eat.cuisines.quebec.restaurants[i].address.text);
			$("#eat > .quebec > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.eat.cuisines.quebec.restaurants[i].phone);
		};
		
		$("#eat > .quebec").append("<div class=\"section_title row\"><div class=\"span12\"><h3>" + data.eat.cuisines.quebec.region);
		$("#eat > .quebec > .section_title > .span12").append("<h4>" + data.eat.cuisines.quebec.description);
		
		$("#eat > .quebec").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			quebecData("first");
		};
		
		$("#eat > .quebec").append("<div class=\"row second\">");
		for (var i = 3; i < 6; i++) {
			quebecData("second");
		};
		
		// France --------------------------------------
		
		$("#eat > .france").append("<div class=\"section_title row\"><div class=\"span12\"><h3>" + data.eat.cuisines.france.region);
		$("#eat > .france > .section_title > .span12").append("<h4>" + data.eat.cuisines.france.description);
		
		$("#eat > .france").append("<div class=\"row first\">");
		for (var i = 0; i < data.eat.cuisines.france.restaurants.length; i++) {
			$("#eat > .france > .first").append("<div class=\"span4 block" + i + "\">");
			$("#eat > .france > .first > .block" + i).append("<h5>" + data.eat.cuisines.france.restaurants[i].name);
			$("#eat > .france > .first > .block" + i).append("<p>" + data.eat.cuisines.france.restaurants[i].hood);
			$("#eat > .france > .first > .block" + i).append("<p>" + data.eat.cuisines.france.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.france.restaurants[i].notes.length; j++) {
				$("#eat > .france > .first > .block" + i).append("<p>" + data.eat.cuisines.france.restaurants[i].notes[j]);
			}
			$("#eat > .france > .first > .block" + i).append("<ul>");
			$("#eat > .france > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.france.restaurants[i].url.link + "\">" + data.eat.cuisines.france.restaurants[i].url.text);
			$("#eat > .france > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.france.restaurants[i].address.link + "\">" + data.eat.cuisines.france.restaurants[i].address.text);
			$("#eat > .france > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.france.restaurants[i].phone);
		};
		
		// Poutine --------------------------------------
		
		$("#eat > .poutine").append("<div class=\"section_title row\"><div class=\"span12\"><h3>" + data.eat.cuisines.poutine.region);
		$("#eat > .poutine > .section_title > .span12").append("<h4>" + data.eat.cuisines.poutine.description);
		
		$("#eat > .poutine").append("<div class=\"row first\">");
		for (var i = 0; i < data.eat.cuisines.poutine.restaurants.length; i++) {
			$("#eat > .poutine > .first").append("<div class=\"span4 block" + i + "\">");
			$("#eat > .poutine > .first > .block" + i).append("<h5>" + data.eat.cuisines.poutine.restaurants[i].name);
			$("#eat > .poutine > .first > .block" + i).append("<p>" + data.eat.cuisines.poutine.restaurants[i].hood);
			$("#eat > .poutine > .first > .block" + i).append("<p>" + data.eat.cuisines.poutine.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.poutine.restaurants[i].notes.length; j++) {
				$("#eat > .poutine > .first > .block" + i).append("<p>" + data.eat.cuisines.poutine.restaurants[i].notes[j]);
			}
			$("#eat > .poutine > .first > .block" + i).append("<ul>");
			$("#eat > .poutine > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.poutine.restaurants[i].url.link + "\">" + data.eat.cuisines.poutine.restaurants[i].url.text);
			$("#eat > .poutine > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.poutine.restaurants[i].address.link + "\">" + data.eat.cuisines.poutine.restaurants[i].address.text);
			$("#eat > .poutine > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.poutine.restaurants[i].phone);
		};
		
		
		// STAY ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#stay").append("<div class=\"title row\"><div class=\"span12\"><h1>" + data.stay.title);
		
		$("#stay").append("<div class=\"plateau\">");
		
		// Poutine --------------------------------------
		
		//$("#stay > .plateau").append("<div class=\"section_title row\"><div class=\"span12\"><h3>" + data.stay.hoods.name);
		
		$("#stay > .plateau").append("<div class=\"row first\">");
		for (var i = 0; i < data.stay.hoods.length; i++) {
			$("#stay > .plateau > .first").append("<div class=\"span4 block" + i + "\">");
			$("#stay > .plateau > .first > .block" + i).append("<h5>" + data.stay.hoods[i].name);
			for (var j = 0; j < data.stay.hoods[i].about.length; j++) {
				$("#stay > .plateau > .first > .block" + i).append("<p>" + data.stay.hoods[i].about[j]);
			}
		};
		
				
		
	});
});