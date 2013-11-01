$(document).ready(function() {
	
	$.getJSON("data.json", function(data) {	
		
		// EAT ------------------------------------------------------------------------------------------------------------------------
		
		$("#eat > .container").append("<div class=\"title row\"><div class=\"col-md-12\"><h1>" + data.eat.title);
		
		$("#eat > .container").append("<div class=\"breakfast\">").html();
		$("#eat > .container").append("<div class=\"dinner\">");
		$("#eat > .container").append("<div class=\"any_hour\">");
		
		// breakfast --------------------------------------
		
		function breakfastData(rowNumber) {
			$("#eat > .container > .breakfast > ." + rowNumber).append("<div class=\"col-md-4 block" + i + "\">");
			$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i).append("<h5>" + data.eat.cuisines.breakfast.restaurants[i].name);
			$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i).append("<h6>" + data.eat.cuisines.breakfast.restaurants[i].hood);
			$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i).append("<p class=\"moment\">" + data.eat.cuisines.breakfast.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.breakfast.restaurants[i].notes.length; j++) {
				$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i).append("<p>" + data.eat.cuisines.breakfast.restaurants[i].notes[j]);
			}
			$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.breakfast.restaurants[i].url.link + "\">" + data.eat.cuisines.breakfast.restaurants[i].url.text);
			$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.eat.cuisines.breakfast.restaurants[i].address.text);
			$("#eat > .container > .breakfast > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.eat.cuisines.breakfast.restaurants[i].phone);
		};
		
		$("#eat > .container > .breakfast").append("<div class=\"section_title row\"><div class=\"col-md-12\"><h3>" + data.eat.cuisines.breakfast.region);
		$("#eat > .container > .breakfast > .section_title > .col-md-12").append("<h4>" + data.eat.cuisines.breakfast.description);
		
		$("#eat > .container > .breakfast").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			breakfastData("first");
		};
		
		$("#eat > .container > .breakfast").append("<div class=\"row second\">");
		for (var i = 3; i < 5; i++) {
			breakfastData("second");
		};
		
		// dinner --------------------------------------
		
		$("#eat > .container > .dinner").append("<div class=\"section_title row\"><div class=\"col-md-12\"><h3>" + data.eat.cuisines.dinner.region);
		$("#eat > .container > .dinner > .section_title > .col-md-12").append("<h4>" + data.eat.cuisines.dinner.description);
		
		$("#eat > .container > .dinner").append("<div class=\"row first\">");
		for (var i = 0; i < data.eat.cuisines.dinner.restaurants.length; i++) {
			$("#eat > .container > .dinner > .first").append("<div class=\"col-md-4 block" + i + "\">");
			$("#eat > .container > .dinner > .first > .block" + i).append("<h5>" + data.eat.cuisines.dinner.restaurants[i].name);
			$("#eat > .container > .dinner > .first > .block" + i).append("<h6>" + data.eat.cuisines.dinner.restaurants[i].hood);
			$("#eat > .container > .dinner > .first > .block" + i).append("<p class=\"moment\">" + data.eat.cuisines.dinner.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.dinner.restaurants[i].notes.length; j++) {
				$("#eat > .container > .dinner > .first > .block" + i).append("<p>" + data.eat.cuisines.dinner.restaurants[i].notes[j]);
			}
			$("#eat > .container > .dinner > .first > .block" + i).append("<ul>");
			$("#eat > .container > .dinner > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.dinner.restaurants[i].url.link + "\">" + data.eat.cuisines.dinner.restaurants[i].url.text);
			$("#eat > .container > .dinner > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.dinner.restaurants[i].address.text);
			$("#eat > .container > .dinner > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.dinner.restaurants[i].phone);
		};
		
		// any hour --------------------------------------
		
		function anyHourData(rowNumber) {
			$("#eat > .container > .any_hour > ." + rowNumber).append("<div class=\"col-md-4 block" + i + "\">");
			$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i).append("<h5>" + data.eat.cuisines.any_hour.restaurants[i].name);
			$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i).append("<h6>" + data.eat.cuisines.any_hour.restaurants[i].hood);
			$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i).append("<p class=\"moment\">" + data.eat.cuisines.any_hour.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.any_hour.restaurants[i].notes.length; j++) {
				$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i).append("<p>" + data.eat.cuisines.any_hour.restaurants[i].notes[j]);
			}
			$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.any_hour.restaurants[i].url.link + "\">" + data.eat.cuisines.any_hour.restaurants[i].url.text);
			$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.eat.cuisines.any_hour.restaurants[i].address.text);
			$("#eat > .container > .any_hour > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.eat.cuisines.any_hour.restaurants[i].phone);
		};
		
		$("#eat > .container > .any_hour").append("<div class=\"section_title row\"><div class=\"col-md-12\"><h3>" + data.eat.cuisines.any_hour.region);
		$("#eat > .container > .any_hour > .section_title > .col-md-12").append("<h4>" + data.eat.cuisines.any_hour.description);
		
		$("#eat > .container > .any_hour").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			anyHourData("first");
		};
		
		$("#eat > .container > .any_hour").append("<div class=\"row second\">");
		for (var i = 3; i < 4; i++) {
			anyHourData("second");
		};
		

		// $("#eat > .container > .any_hour").append("<div class=\"row first\">");
		// for (var i = 0; i < data.eat.cuisines.any_hour.restaurants.length; i++) {
		// 	$("#eat > .container > .any_hour > .first").append("<div class=\"col-md-4 block" + i + "\">");
		// 	$("#eat > .container > .any_hour > .first > .block" + i).append("<h5>" + data.eat.cuisines.any_hour.restaurants[i].name);
		// 	$("#eat > .container > .any_hour > .first > .block" + i).append("<h6>" + data.eat.cuisines.any_hour.restaurants[i].hood);
		// 	$("#eat > .container > .any_hour > .first > .block" + i).append("<p class=\"moment\">" + data.eat.cuisines.any_hour.restaurants[i].moment);
		// 	for (var j = 0; j < data.eat.cuisines.any_hour.restaurants[i].notes.length; j++) {
		// 		$("#eat > .container > .any_hour > .first > .block" + i).append("<p>" + data.eat.cuisines.any_hour.restaurants[i].notes[j]);
		// 	}
		// 	$("#eat > .container > .any_hour > .first > .block" + i).append("<ul>");
		// 	$("#eat > .container > .any_hour > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.any_hour.restaurants[i].url.link + "\">" + data.eat.cuisines.any_hour.restaurants[i].url.text);
		// 	$("#eat > .container > .any_hour > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.any_hour.restaurants[i].address.text);
		// 	$("#eat > .container > .any_hour > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.any_hour.restaurants[i].phone);
		// };
		
		
		// STAY ------------------------------------------------------------------------------------------------------------------------
		
		$("#stay > .container").append("<div class=\"title row\"><div class=\"col-md-12\"><h1>" + data.stay.title);
		$("#stay > .container").append("<div class=\"title row\"><div class=\"col-md-12\"><h4>" + data.stay.description);
		
		// neighborhoods
		$("#stay > .container").append("<div class=\"neighbourhoods\">");
		
		function hoodData(rowNumber) {
			$("#stay > .container > .neighbourhoods > ." + rowNumber).append("<div class=\"col-md-4 block" + i + "\">");
			$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<h5>" + data.stay.hoods[i].name);
			$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<img src=\"img/" + data.stay.hoods[i].mapImage + "\" class=\"img-responsive\">");
			
			$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<div class=\"corners\"><h5>Street corners</h5><ul>");
			for (var j = 0; j < data.stay.hoods[i].corners.length; j++) {
				$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>SE: " + data.stay.hoods[i].corners[j].se);
				$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>SW: " + data.stay.hoods[i].corners[j].sw);
				$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>NE: " + data.stay.hoods[i].corners[j].ne);
				$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i + " > .corners > ul").append("<li>NW: " + data.stay.hoods[i].corners[j].nw);
			}
			for (var k = 0; k < data.stay.hoods[i].about.length; k++) {
				$("#stay > .container > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<p>" + data.stay.hoods[i].about[k]);
			}
		};
		
		$("#stay > .container > .neighbourhoods").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			hoodData("first");
		};
		
		$("#stay > .container > .neighbourhoods").append("<div class=\"row second\">");
		for (var i = 3; i < 5; i++) {
			hoodData("second");
		};

		// hotels
		$("#stay > .container").append("<div class=\"hotels\">");
		$("#stay > .container > .hotels").append("<div class=\"title row\"><div class=\"col-md-12\"><h3>" + data.stay.hotel_description);

		function hotelData(rowNumber) {
			$("#stay > .container > .hotels > ." + rowNumber).append("<div class=\"col-md-4 block" + i + "\">");
			$("#stay > .container > .hotels > ." + rowNumber + " > .block" + i).append("<h5>" + data.stay.hotels[i].name);
			$("#stay > .container > .hotels > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#stay > .container > .hotels > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.stay.hotels[i].url.link + "\">" + data.stay.hotels[i].url.text);
			$("#stay > .container > .hotels > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.stay.hotels[i].address);
			$("#stay > .container > .hotels > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.stay.hotels[i].phone);
		};

		$("#stay > .container > .hotels").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			hotelData("first");
		};
		
		// TRANSPORT --------------------------------------------------------------------------------------------------------------------
		
		$("#transport > .container").append("<div class=\"title row\"><div class=\"col-md-12\"><h1>" + data.transport.title);
		$("#transport > .container").append("<div class=\"title row\"><div class=\"col-md-12\"><h4>" + data.transport.description);
		
		$("#transport > .container").append("<div class=\"move\">");

		function moveData(rowNumber) {
			$("#transport > .container > .move > ." + rowNumber).append("<div class=\"col-md-4 block" + i + "\">");
			$("#transport > .container > .move > ." + rowNumber + " > .block" + i).append("<h5>" + data.transport.service[i].name);
			$("#transport > .container > .move > ." + rowNumber + " > .block" + i).append("<p>" + data.transport.service[i].type);
			for (var j = 0; j < data.transport.service[i].notes.length; j++) {
				$("#transport > .container > .move > ." + rowNumber + " > .block" + i).append("<p>" + data.transport.service[i].notes[j]);
			}
			$("#transport > .container > .move > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#transport > .container > .move > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.transport.service[i].url.link + "\">" + data.transport.service[i].url.text);
		};

		$("#transport > .container > .move").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			moveData("first");
		};

		$("#transport > .container > .move").append("<div class=\"row second\">");
		for (var i = 3; i < 4; i++) {
			moveData("second");
		};
		
		// DRINK ------------------------------------------------------------------------------------------------------------------------
		
		$("#drink > .container").append("<div class=\"title row\"><div class=\"col-md-12\"><h1>" + data.drink.title);
		$("#drink > .container").append("<div class=\"title row\"><div class=\"col-md-12\"><h4>" + data.drink.description);
		
		$("#drink > .container").append("<div class=\"bars\">");

		function drinkData(rowNumber) {
			$("#drink > .container > .bars > ." + rowNumber).append("<div class=\"col-md-4 block" + i + "\">");
			$("#drink > .container > .bars > ." + rowNumber + " > .block" + i).append("<h5>" + data.drink.bars[i].name);
			$("#drink > .container > .bars > ." + rowNumber + " > .block" + i).append("<h6>" + data.drink.bars[i].hood);
			$("#drink > .container > .bars > ." + rowNumber + " > .block" + i).append("<p class=\"moment\">" + data.drink.bars[i].moment);
			for (var j = 0; j < data.drink.bars[i].notes.length; j++) {
				$("#drink > .container > .bars > ." + rowNumber + " > .block" + i).append("<p>" + data.drink.bars[i].notes[j]);
			}
			$("#drink > .container > .bars > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#drink > .container > .bars > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.drink.bars[i].url.link + "\">" + data.drink.bars[i].url.text);
			$("#drink > .container > .bars > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.drink.bars[i].address.text);
			$("#drink > .container > .bars > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.drink.bars[i].phone);
		};
		
		$("#drink > .container > .bars").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			drinkData("first");
		};
		
		$("#drink > .container > .bars").append("<div class=\"row second\">");
		for (var i = 3; i < 6; i++) {
			drinkData("second");
		};

		$("#drink > .container > .bars").append("<div class=\"row third\">");
		for (var i = 6; i < 8; i++) {
			drinkData("third");
		};


		
		// SIGHTS ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#sights").append("<div class=\"title row\"><div class=\"col-md-12\"><h1>" + data.sights.title);
		$("#sights").append("<div class=\"title row\"><div class=\"col-md-12\"><h4>" + data.sights.description);
		
		$("#sights").append("<div class=\"places\">");
		
	});
});