$(document).ready(function() {
	
	$.getJSON("data.json", function(data) {	
		
		// EAT ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#eat").append("<div class=\"title row\"><div class=\"col-lg-12\"><h1>" + data.eat.title);
		
		$("#eat").append("<div class=\"breakfast\">").html();
		$("#eat").append("<div class=\"dinner\">");
		$("#eat").append("<div class=\"any_hour\">");
		
		// Québec --------------------------------------
		
		function breakfastData(rowNumber) {
			$("#eat > .breakfast > ." + rowNumber).append("<div class=\"col-lg-4 block" + i + "\">");
			$("#eat > .breakfast > ." + rowNumber + " > .block" + i).append("<h5>" + data.eat.cuisines.breakfast.restaurants[i].name);
			$("#eat > .breakfast > ." + rowNumber + " > .block" + i).append("<h6>" + data.eat.cuisines.breakfast.restaurants[i].hood);
			$("#eat > .breakfast > ." + rowNumber + " > .block" + i).append("<p>" + data.eat.cuisines.breakfast.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.breakfast.restaurants[i].notes.length; j++) {
				$("#eat > .breakfast > ." + rowNumber + " > .block" + i).append("<p>" + data.eat.cuisines.breakfast.restaurants[i].notes[j]);
			}
			$("#eat > .breakfast > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#eat > .breakfast > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.breakfast.restaurants[i].url.link + "\">" + data.eat.cuisines.breakfast.restaurants[i].url.text);
			$("#eat > .breakfast > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.eat.cuisines.breakfast.restaurants[i].address.text);
			$("#eat > .breakfast > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.eat.cuisines.breakfast.restaurants[i].phone);
		};
		
		$("#eat > .breakfast").append("<div class=\"section_title row\"><div class=\"col-lg-12\"><h3>" + data.eat.cuisines.breakfast.region);
		$("#eat > .breakfast > .section_title > .col-lg-12").append("<h4>" + data.eat.cuisines.breakfast.description);
		
		$("#eat > .breakfast").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			breakfastData("first");
		};
		
		$("#eat > .breakfast").append("<div class=\"row second\">");
		for (var i = 3; i < 5; i++) {
			breakfastData("second");
		};
		
		// DINNER --------------------------------------
		
		$("#eat > .dinner").append("<div class=\"section_title row\"><div class=\"col-lg-12\"><h3>" + data.eat.cuisines.dinner.region);
		$("#eat > .dinner > .section_title > .col-lg-12").append("<h4>" + data.eat.cuisines.dinner.description);
		
		$("#eat > .dinner").append("<div class=\"row first\">");
		for (var i = 0; i < data.eat.cuisines.dinner.restaurants.length; i++) {
			$("#eat > .dinner > .first").append("<div class=\"col-lg-4 block" + i + "\">");
			$("#eat > .dinner > .first > .block" + i).append("<h5>" + data.eat.cuisines.dinner.restaurants[i].name);
			$("#eat > .dinner > .first > .block" + i).append("<h6>" + data.eat.cuisines.dinner.restaurants[i].hood);
			$("#eat > .dinner > .first > .block" + i).append("<p>" + data.eat.cuisines.dinner.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.dinner.restaurants[i].notes.length; j++) {
				$("#eat > .dinner > .first > .block" + i).append("<p>" + data.eat.cuisines.dinner.restaurants[i].notes[j]);
			}
			$("#eat > .dinner > .first > .block" + i).append("<ul>");
			$("#eat > .dinner > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.dinner.restaurants[i].url.link + "\">" + data.eat.cuisines.dinner.restaurants[i].url.text);
			$("#eat > .dinner > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.dinner.restaurants[i].address.text);
			$("#eat > .dinner > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.dinner.restaurants[i].phone);
		};
		
		// any_hour --------------------------------------
		
		$("#eat > .any_hour").append("<div class=\"section_title row\"><div class=\"col-lg-12\"><h3>" + data.eat.cuisines.any_hour.region);
		$("#eat > .any_hour > .section_title > .col-lg-12").append("<h4>" + data.eat.cuisines.any_hour.description);
		
		$("#eat > .any_hour").append("<div class=\"row first\">");
		for (var i = 0; i < data.eat.cuisines.any_hour.restaurants.length; i++) {
			$("#eat > .any_hour > .first").append("<div class=\"col-lg-4 block" + i + "\">");
			$("#eat > .any_hour > .first > .block" + i).append("<h5>" + data.eat.cuisines.any_hour.restaurants[i].name);
			$("#eat > .any_hour > .first > .block" + i).append("<p>" + data.eat.cuisines.any_hour.restaurants[i].hood);
			$("#eat > .any_hour > .first > .block" + i).append("<p>" + data.eat.cuisines.any_hour.restaurants[i].moment);
			for (var j = 0; j < data.eat.cuisines.any_hour.restaurants[i].notes.length; j++) {
				$("#eat > .any_hour > .first > .block" + i).append("<p>" + data.eat.cuisines.any_hour.restaurants[i].notes[j]);
			}
			$("#eat > .any_hour > .first > .block" + i).append("<ul>");
			$("#eat > .any_hour > .first > .block" + i + " > ul").append("<li><a href=\"" + data.eat.cuisines.any_hour.restaurants[i].url.link + "\">" + data.eat.cuisines.any_hour.restaurants[i].url.text);
			$("#eat > .any_hour > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.any_hour.restaurants[i].address.text);
			$("#eat > .any_hour > .first > .block" + i + " > ul").append("<li>" + data.eat.cuisines.any_hour.restaurants[i].phone);
		};
		
		
		// STAY ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#stay").append("<div class=\"title row\"><div class=\"col-lg-12\"><h1>" + data.stay.title);
		$("#stay").append("<div class=\"title row\"><div class=\"col-lg-12\"><h4>" + data.stay.description);
		
		// neighborhoods
		$("#stay").append("<div class=\"neighbourhoods\">");
		
		function hoodData(rowNumber) {
			$("#stay > .neighbourhoods > ." + rowNumber).append("<div class=\"col-lg-4 block" + i + "\">");
			$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<h5>" + data.stay.hoods[i].name);
			$("#stay > .neighbourhoods > ." + rowNumber + " > .block" + i).append("<img src=\"img/" + data.stay.hoods[i].mapImage + "\" class=\"img-responsive\">");
			
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

		// hotels
		$("#stay").append("<div class=\"hotels\">");
		$("#stay > .hotels").append("<div class=\"title row\"><div class=\"col-lg-12\"><h3>" + data.stay.hotel_description);

		function hotelData(rowNumber) {
			$("#stay > .hotels > ." + rowNumber).append("<div class=\"col-lg-4 block" + i + "\">");
			$("#stay > .hotels > ." + rowNumber + " > .block" + i).append("<h5>" + data.stay.hotels[i].name);
			$("#stay > .hotels > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#stay > .hotels > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.stay.hotels[i].url.link + "\">" + data.stay.hotels[i].url.text);
			$("#stay > .hotels > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.stay.hotels[i].address);
			$("#stay > .hotels > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.stay.hotels[i].phone);
		};

		$("#stay > .hotels").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			hotelData("first");
		};
		
		// TRANSPORT --------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#transport").append("<div class=\"title row\"><div class=\"col-lg-12\"><h1>" + data.transport.title);
		$("#transport").append("<div class=\"title row\"><div class=\"col-lg-12\"><h4>" + data.transport.description);
		
		$("#transport").append("<div class=\"move\">");
		
		// DRINK ------------------------------------------------------------------------------------------------------------------------
		
		// section title
		$("#drink").append("<div class=\"title row\"><div class=\"col-lg-12\"><h1>" + data.drink.title);
		$("#drink").append("<div class=\"title row\"><div class=\"col-lg-12\"><h4>" + data.drink.description);
		
		$("#drink").append("<div class=\"bars\">");

		function drinkData(rowNumber) {
			$("#drink > .bars > ." + rowNumber).append("<div class=\"col-lg-4 block" + i + "\">");
			$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<h5>" + data.drink.bars[i].name);
			$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<p>" + data.drink.bars[i].hood);
			$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<p>" + data.drink.bars[i].moment);
			for (var j = 0; j < data.drink.bars[i].notes.length; j++) {
				$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<p>" + data.drink.bars[i].notes[j]);
			}
			$("#drink > .bars > ." + rowNumber + " > .block" + i).append("<ul>");
			$("#drink > .bars > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.drink.bars[i].url.link + "\">" + data.drink.bars[i].url.text);
			$("#drink > .bars > ." + rowNumber + " > .block" + i + " > ul").append("<li><a href=\"" + data.drink.bars[i].address.link + "\">" + data.drink.bars[i].address.text);
			$("#drink > .bars > ." + rowNumber + " > .block" + i + " > ul").append("<li>" + data.drink.bars[i].phone);
		};
		
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
		$("#sights").append("<div class=\"title row\"><div class=\"col-lg-12\"><h1>" + data.sights.title);
		$("#sights").append("<div class=\"title row\"><div class=\"col-lg-12\"><h4>" + data.sights.description);
		
		$("#sights").append("<div class=\"places\">");
		
	});
});