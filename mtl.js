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
		$("#stay").append("<div class=\"title row\"><div class=\"span12\"><h4>" + data.stay.description);
		
		$("#stay").append("<div class=\"neighbourhoods\">");
		
		function hoodData(rowNumber) {
			$("#stay > .neighbourhoods > ." + rowNumber).append("<div class=\"span4 block" + i + "\">");
			$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<h5>" + data.stay.hoods[i].name);
			$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<img src=\"img/" + data.stay.hoods[i].mapImage + "\">");
			
			$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<div class=\"corners\"><h5>Street corners</h5><ul>");
			for (var j = 0; j < data.stay.hoods[i].corners.length; j++) {
				$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>SE: " + data.stay.hoods[i].corners[j].se);
				$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>SW: " + data.stay.hoods[i].corners[j].sw);
				$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>NE: " + data.stay.hoods[i].corners[j].ne);
				$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>NW: " + data.stay.hoods[i].corners[j].nw);
			}
			for (var k = 0; k < data.stay.hoods[i].about.length; k++) {
				$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<p>" + data.stay.hoods[i].about[k]);
			}
		};
		
		$("#stay > .neighbourhoods").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			hoodData("first");
		};
		
		$("#stay > .neighbourhoods").append("<div class=\"row second\">");
		for (var i = 3; i < 5; i++) {
			hoodData("second");
		};
		
		// TRANSPORT --------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#transport").append("<div class=\"title row\"><div class=\"span12\"><h1>" + data.transport.title);
		$("#transport").append("<div class=\"title row\"><div class=\"span12\"><h4>" + data.transport.description);
		
		$("#transport").append("<div class=\"move\">");
		
		// DRINK ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#drink").append("<div class=\"title row\"><div class=\"span12\"><h1>" + data.drink.title);
		$("#drink").append("<div class=\"title row\"><div class=\"span12\"><h4>" + data.drink.description);
		
		$("#drink").append("<div class=\"bars\">");

		function drinkData(rowNumber) {
			$("#drink > .bars > ." + rowNumber).append("<div class=\"span4 block" + i + "\">");
			$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<h5>" + data.drink.bars[i].name);
			$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<p>" + data.drink.bars[i].hood);
			$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<p>" + data.drink.bars[i].moment);
			for (var j = 0; j < data.drink.bars[i].notes.length; j++) {
				$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<p>" + data.drink.bars[i].notes[j]);
			}
		// 	$("#drink > .quebec > ." + rowNumber + " > .block" + i).append("<ul>");
		// 	$("#drink > .quebec > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.drink.cuisines.quebec.restaurants[i].url.link + "\">" + data.drink.cuisines.quebec.restaurants[i].url.text);
		// 	$("#drink > .quebec > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.drink.cuisines.quebec.restaurants[i].address.link + "\">" + data.drink.cuisines.quebec.restaurants[i].address.text);
		// 	$("#drink > .quebec > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.drink.cuisines.quebec.restaurants[i].phone);
		};
		
		//$("#drink > .bars > .section_title > .span12").append("<h4>" + data.drink.bars.description);
		
		$("#drink > .bars").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			drinkData("first");
		};
		
		$("#drink > .bars").append("<div class=\"row second\">");
		for (var i = 3; i < 6; i++) {
			drinkData("second");
		};


		
		// SIGHTS ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#sights").append("<div class=\"title row\"><div class=\"span12\"><h1>" + data.sights.title);
		$("#sights").append("<div class=\"title row\"><div class=\"span12\"><h4>" + data.sights.description);
		
		$("#sights").append("<div class=\"places\">");
		
	});
});