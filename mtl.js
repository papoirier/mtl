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
			$("#stay > .hoods  > .first > .plateau").append("<h4>" + data.stay.neighbourhoods.plateau.name);
			for (var i = 0; i < data.stay.neighbourhoods.plateau.about.length; i++) {
				$("#stay > .hoods > .first > .plateau").append("<p>" + data.stay.neighbourhoods.plateau.about[i]);
			};
			// Mile-End
			$("#stay > .hoods > .first ").append("<div class=\"mile " + span + "\">");
			$("#stay > .hoods > .first > .mile").append("<h4>" + data.stay.neighbourhoods.mileend.name);
			for (var i = 0; i < data.stay.neighbourhoods.mileend.about.length; i++) {
				$("#stay > .hoods > .first > .mile").append("<p>" + data.stay.neighbourhoods.mileend.about[i]);
			};
			// Petite Italie
			$("#stay > .hoods > .first ").append("<div class=\"italie " + span + "\">");
			$("#stay > .hoods > .first > .italie").append("<h4>" + data.stay.neighbourhoods.italie.name);
			for (var i = 0; i < data.stay.neighbourhoods.italie.about.length; i++) {
				$("#stay > .hoods > .first > .italie").append("<p>" + data.stay.neighbourhoods.italie.about[i]);
			};
		
		$("#stay > .hoods").append("<div class=\"row second\">");
			// Saint-Henri
			$("#stay > .hoods > .second").append("<div class=\"henri " + span + "\">");
			$("#stay > .hoods > .second > .henri").append("<h4>" + data.stay.neighbourhoods.henri.name);
			for (var i = 0; i < data.stay.neighbourhoods.henri.about.length; i++) {
				$("#stay > .hoods > .second > .henri").append("<p>" + data.stay.neighbourhoods.henri.about[i]);
			};
			// Vieux-Port
			$("#stay > .hoods > .second ").append("<div class=\"vieux " + span + "\">");
			$("#stay > .hoods > .second > .vieux").append("<h4>" + data.stay.neighbourhoods.vieux.name);
			for (var i = 0; i < data.stay.neighbourhoods.vieux.about.length; i++) {
				$("#stay > .hoods > .second > .vieux").append("<p>" + data.stay.neighbourhoods.vieux.about[i]);
			};
		
		// FOOD section
		
		var moment = "One goes there for: ";
		var hood = "Located in: ";
		var ulNotes = "<ul class =\"notes\">";
		var ulContact = "<ul class =\"contact\">";
		
		$("#food > .title > div > h1").html(data.food.title);
		
		// Québec ------------------------------------------------------------------------------------------------------------------------
		$("#food > .cuisines > .quebec").append("<div class=\"row\">" + "<div class=\"span12\">");
		$("#food > .cuisines > .quebec > .row > .span12").append("<h3>" + data.food.cuisines.quebec.name);
		for (var i = 0; i < data.food.cuisines.quebec.about.length; i++) {
			$("#food > .cuisines > .quebec > .row > .span12").append("<h5>" + data.food.cuisines.quebec.about[i]);
		};
		
		$("#food > .cuisines > .quebec").append("<div class=\"row first\">");
			// St-Viateur Bagels
			$("#food > .cuisines > .quebec > .first ").append("<div class=\"viateur " + span + "\">");
			$("#food > .cuisines > .quebec > .first > .viateur").append("<h4>" + data.food.cuisines.quebec.restaurants.viateur.name);
			$("#food > .cuisines > .quebec > .first > .viateur").append("<p>" + hood + data.food.cuisines.quebec.restaurants.viateur.hood);
			$("#food > .cuisines > .quebec > .first > .viateur").append("<p>" + moment + data.food.cuisines.quebec.restaurants.viateur.moment);
			$("#food > .cuisines > .quebec > .first > .viateur").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.quebec.restaurants.viateur.notes.length; i++) {
				$("#food > .cuisines > .quebec > .first > .viateur > ul.notes").append("<li>" + data.food.cuisines.quebec.restaurants.viateur.notes[i]);
			};
			$("#food > .cuisines > .quebec > .first > .viateur").append(ulContact);
				$("#food > .cuisines > .quebec > .first > .viateur > ul.contact").append("<li><a href=\"" + data.food.cuisines.quebec.restaurants.viateur.website + "\">" + data.food.cuisines.quebec.restaurants.viateur.website);
				$("#food > .cuisines > .quebec > .first > .viateur > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.viateur.telephone);
				$("#food > .cuisines > .quebec > .first > .viateur > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.viateur.address);
			// Olive
			$("#food > .cuisines > .quebec > .first ").append("<div class=\"olive " + span + "\">");
			$("#food > .cuisines > .quebec > .first > .olive").append("<h4>" + data.food.cuisines.quebec.restaurants.olive.name);
			$("#food > .cuisines > .quebec > .first > .olive").append("<p>" + hood + data.food.cuisines.quebec.restaurants.olive.hood);
			$("#food > .cuisines > .quebec > .first > .olive").append("<p>" + moment + data.food.cuisines.quebec.restaurants.olive.moment);
			$("#food > .cuisines > .quebec > .first > .olive").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.quebec.restaurants.olive.notes.length; i++) {
				$("#food > .cuisines > .quebec > .first > .olive > ul.notes").append("<li>" + data.food.cuisines.quebec.restaurants.olive.notes[i]);
			};
			$("#food > .cuisines > .quebec > .first > .olive").append(ulContact);
				$("#food > .cuisines > .quebec > .first > .olive > ul.contact").append("<li><a href=\"" + data.food.cuisines.quebec.restaurants.olive.website + "\">" + data.food.cuisines.quebec.restaurants.olive.website);
				$("#food > .cuisines > .quebec > .first > .olive > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.olive.telephone);
				$("#food > .cuisines > .quebec > .first > .olive > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.olive.address);
			// Bagel etc
			$("#food > .cuisines > .quebec > .first ").append("<div class=\"bagel " + span + "\">");
			$("#food > .cuisines > .quebec > .first > .bagel").append("<h4>" + data.food.cuisines.quebec.restaurants.bagel.name);
			$("#food > .cuisines > .quebec > .first > .bagel").append("<p>" + hood + data.food.cuisines.quebec.restaurants.bagel.hood);
			$("#food > .cuisines > .quebec > .first > .bagel").append("<p>" + moment + data.food.cuisines.quebec.restaurants.bagel.moment);
			$("#food > .cuisines > .quebec > .first > .bagel").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.quebec.restaurants.bagel.notes.length; i++) {
				$("#food > .cuisines > .quebec > .first > .bagel > ul.notes").append("<li>" + data.food.cuisines.quebec.restaurants.bagel.notes[i]);
			};
			$("#food > .cuisines > .quebec > .first > .bagel").append(ulContact);
				$("#food > .cuisines > .quebec > .first > .bagel > ul.contact").append("<li><a href=\"" + data.food.cuisines.quebec.restaurants.bagel.website + "\">" + data.food.cuisines.quebec.restaurants.bagel.website);
				$("#food > .cuisines > .quebec > .first > .bagel > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.bagel.telephone);
				$("#food > .cuisines > .quebec > .first > .bagel > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.bagel.address);
		
		$("#food > .cuisines > .quebec").append("<div class=\"row second\">");
			// Schwartz
			$("#food > .cuisines > .quebec > .second ").append("<div class=\"schwartz " + span + "\">");
			$("#food > .cuisines > .quebec > .second > .schwartz").append("<h4>" + data.food.cuisines.quebec.restaurants.schwartz.name);
			$("#food > .cuisines > .quebec > .second > .schwartz").append("<p>" + hood + data.food.cuisines.quebec.restaurants.schwartz.hood);
			$("#food > .cuisines > .quebec > .second > .schwartz").append("<p>" + moment + data.food.cuisines.quebec.restaurants.schwartz.moment);
			$("#food > .cuisines > .quebec > .second > .schwartz").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.quebec.restaurants.schwartz.notes.length; i++) {
				$("#food > .cuisines > .quebec > .second > .schwartz > ul.notes").append("<li>" + data.food.cuisines.quebec.restaurants.schwartz.notes[i]);
			};
			$("#food > .cuisines > .quebec > .second > .schwartz").append(ulContact);
				$("#food > .cuisines > .quebec > .second > .schwartz > ul.contact").append("<li><a href=\"" + data.food.cuisines.quebec.restaurants.schwartz.website + "\">" + data.food.cuisines.quebec.restaurants.schwartz.website);
				$("#food > .cuisines > .quebec > .second > .schwartz > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.schwartz.telephone);
				$("#food > .cuisines > .quebec > .second > .schwartz > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.schwartz.address);
			// Foodlab
			$("#food > .cuisines > .quebec > .second ").append("<div class=\"foodlab " + span + "\">");
			$("#food > .cuisines > .quebec > .second > .foodlab").append("<h4>" + data.food.cuisines.quebec.restaurants.foodlab.name);
			$("#food > .cuisines > .quebec > .second > .foodlab").append("<p>" + hood + data.food.cuisines.quebec.restaurants.foodlab.hood);
			$("#food > .cuisines > .quebec > .second > .foodlab").append("<p>" + moment + data.food.cuisines.quebec.restaurants.foodlab.moment);
			$("#food > .cuisines > .quebec > .second > .foodlab").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.quebec.restaurants.foodlab.notes.length; i++) {
				$("#food > .cuisines > .quebec > .second > .foodlab > ul.notes").append("<li>" + data.food.cuisines.quebec.restaurants.foodlab.notes[i]);
			};
			$("#food > .cuisines > .quebec > .second > .foodlab").append(ulContact);
				$("#food > .cuisines > .quebec > .second > .foodlab > ul.contact").append("<li><a href=\"" + data.food.cuisines.quebec.restaurants.foodlab.website + "\">" + data.food.cuisines.quebec.restaurants.foodlab.website);
				$("#food > .cuisines > .quebec > .second > .foodlab > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.foodlab.telephone);
				$("#food > .cuisines > .quebec > .second > .foodlab > ul.contact").append("<li>" + data.food.cuisines.quebec.restaurants.foodlab.address);			
			
		// Poutine ------------------------------------------------------------------------------------------------------------------------
		$("#food > .cuisines > .poutine").append("<div class=\"row\">" + "<div class=\"span12\">");
		$("#food > .cuisines > .poutine > .row > .span12").append("<h3>" + data.food.cuisines.poutine.name);
		for (var i = 0; i < data.food.cuisines.poutine.about.length; i++) {
			$("#food > .cuisines > .poutine > .row > .span12").append("<h5>" + data.food.cuisines.poutine.about[i]);
		};
		
		$("#food > .cuisines > .poutine").append("<div class=\"row first\">");
			// La Banquise
			$("#food > .cuisines > .poutine > .first ").append("<div class=\"banquise " + span + "\">");
			$("#food > .cuisines > .poutine > .first > .banquise").append("<h4>" + data.food.cuisines.poutine.restaurants.banquise.name);
			$("#food > .cuisines > .poutine > .first > .banquise").append("<p>" + hood + data.food.cuisines.poutine.restaurants.banquise.hood);
			$("#food > .cuisines > .poutine > .first > .banquise").append("<p>" + moment + data.food.cuisines.poutine.restaurants.banquise.moment);
			$("#food > .cuisines > .poutine > .first > .banquise").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.poutine.restaurants.banquise.notes.length; i++) {
				$("#food > .cuisines > .poutine > .first > .banquise > ul.notes").append("<li>" + data.food.cuisines.poutine.restaurants.banquise.notes[i]);
			};
			$("#food > .cuisines > .poutine > .first > .banquise").append(ulContact);
				$("#food > .cuisines > .poutine > .first > .banquise > ul.contact").append("<li><a href=\"" + data.food.cuisines.poutine.restaurants.banquise.website + "\">" + data.food.cuisines.poutine.restaurants.banquise.website);
				$("#food > .cuisines > .poutine > .first > .banquise > ul.contact").append("<li>" + data.food.cuisines.poutine.restaurants.banquise.telephone);
				$("#food > .cuisines > .poutine > .first > .banquise > ul.contact").append("<li>" + data.food.cuisines.poutine.restaurants.banquise.address);
				
		// France ------------------------------------------------------------------------------------------------------------------------
		$("#food > .cuisines > .france").append("<div class=\"row\">" + "<div class=\"span12\">");
		$("#food > .cuisines > .france > .row > .span12").append("<h3>" + data.food.cuisines.france.name);
		for (var i = 0; i < data.food.cuisines.france.about.length; i++) {
			$("#food > .cuisines > .france > .row > .span12").append("<h5>" + data.food.cuisines.france.about[i]);
		};

		$("#food > .cuisines > .france").append("<div class=\"row first\">");
			// L'Express
			$("#food > .cuisines > .france > .first ").append("<div class=\"express " + span + "\">");
			$("#food > .cuisines > .france > .first > .express").append("<h4>" + data.food.cuisines.france.restaurants.express.name);
			$("#food > .cuisines > .france > .first > .express").append("<p>" + hood + data.food.cuisines.france.restaurants.express.hood);
			$("#food > .cuisines > .france > .first > .express").append("<p>" + moment + data.food.cuisines.france.restaurants.express.moment);
			$("#food > .cuisines > .france > .first > .express").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.france.restaurants.express.notes.length; i++) {
				$("#food > .cuisines > .france > .first > .express > ul.notes").append("<li>" + data.food.cuisines.france.restaurants.express.notes[i]);
			};
			$("#food > .cuisines > .france > .first > .express").append(ulContact);
				$("#food > .cuisines > .france > .first > .express > ul.contact").append("<li><a href=\"" + data.food.cuisines.france.restaurants.express.website + "\">" + data.food.cuisines.france.restaurants.express.website);
				$("#food > .cuisines > .france > .first > .express > ul.contact").append("<li>" + data.food.cuisines.france.restaurants.express.telephone);
				$("#food > .cuisines > .france > .first > .express > ul.contact").append("<li>" + data.food.cuisines.france.restaurants.express.address);
			// Leméac
			$("#food > .cuisines > .france > .first ").append("<div class=\"lemeac " + span + "\">");
			$("#food > .cuisines > .france > .first > .lemeac").append("<h4>" + data.food.cuisines.france.restaurants.lemeac.name);
			$("#food > .cuisines > .france > .first > .lemeac").append("<p>" + hood + data.food.cuisines.france.restaurants.lemeac.hood);
			$("#food > .cuisines > .france > .first > .lemeac").append("<p>" + moment + data.food.cuisines.france.restaurants.lemeac.moment);
			$("#food > .cuisines > .france > .first > .lemeac").append(ulNotes);
			for (var i = 0; i < data.food.cuisines.france.restaurants.lemeac.notes.length; i++) {
				$("#food > .cuisines > .france > .first > .lemeac > ul.notes").append("<li>" + data.food.cuisines.france.restaurants.lemeac.notes[i]);
			};
			$("#food > .cuisines > .france > .first > .lemeac").append(ulContact);
				$("#food > .cuisines > .france > .first > .lemeac > ul.contact").append("<li><a href=\"" + data.food.cuisines.france.restaurants.lemeac.website + "\">" + data.food.cuisines.france.restaurants.lemeac.website);
				$("#food > .cuisines > .france > .first > .lemeac > ul.contact").append("<li>" + data.food.cuisines.france.restaurants.lemeac.telephone);
				$("#food > .cuisines > .france > .first > .lemeac > ul.contact").append("<li>" + data.food.cuisines.france.restaurants.lemeac.address);
		
	});
});